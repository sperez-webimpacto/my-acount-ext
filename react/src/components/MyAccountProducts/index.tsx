import React, { FC } from "react"
import { OrderForm } from 'vtex.order-manager'
import MenuLink from "../../components/MenuLink"

import styles from './styles.css'
const active = `${styles.btn} ${styles.btngroupactive}`

const MyAccountProductsSection: FC = () => {

  const { useOrderForm } = OrderForm
  const orderFormContext = useOrderForm()

  return (
      <>
  <div className={styles.totalContainerProducts}>
      <MenuLink link="/account"/>
      <p className={styles.pagetitlecustomProducts}>Mis productos más comprados</p>
    
  <div className={styles.formcolumn}>
   <span style={{ color: "#004078",fontSize: "13px" }}>Ordenado por: </span>
  <div className={styles.btngroupProducts}>
    <button className={active}>Precio</button>
    <button className={styles.btn}>Fecha</button>
    <button className={styles.btn}>Categoría</button>
    <button className={styles.btn}>Compra</button>
  </div>
  <div className={styles.gridcontainerProducts}>

{/* Box */}
  <div className={styles.mobilproductsummary}>
  <div className={styles.mobilimage}><img src="https://caib.io/image14.png" /></div>
  <div className={styles.mobilframe}>
    <div className={styles.mobilnamebrand}>
      <p className={styles.mobilname}>Lomo de merluza austral MSC Premiun</p>
    </div>
    <div className={styles.mobildiv}>
      <div className={styles.mobilothermetadata}>
        <div className={styles.mobilprice}>19,90€</div>
        <div className={styles.mobillistprice}>antes 17,99€</div>
      </div>
      
        <button className={styles.customButtonsolid}>Añadir</button>
      
    </div>
  </div>
</div>
{/* End Box */}

{/* Box */}
<div className={styles.mobilproductsummary}>
  <div className={styles.mobilimage}><img src="https://caib.io/image14.png" /></div>
  <div className={styles.mobilframe}>
    <div className={styles.mobilnamebrand}>
      <p className={styles.mobilname}>Lomo de merluza austral MSC Premiun</p>
    </div>
    <div className={styles.mobildiv}>
      <div className={styles.mobilothermetadata}>
        <div className={styles.mobilprice}>19,90€</div>
        <div className={styles.mobillistprice}>antes 17,99€</div>
      </div>
      
        <button className={styles.customButtonsolid}>Añadir</button>
      
    </div>
  </div>
</div>
{/* End Box */}

{/* Box */}
<div className={styles.mobilproductsummary}>
  <div className={styles.mobilimage}><img src="https://caib.io/image14.png" /></div>
  <div className={styles.mobilframe}>
    <div className={styles.mobilnamebrand}>
      <p className={styles.mobilname}>Lomo de merluza austral MSC Premiun</p>
    </div>
    <div className={styles.mobildiv}>
      <div className={styles.mobilothermetadata}>
        <div className={styles.mobilprice}>19,90€</div>
        <div className={styles.mobillistprice}>antes 17,99€</div>
      </div>
      
        <button className={styles.customButtonsolid}>Añadir</button>
      
    </div>
  </div>
</div>
{/* End Box */}

{/* Box */}
<div className={styles.mobilproductsummary}>
  <div className={styles.mobilimage}><img src="https://caib.io/image14.png" /></div>
  <div className={styles.mobilframe}>
    <div className={styles.mobilnamebrand}>
      <p className={styles.mobilname}>Lomo de merluza austral MSC Premiun</p>
    </div>
    <div className={styles.mobildiv}>
      <div className={styles.mobilothermetadata}>
        <div className={styles.mobilprice}>19,90€</div>
        <div className={styles.mobillistprice}>antes 17,99€</div>
      </div>
      
        <button className={styles.customButtonsolid}>Añadir</button>
      
    </div>
  </div>
</div>
{/* End Box */}

{/* Box */}
<div className={styles.mobilproductsummary}>
  <div className={styles.mobilimage}><img src="https://caib.io/image14.png" /></div>
  <div className={styles.mobilframe}>
    <div className={styles.mobilnamebrand}>
      <p className={styles.mobilname}>Lomo de merluza austral MSC Premiun</p>
    </div>
    <div className={styles.mobildiv}>
      <div className={styles.mobilothermetadata}>
        <div className={styles.mobilprice}>19,90€</div>
        <div className={styles.mobillistprice}>antes 17,99€</div>
      </div>
      
        <button className={styles.customButtonsolid}>Añadir</button>
      
    </div>
  </div>
</div>
{/* End Box */}

{/* Box */}
<div className={styles.mobilproductsummary}>
  <div className={styles.mobilimage}><img src="https://caib.io/image14.png" /></div>
  <div className={styles.mobilframe}>
    <div className={styles.mobilnamebrand}>
      <p className={styles.mobilname}>Lomo de merluza austral MSC Premiun</p>
    </div>
    <div className={styles.mobildiv}>
      <div className={styles.mobilothermetadata}>
        <div className={styles.mobilprice}>19,90€</div>
        <div className={styles.mobillistprice}>antes 17,99€</div>
      </div>
      
        <button className={styles.customButtonsolid}>Añadir</button>
      
    </div>
  </div>
</div>
{/* End Box */}

{/* Box */}
<div className={styles.mobilproductsummary}>
  <div className={styles.mobilimage}><img src="https://caib.io/image14.png" /></div>
  <div className={styles.mobilframe}>
    <div className={styles.mobilnamebrand}>
      <p className={styles.mobilname}>Lomo de merluza austral MSC Premiun</p>
    </div>
    <div className={styles.mobildiv}>
      <div className={styles.mobilothermetadata}>
        <div className={styles.mobilprice}>19,90€</div>
        <div className={styles.mobillistprice}>antes 17,99€</div>
      </div>
      
        <button className={styles.customButtonsolid}>Añadir</button>
      
    </div>
  </div>
</div>
{/* End Box */}

{/* Box */}
<div className={styles.mobilproductsummary}>
  <div className={styles.mobilimage}><img src="https://caib.io/image14.png" /></div>
  <div className={styles.mobilframe}>
    <div className={styles.mobilnamebrand}>
      <p className={styles.mobilname}>Lomo de merluza austral MSC Premiun</p>
    </div>
    <div className={styles.mobildiv}>
      <div className={styles.mobilothermetadata}>
        <div className={styles.mobilprice}>19,90€</div>
        <div className={styles.mobillistprice}>antes 17,99€</div>
      </div>
      
        <button className={styles.customButtonsolid}>Añadir</button>
      
    </div>
  </div>
</div>
{/* End Box */}

  </div>

</div>
</div>  
      </>
    )
    }

    export default MyAccountProductsSection