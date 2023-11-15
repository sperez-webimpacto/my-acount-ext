import React from 'react'
import styles from "./styles.css"
//const active = `${styles.btn} ${styles.btngroupactive}`

const MyAccountAlert = (props: any) => {
    console.log({ props })
  
    return (
      <>
    <p className={styles.pagetitlecustom}>Mis alertas</p>
  <div className={styles.formcolumn}>
 <p style={{margin:5}}>Tienes Las Siguientes Alertas Activas:</p>
  <div className={styles.gridcontainer}>

  <div className={styles.container}>
    <img src="https://caib.io/image14.png" alt="Imagen" />
    <div className={styles.textcontainer}>
      <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
      <p className={styles.ftext} style={{ marginBottom: "-10px" }}>
        19,90€
      </p>
    </div>
    <button className={styles.customButtonsolidAlert}>
      <img
        style={{ verticalAlign: "middle" }}
        src="https://caib.io/trash-svgrepo-com.svg"
        alt="Imagen"
      />
      <span style={{ verticalAlign: "middle" }}>Quitar alerta</span>
    </button>
  </div>
  <div className={styles.container}>
    <img src="https://caib.io/image14.png" alt="Imagen" />
    <div className={styles.textcontainer}>
      <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
      <p className={styles.ftext} style={{ marginBottom: "-10px" }}>
        19,90€
      </p>
    </div>
    <span className={styles.buttoncontainer} style={{ alignSelf: "flex-end" }}>
      <button className={styles.custombutton}>
        {" "}
        <img
          style={{ verticalAlign: "middle" }}
          src="https://caib.io/carrito.svg"
          alt="Imagen"
        />
        <span style={{ verticalAlign: "middle" }}>Añadir a la cesta</span>
      </button>
      <span className={styles.icon}>
        <img
          style={{ verticalAlign: "middle" }}
          src="https://caib.io/trash-svgrepo-com.svg"
          alt="Imagen"
        />
      </span>
    </span>
  </div>




  </div>

</div>
     
      </>
    )
    }

  export default MyAccountAlert