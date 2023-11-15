import React, { FC } from "react"
import { OrderForm } from 'vtex.order-manager'
import MenuLink from "../../../MenuLink"

import styles from './styles.css'

const MyAccountSirenaClubSection: FC = () => {

  const { useOrderForm } = OrderForm
  const orderFormContext = useOrderForm()

  return (
      <>
      <div className={styles.totalContainerSirenaClub}>
      <MenuLink link="/account/menu"/>
      <p className={styles.pagetitlecustomSirenaClub}>La Sirena Club</p>
      <div className={styles.containerSirenaClub}>
        <div className={styles.formcolumnSirenaClub}>
        <h4 className={styles.alertheadingSirenaClub}>¿Aún no eres miembro/a de la Sirena Club? <br /> Estas son las ventajas de formar parte de nuestra comunidad:</h4>
            <ul>
              <li>20 de regalo de bienvenida</li>
              <li>Te devolvemos el 3% de tus compras</li>
              <li>Ofertas exclusivas y acceso a campañas especiales</li>
              <li>Talleres de cocina y contenidos exclusivos online</li>
              <li>Sorteos de carros de compra, viajes y más sorpresas</li>
            </ul>

            <div className={styles.buttonsSirenaClub}>
              <button type="submit" className={styles.customButtonSirenaClub}>Vincular mi cuenta LSC existente</button>
              <button type="submit" className={styles.customButtonSirenaClub}>Quiero ser de la Sirena Club</button>
              <button type="submit" className={styles.customButtonSirenaClub}>Volver atrás</button>
              </div>
            
        </div>
    
      </div>
      </div>
      </>
  )
}

export default MyAccountSirenaClubSection
