import React, { FC, useContext, useEffect, useState } from "react"
import { useLazyQuery, useMutation } from 'react-apollo'
import { OrderForm } from 'vtex.order-manager'
import { Alert, Checkbox, Spinner, ToastContext } from 'vtex.styleguide'

import * as FileSaver from "file-saver"
import * as XLSX from "xlsx"

// import listOrders from './../../../../../utils/graphql/listOrders.graphql'

import listOrders from './../../../../../utils/graphql/listOrders.graphql'
import nominateGiftCards from './../../../../../utils/graphql/nominateGiftCards.graphql'

import './styles.css'

const MyAccountOrdersSection: FC = () => {

  const { useOrderForm } = OrderForm
  const orderFormContext = useOrderForm()

  const { showToast }: any = useContext(ToastContext)

  const [email, setEmail] = useState<any>(orderFormContext?.orderForm?.clientProfileData?.email)
  const [dateOrder, setDateOrder] = useState<any>("")
  const [idOrder, setIdOrder] = useState<any>("")
  const [statusOrder, setStatus] = useState<any>("")
  const [isLoading, setIsLoading] = useState<any>(false)
  const [isCheckedNominate, setIsCheckedNominate] = useState<any>(false)
  const [isPosibleNominate, setIsPosibleNominate] = useState<any>(false)

  const [userOrders, setUserOrders] = useState<any>([])

  const [selectedOrder, setSelectedOrder] = useState<any>({})

  const [messageAlert, setMessageAlert] = useState("")
  const [typeAlert, setTypeAlert] = useState("success")
  const [showAlert, setShowAlert] = useState(false)

  const [getOrders, { loading: loadingAllOrders, data: dataAllOrders }] = useLazyQuery(listOrders, {
    variables: {
      term: email,
      field: "emailUser",
      dateTo: "2200-01-01",
      dateFrom: "2000-01-01"
    }
  })

  const [nominateAllGiftCards] = useMutation(nominateGiftCards)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      getOrders({
        variables: {
          term: email,
          field: "emailUser",
          dateTo: "2200-01-01",
          dateFrom: "2000-01-01"
        }
      })

      setIsLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    console.log(dataAllOrders)
    if (dataAllOrders && dataAllOrders.listOrders) {
      setUserOrders(dataAllOrders.listOrders)
      console.log("Listado de Ordenes: ", dataAllOrders.listOrders)
    }
  }, [dataAllOrders])

  useEffect(() => {
    if (selectedOrder.csvDigital && selectedOrder.csvDigital != " ") setIsPosibleNominate(true)
  }, [selectedOrder])

  const handleDownloadJSONData = (jsonData) => {
    if (jsonData) {
      const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
      const fileExtension = ".xlsx"

      let str = jsonData
      let buff = new Buffer(str, 'base64')
      let base64ToStringNew = buff.toString('ascii')

      console.log(base64ToStringNew)

      const selectedDataToExport = JSON.parse(base64ToStringNew)

      console.log(selectedDataToExport)

      const ws = XLSX.utils.json_to_sheet(selectedDataToExport)
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] }
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" })
      const data = new Blob([excelBuffer], { type: fileType })

      const date = String(new Date().toISOString()).split("T")[0].replace("-", "").replace("-", "")
      const time = String(new Date().toISOString()).split("T")[1].replace(":", "").replace(":", "").replace(".", "").slice(0, 6)

      FileSaver.saveAs(data, `Carga_O` + fileExtension)

    } else {
      showToast("No fue posible descargar la informacion")
    }
  }

  const handleClickOrder = (order: any) => {
    console.log(order)

    setSelectedOrder(order)

    setStatus(order.status || "")
    setIdOrder(order.orderid || "")
    setDateOrder(order.createdIn.split("T")[0] || "")
    setIsCheckedNominate(order.isNominate || false)
  }

  const handleNominateGiftCards = () => {
    console.log({ selectedOrder })

    if (selectedOrder.csvDigital === " ") return

    const dataToNominate = JSON.parse(atob(selectedOrder.csvDigital) || "[]")

    if (dataToNominate && dataToNominate.length > 0 && dataToNominate != " ") {
      const cards = dataToNominate.map((data: any) => {
        return String(data.Cuenta).slice(0, -5).length === 16 || String(data.Cuenta).slice(0, -5).length === 12 ? String(data.Cuenta).slice(0, -5) : String(data.Cuenta)
      })

      console.log({ cards })

      if (selectedOrder && selectedOrder.orderid) {
        if (cards && cards.length > 0) {
          nominateAllGiftCards({
            variables: {
              cards: cards || [],
              orderId: selectedOrder.orderid
            }
          }).then((res) => {
            console.log({ res })
            setMessageAlert("Se han desbloqueado las GiftCards satisfactoriamente.")
            setTypeAlert("success")
            setShowAlert(true)
          }).catch((e) => {
            console.error({ e })
            setMessageAlert("No se han podido desbloquear las GiftCards")
            setTypeAlert("error")
            setShowAlert(true)
          })
        } else {
          setMessageAlert("No se han encontrado GiftCards para desbloquear.")
          setTypeAlert("error")
          setShowAlert(true)
        }
      } else {
        setMessageAlert("No se han podido desbloquear las GiftCards")
        setTypeAlert("error")
        setShowAlert(true)
      }
    }

  }

  return (
    <>
      <div className="orders_Section">
        {
          (loadingAllOrders || isLoading) && <>
            <Spinner />
          </>
        }

        <div className="orders_headerContainer">
          <div className="orders_headerItem">
            <div>
              Fecha de compra
            </div>
            <div>
              {dateOrder || ""}
            </div>
          </div>
          <div className="orders_headerItem" >
            <div>
              N de compra
            </div>
            <div>
              {idOrder || ""}
            </div>
          </div>
          <div className="orders_headerItem" >
            <div>
              Estado del pedido
            </div>
            <div>
              {statusOrder || ""}
            </div>
          </div>
        </div>
        {
          (selectedOrder.csvDigital != " " || isPosibleNominate) &&
          <div className="orders_Section_Unlock">
            <div>
              Para activar las tarjetas debes desbloquearlas.
            </div>
            <div>
              <Checkbox
                checked={isCheckedNominate}
                id="option-0"
                label="Desbloquear GC"
                name="default-checkbox-group"
                onChange={(e: any) => {
                  console.log({ e })
                  setIsCheckedNominate(!isCheckedNominate)
                  handleNominateGiftCards()
                }}
                value="option-0"
                disabled={selectedOrder.isNominate}
              />
            </div>
          </div>}
        {showAlert && <div>
          <div>
            <Alert type={typeAlert} onClose={() => console.log('Closed!')}>
              {messageAlert}
            </Alert>
          </div>
        </div>}
        <div className="orders_Section_Totals">
          {
            userOrders && userOrders.map((order: any, index: any) => {
              return (
                <div className="orders_Section_Orders">
                  <div key={index} onClick={() => { handleClickOrder(order) }}>
                    <div className="orders_bodyListContainer">
                      <div className="orders_bodyListItem" >
                        <div className="orders_bodyListItem_Img">
                          <img src="/arquivos/orderGiftCard.png" alt="" />
                        </div>
                      </div>

                      <div className="orders_bodyListItem_Data">
                        <div>
                          <div>
                            Cantidad
                          </div>
                          <div>
                            {String(order.quantityFormater).replace('"', '').replace('"', '')}
                          </div>
                        </div>
                        <div>
                          <div>
                            Descuento
                          </div>
                          <div>
                            0
                          </div>
                        </div>
                        <div>
                          <div>
                            Monto
                          </div>
                          <div>
                            {String(order.mountFormater).replace('"', '').replace('"', '')}
                          </div>
                        </div>
                        <div>
                          <div>
                            Precio
                          </div>
                          <div>
                            {String(order.mountFormater).replace('"', '').replace('"', '')}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="orders_bodyListItem_Actions">
                      <div>
                        {
                          order.invoiceURL &&
                          order.invoiceURL != "" &&
                          order.invoiceNumber != "" &&
                          <div>
                            <a href={order.invoiceURL} target='_blank'>
                              Descargar factura: {order.invoiceNumber}
                            </a>
                          </div>
                        }
                        <div>
                          <button onClick={() => {
                            handleDownloadJSONData(order.csvDigital)
                          }}>
                            Descargar listado de GC
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default MyAccountOrdersSection
