import React from 'react'
import styles from "./MyAccountCheque.css"
const formCol = `${styles.formgroup} col-md-2`
import MenuLink from "../../components/MenuLink"

const MyAccountCheque = (props: any) => {
    console.log({ props })
  
    return (
      <>
    <div className={styles.totalContainerCheque}>
    <MenuLink link="/account"/>
    <p className={styles.pagetitlecustomCheque}>Cheque trimestral</p>
        <div className={styles.formcolumn}>
        <p>Con la sirena Club, acumulas en cada compra. Aqui podras encontrar toda la informacion de tu proximo cheque trimestral.</p>
          <form>
          <>
            {
                <div className={styles.formrow}>
                <div className={formCol}>
                  
                  <div className={styles.container}>
                    <div className={styles.textInput}>
                      <p>Acumulado en el trimestre actual: </p>
                    </div>
                    <div className={styles.inputCustom}>
                      <input type="number" className={styles.formc} placeholder="0 €" />
                    </div>
                  </div>

                  <div className={styles.container}>
                    <div className={styles.textInput}>
                      <p>
                        Te faltan <b style={{ color: "red" }}>0€</b> para obtener el cheque
                      </p>
                    </div>
                  </div>

                  <div className={styles.container}>
                    <div className={styles.textInput}>
                      <p>Dias para que termine el periodo actual: </p>
                    </div>
                    <div className={styles.inputCustom}>
                      <input type="number" className={styles.formc} placeholder="0 €" />
                    </div>
                  </div>

                  <div className={styles.textCenter}>
                  <a href="/my-account-main">
                  <button className={styles.customButton}>
                   Volver atras
                  </button>
                   </a>
                    </div>
                </div>
              </div>
            }
          </>
          </form>
        </div>
        </div>
      </>
    )
    }

  export default MyAccountCheque