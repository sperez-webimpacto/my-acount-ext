import GraphQLError from '../utils/GraphQLError'

// const MAX_RESOURCES = 500
const ENTITY = 'giftcardsorders_v01'
const SCHEMA_VERSION = 'giftcardsorders_v03'

const routes = {
  baseUrl: (account: string) =>
    `http://${account}.vtexcommercestable.com.br/api`,
  ordersEntity: (account: string) =>
    `${routes.baseUrl(account)}/dataentities/${ENTITY}`,
  nominateGiftCards: 'https://ve.giftcard.cl/wsgiftcard/operaciones/tarjeta/ogf002',
  getOrderByOrderId: (account: string, orderid: string) =>
    `${routes.ordersEntity(account)}/search?orderid=${orderid}&_schema=${SCHEMA_VERSION}&_fields=_all`,
}

// {
//   "usuario": "APP",
//   "password": "cencosud",
//   "tarjeta": "6019510100850005",
//   "estado": "Desbloquear",
//   "rut": "8546992-1",
//   "nombre":""
// }

const dataSecurityCencosud = {
  usuario: "SRConsulting",
  password: "y3nagrJg",
}

const defaultCencosudHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const defaultHeaders = (authToken: string) => ({
  'Content-Type': 'application/json',
  'Accept': 'application/vnd.vtex.ds.v10+json',
  'VtexIdclientAutCookie': authToken,
  'Proxy-Authorization': authToken,
  'Pragma': 'no-cache',
  'Cache-Control': 'no-cache',
})

export const resolvers = {
  Mutation: {
    nominateGiftCards: async (_: any, params: any, ctx: any) => {
      const {
        vtex: ioContext,
        clients: { hub, masterdata },
      } = ctx

      const { account, authToken } = ioContext

      const headers = defaultHeaders(authToken)
      const headersCenco = defaultCencosudHeaders

      const { cards, orderId } = params

      let results: any = []

      try {
        const url = routes.nominateGiftCards

        cards.forEach(async (card: any) => {
          let newNomi = {
            usuario: dataSecurityCencosud.usuario,
            password: dataSecurityCencosud.password,
            tarjeta: card,
            estado: "Desbloquear",
            rut: "",
            nombre: ""
          }

          const { data } = await hub.post(url, newNomi, headersCenco)

          console.log({ data })

          results.push(data?.codResp || "")
        })

        const urlMD = routes.getOrderByOrderId(account, orderId)

        const { data: orderGetted } = await hub.get(urlMD, headers)

        console.log({ orderGetted, urlMD, account, orderId, results, params })

        if (orderGetted) {
          try {
            const data = await masterdata
              .updatePartialDocument(
                {
                  dataEntity: ENTITY,
                  id: orderGetted[0].id,
                  fields: { isNominate: true },
                  schema: SCHEMA_VERSION
                },
                {
                  options: { headers },
                }
              )
              .then((res: any) => {
                console.log("updated Order: ", res)
                return res
              })

            console.log({ data })

          } catch (e) {
            console.log(e)
            if (e.message) {
              throw new GraphQLError(e.message)
            } else if (e.response && e.response.data && e.response.data.message) {
              throw new GraphQLError(e.response.data.message)
            }
          }
        }

      } catch (e) {
        if (e.message) {
          throw new GraphQLError(e.message)
        } else if (e.response && e.response.data && e.response.data.message) {
          throw new GraphQLError(e.response.data.message)
        }
      }

      return JSON.stringify(results)
    }
  }
}
