import React from 'react'
import styles from "./styles.css"
const formCol = `${styles.formgroup} col-md-6`

const MyAccountSirenaClub = (props: any) => {
    console.log({ props })
  
    return (
      <>
    <p className={styles.pagetitlecustom}>La Sirena Club</p>
        <div className={styles.formcolumn}>
         
          <>
            {
          <div className={styles.formrow}>
          <div className={formCol}>
            <div className={styles.formrow}>
              <div className={formCol}>
                <label htmlFor="inputTarjetaAsociada">Tarjeta asociada</label>
                <input
                  type="text"
                  className={styles.formc}
                  id="inputTarjetaAsociada"
                  placeholder="2005705556638"
                  readOnly
                />
              </div>
            </div>
            <div className={styles.textCenter}>
            <img src="https://caib.io/image27.png" />
            <br />
            <a href="/my-account-main">
            <button className={styles.customButton}>Volver atras</button>
            </a>
            </div>
          </div>
        </div>      
            }
          </>
        </div>
     
      </>
    )
    }

  export default MyAccountSirenaClub