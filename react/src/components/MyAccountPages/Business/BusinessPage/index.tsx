import React, { FC } from "react"
import { OrderForm } from 'vtex.order-manager'

import styles from './styles.css'

const MyAccountSirenaClubSection: FC = () => {

  const { useOrderForm } = OrderForm
  const orderFormContext = useOrderForm()

  return (
      <>
      <p className={styles.pagetitlecustom}>La Sirena Club</p>
      <div className={styles.container}>
        <div className={styles.formcolumn}>
        <h4 className={styles.alertheading}>¿Aún no eres miembro/a de la Sirena Club? <br /> Estas son las ventajas de formar parte de nuestra comunidad:</h4>
            <ul>
              <li>20 de regalo de bienvenida</li>
              <li>Te devolvemos el 3% de tus compras</li>
              <li>Ofertas exclusivas y acceso a campañas especiales</li>
              <li>Talleres de cocina y contenidos exclusivos online</li>
              <li>Sorteos de carros de compra, viajes y más sorpresas</li>
            </ul>

              <p><button type="submit" className={styles.customButton}>Vincular mi cuenta LSC existente</button></p>
              <button type="submit" className={styles.customButton}>Quiero ser de la Sirena Club</button>
              <p><button type="submit" className={styles.customButton}>Volver atrás</button></p>
            
        </div>
    
      </div>
      </>
  )
}

export default MyAccountSirenaClubSection
