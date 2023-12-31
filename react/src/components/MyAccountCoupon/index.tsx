import React, { FC } from "react"
import { OrderForm } from 'vtex.order-manager'
import MenuLink from "../../components/MenuLink"

import styles from './styles.css'

const MyAccountCouponSection: FC = () => {

  const { useOrderForm } = OrderForm
  const orderFormContext = useOrderForm()

  return (
      <>
      <div className={styles.totalContainerCoupon}>
      <MenuLink link="/account"/>
      <p className={styles.pagetitlecustomCoupon}>Mis cupones</p>
          <div className={styles.fcolumnCoupon}>
            <p> Todos tus cupones, online y offline en tu dispositivo, para usar cuando y donde los necesites. </p>
            <div className={styles.containerCoupon}>
              <div className={styles.couponBox}>
                <div className={styles.textCenter}>
                  <h1 style={{ color: "red" }}>6€</h1>
                  <p style={{ marginBlockStart: "-1em", marginBlockEnd: "1em" }}> de descuento </p>
                  <img src="https://caib.io/image-27.svg" />
                </div>
              </div>
              <div className={styles.couponBox}>
                <div className={styles.textCenter}>
                  <h1 style={{ color: "red" }}>6€</h1>
                  <p style={{ marginBlockStart: "-1em", marginBlockEnd: "1em" }}> de descuento </p>
                  <img src="https://caib.io/image-27.svg" />
                </div>
              </div>
              <div className={styles.couponBox}>
                <div className={styles.textCenter}>
                  <h1 style={{ color: "red" }}>6€</h1>
                  <p style={{ marginBlockStart: "-1em", marginBlockEnd: "1em" }}> de descuento </p>
                  <img src="https://caib.io/image-27.svg" />
                </div>
              </div>
              <div className={styles.couponBox}>
                <div className={styles.textCenter}>
                  <h1 style={{ color: "red" }}>6€</h1>
                  <p style={{ marginBlockStart: "-1em", marginBlockEnd: "1em" }}> de descuento </p>
                  <img src="https://caib.io/image-27.svg" />
                </div>
              </div>
              <div className={styles.couponBox}>
                <div className={styles.textCenter}>
                  <h1 style={{ color: "red" }}>6€</h1>
                  <p style={{ marginBlockStart: "-1em", marginBlockEnd: "1em" }}> de descuento </p>
                  <img src="https://caib.io/image-27.svg" />
                </div>
              </div>
              <div className={styles.couponBox}>
                <div className={styles.textCenter}>
                  <h1 style={{ color: "red" }}>6€</h1>
                  <p style={{ marginBlockStart: "-1em", marginBlockEnd: "1em" }}> de descuento </p>
                  <img src="https://caib.io/image-27.svg" />
                </div>
              </div>
              <div className={styles.couponBox}>
                <div className={styles.textCenter}>
                  <h1 style={{ color: "red" }}>6€</h1>
                  <p style={{ marginBlockStart: "-1em", marginBlockEnd: "1em" }}> de descuento </p>
                  <img src="https://caib.io/image-27.svg" />
                </div>
              </div>
              <div className={styles.couponBox}>
                <div className={styles.textCenter}>
                  <h1 style={{ color: "red" }}>6€</h1>
                  <p style={{ marginBlockStart: "-1em", marginBlockEnd: "1em" }}> de descuento </p>
                  <img src="https://caib.io/image-27.svg" />
                </div>
              </div>
              <div className={styles.couponBox}>
                <div className={styles.textCenter}>
                  <h1 style={{ color: "red" }}>6€</h1>
                  <p style={{ marginBlockStart: "-1em", marginBlockEnd: "1em" }}> de descuento </p>
                  <img src="https://caib.io/image-27.svg" />
                </div>
              </div>
              <div className={styles.couponBox}>
                <div className={styles.textCenter}>
                  <h1 style={{ color: "red" }}>6€</h1>
                  <p style={{ marginBlockStart: "-1em", marginBlockEnd: "1em" }}> de descuento </p>
                  <img src="https://caib.io/image-27.svg" />
                </div>
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
     
      </>
  )
}

export default MyAccountCouponSection