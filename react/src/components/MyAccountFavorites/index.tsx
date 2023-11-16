import React, { useState } from "react";
import styles from "./styles.css"
import productssumary from "./productssumary.css"
import MenuLink from "../../components/MenuLink"
const active = `${styles.btngroupactive}`

const MyAccountFavorites = (props: any) => {
    console.log({ props })
    const [gridcontainerVisible, setGridcontainerVisible] = useState(true);
    const [filterVisible, setFilterVisible] = useState(false);
    

    const productsData = (event: any) => {
      const clickedElement = event.target;
      //const id = clickedElement.id;
      // Comprobar si la clase está presente en el elemento
      const hasClass = clickedElement.classList.contains(''+active+'');
  
      // Si la clase está presente, la eliminamos de lo contrario, la agregamos
      if (hasClass) {
        if(clickedElement.id == "products") {
        clickedElement.setAttribute('class', ''+styles.btn+'');
        setGridcontainerVisible(true);
        setFilterVisible(false);
        }
      } else {
        if(clickedElement.id == "products") {
        clickedElement.setAttribute('class', ''+styles.btn+' '+active+'');
        setGridcontainerVisible(false);
        setFilterVisible(true);
        }
      }

    };

  return (
  <>
  <div className={styles.totalContainerFavorite}>
      <MenuLink link="/account"/>
  <p className={styles.pagetitlecustomFavorite}>Mis favoritos</p>
  
  <div className={styles.formcolumn}>
   Ordenado por:
  <div onClick={productsData} className={styles.btngroup}>
    <button id="products" className={styles.btn}>Productos</button>
    <button id="recetas" className={styles.btn}>Recetas</button>
    <button id="menus" className={styles.btn}>Menús</button>
  </div>
  {gridcontainerVisible && (
  <div id="gridcontainer" className={styles.gridcontainer}>

  <div className={styles.container}>
    <div className={productssumary.productsummary}>
      <div className={productssumary.image}>
        <img src="https://caib.io/image14.png" alt="Imagen" />
      </div>
      <div className={productssumary.frame}>
        <div className={productssumary.namebrand}>
          <p className={productssumary.name}>Lomo de merluza austral MSC Premium</p>
        </div>
        <div className={productssumary.div}>
          <div className={productssumary.othermetadata}>
            <div className={productssumary.price}>19,90€</div>
            <div className={productssumary.listprice}>antes 17,99€</div>
          </div>
          <div className={productssumary.divwrapper}>
            <button className={styles.customButtonsolidFavorite}>Añadir a la cesta</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={styles.container}>
    <img src="https://caib.io/image1414.png" alt="Imagen" />
    <div className={styles.textcontainer}>
      <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
      <button type="submit" className={styles.customButtonFavorite}>
        Ver receta
      </button>
      <button className={styles.customButtonsolidFavorite}>Añadir</button>
    </div>
  </div>


  <div className={styles.container}>
    <div className={productssumary.productsummary}>
      <div className={productssumary.image}>
        <img src="https://caib.io/image14.png" alt="Imagen" />
      </div>
      <div className={productssumary.frame}>
        <div className={productssumary.namebrand}>
          <p className={productssumary.name}>Lomo de merluza austral MSC Premium</p>
        </div>
        <div className={productssumary.div}>
          <div className={productssumary.othermetadata}>
            <div className={productssumary.price}>19,90€</div>
            <div className={productssumary.listprice}>antes 17,99€</div>
          </div>
          <div className={productssumary.divwrapper}>
            <button className={styles.customButtonsolidFavorite}>Añadir a la cesta</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={styles.container}>
    <img src="https://caib.io/image141414.png" alt="Imagen" />
    <div className={styles.textcontainer}>
      <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
      <button type="submit" className={styles.customButtonFavorite}>
        Ver receta
      </button>
    </div>
  </div>

  
  
  <div className={styles.container}>
    <div className={productssumary.productsummary}>
      <div className={productssumary.image}>
        <img src="https://caib.io/image14.png" alt="Imagen" />
      </div>
      <div className={productssumary.frame}>
        <div className={productssumary.namebrand}>
          <p className={productssumary.name}>Lomo de merluza austral MSC Premium</p>
        </div>
        <div className={productssumary.div}>
          <div className={productssumary.othermetadata}>
            <div className={productssumary.price}>19,90€</div>
            <div className={productssumary.listprice}>antes 17,99€</div>
          </div>
          <div className={productssumary.divwrapper}>
            <button className={styles.customButtonsolidFavorite}>Añadir a la cesta</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className={styles.container}>
    <img src="https://caib.io/image141414.png" alt="Imagen" />
    <div className={styles.textcontainer}>
      <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
      <button type="submit" className={styles.customButtonFavorite}>
        Ver receta
      </button>
    </div>
  </div>



  <div className={styles.container}>
    <img src="https://caib.io/image1414.png" alt="Imagen" />
    <div className={styles.textcontainer}>
      <p className={styles.ftext}>Lomo de merluza austral MSC Premium</p>
      <button type="submit" className={styles.customButtonFavorite}>
        Ver receta
      </button>
      <button className={styles.customButtonsolidFavorite}>Añadir</button>
    </div>
  </div>
  </div>
   )}

{filterVisible && (
  <div id="gridcontainer" className={styles.gridcontainer}>

  <div className={styles.container}>
    <div className={productssumary.productsummary}>
      <div className={productssumary.image}>
        <img src="https://caib.io/image14.png" alt="Imagen" />
      </div>
      <div className={productssumary.frame}>
        <div className={productssumary.namebrand}>
          <p className={productssumary.name}>Lomo de merluza austral MSC Premium</p>
        </div>
        <div className={productssumary.div}>
          <div className={productssumary.othermetadata}>
            <div className={productssumary.price}>19,90€</div>
            <div className={productssumary.listprice}>antes 17,99€</div>
          </div>
          <div className={productssumary.divwrapper}>
            <button className={styles.customButtonsolidFavorite}>Añadir a la cesta</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.container}>
    <div className={productssumary.productsummary}>
      <div className={productssumary.image}>
        <img src="https://caib.io/image14.png" alt="Imagen" />
      </div>
      <div className={productssumary.frame}>
        <div className={productssumary.namebrand}>
          <p className={productssumary.name}>Lomo de merluza austral MSC Premium</p>
        </div>
        <div className={productssumary.div}>
          <div className={productssumary.othermetadata}>
            <div className={productssumary.price}>19,90€</div>
            <div className={productssumary.listprice}>antes 17,99€</div>
          </div>
          <div className={productssumary.divwrapper}>
            <button className={styles.customButtonsolidFavorite}>Añadir a la cesta</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.container}>
    <div className={productssumary.productsummary}>
      <div className={productssumary.image}>
        <img src="https://caib.io/image14.png" alt="Imagen" />
      </div>
      <div className={productssumary.frame}>
        <div className={productssumary.namebrand}>
          <p className={productssumary.name}>Lomo de merluza austral MSC Premium</p>
        </div>
        <div className={productssumary.div}>
          <div className={productssumary.othermetadata}>
            <div className={productssumary.price}>19,90€</div>
            <div className={productssumary.listprice}>antes 17,99€</div>
          </div>
          <div className={productssumary.divwrapper}>
            <button className={styles.customButtonsolidFavorite}>Añadir a la cesta</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.container}>
    <div className={productssumary.productsummary}>
      <div className={productssumary.image}>
        <img src="https://caib.io/image14.png" alt="Imagen" />
      </div>
      <div className={productssumary.frame}>
        <div className={productssumary.namebrand}>
          <p className={productssumary.name}>Lomo de merluza austral MSC Premium</p>
        </div>
        <div className={productssumary.div}>
          <div className={productssumary.othermetadata}>
            <div className={productssumary.price}>19,90€</div>
            <div className={productssumary.listprice}>antes 17,99€</div>
          </div>
          <div className={productssumary.divwrapper}>
            <button className={styles.customButtonsolidFavorite}>Añadir a la cesta</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.container}>
    <div className={productssumary.productsummary}>
      <div className={productssumary.image}>
        <img src="https://caib.io/image14.png" alt="Imagen" />
      </div>
      <div className={productssumary.frame}>
        <div className={productssumary.namebrand}>
          <p className={productssumary.name}>Lomo de merluza austral MSC Premium</p>
        </div>
        <div className={productssumary.div}>
          <div className={productssumary.othermetadata}>
            <div className={productssumary.price}>19,90€</div>
            <div className={productssumary.listprice}>antes 17,99€</div>
          </div>
          <div className={productssumary.divwrapper}>
            <button className={styles.customButtonsolidFavorite}>Añadir a la cesta</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
  )}


  
</div>
</div>
     
      </>
    )
    }

  export default MyAccountFavorites