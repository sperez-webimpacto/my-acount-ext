import React, { FC } from "react"
import { OrderForm } from 'vtex.order-manager'

import styles from './styles.css'
const active = `${styles.btn} ${styles.btngroupactive}`

const MyAccountProductsSection: FC = () => {

  const { useOrderForm } = OrderForm
  const orderFormContext = useOrderForm()

  return (
      <>
      <p className={styles.pagetitlecustom}>Mis productos más comprados</p>
    
  <div className={styles.formcolumn}>
   <span style={{ color: "#004078" }}>Ordenado por:</span>
  <div className={styles.btngroup}>
    <button className={active}>Precio</button>
    <button className={styles.btn}>Fecha</button>
    <button className={styles.btn}>Categoría</button>
    <button className={styles.btn}>Más comprados</button>
  </div>
  <div className={styles.gridcontainer}>

    <div className={styles.nncontainer}>
      <img src="https://caib.io/image14.png" alt="Imagen" />
      <div className={styles.textcontainer}>
        <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
        <p className={styles.ftext} style={{ marginBottom: "-10px" }}>
          19,90€
        </p>
        <p style={{ color: "red" }}>antes 17,99€</p>
      </div>
      <button className={styles.customButtonsolid}>Añadir</button>
    </div>

    <div className={styles.nncontainer}>
      <img src="https://caib.io/image14.png" alt="Imagen" />
      <div className={styles.textcontainer}>
        <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
        <p className={styles.ftext} style={{ marginBottom: "-10px" }}>
          19,90€
        </p>
        <p style={{ color: "red" }}>antes 17,99€</p>
      </div>
      <button className={styles.customButtonsolid}>Añadir</button>
    </div>

    <div className={styles.nncontainer}>
      <img src="https://caib.io/image14.png" alt="Imagen" />
      <div className={styles.textcontainer}>
        <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
        <p className={styles.ftext} style={{ marginBottom: "-10px" }}>
          19,90€
        </p>
        <p style={{ color: "red" }}>antes 17,99€</p>
      </div>
      <button className={styles.customButtonsolid}>Añadir</button>
    </div>

    <div className={styles.nncontainer}>
      <img src="https://caib.io/image14.png" alt="Imagen" />
      <div className={styles.textcontainer}>
        <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
        <p className={styles.ftext} style={{ marginBottom: "-10px" }}>
          19,90€
        </p>
        <p style={{ color: "red" }}>antes 17,99€</p>
      </div>
      <button className={styles.customButtonsolid}>Añadir</button>
    </div>

    <div className={styles.nncontainer}>
      <img src="https://caib.io/image14.png" alt="Imagen" />
      <div className={styles.textcontainer}>
        <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
        <p className={styles.ftext} style={{ marginBottom: "-10px" }}>
          19,90€
        </p>
        <p style={{ color: "red" }}>antes 17,99€</p>
      </div>
      <button className={styles.customButtonsolid}>Añadir</button>
    </div>

    <div className={styles.nncontainer}>
      <img src="https://caib.io/image14.png" alt="Imagen" />
      <div className={styles.textcontainer}>
        <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
        <p className={styles.ftext} style={{ marginBottom: "-10px" }}>
          19,90€
        </p>
        <p style={{ color: "red" }}>antes 17,99€</p>
      </div>
      <button className={styles.customButtonsolid}>Añadir</button>
    </div>

    <div className={styles.nncontainer}>
      <img src="https://caib.io/image14.png" alt="Imagen" />
      <div className={styles.textcontainer}>
        <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
        <p className={styles.ftext} style={{ marginBottom: "-10px" }}>
          19,90€
        </p>
        <p style={{ color: "red" }}>antes 17,99€</p>
      </div>
      <button className={styles.customButtonsolid}>Añadir</button>
    </div>

    <div className={styles.nncontainer}>
      <img src="https://caib.io/image14.png" alt="Imagen" />
      <div className={styles.textcontainer}>
        <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
        <p className={styles.ftext} style={{ marginBottom: "-10px" }}>
          19,90€
        </p>
        <p style={{ color: "red" }}>antes 17,99€</p>
      </div>
      <button className={styles.customButtonsolid}>Añadir</button>
    </div>

  </div>

</div>
     
      </>
    )
    }

    export default MyAccountProductsSection