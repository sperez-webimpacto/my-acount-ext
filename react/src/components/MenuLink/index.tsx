import React from 'react';
import styles from './styles.css';

const MenuLink = (props) => {
  const link = props.link;
  return (
    <div className={styles.menusLink}>
      <a href={link} className={styles.LinkMenu}>← Menú Usuario</a>
    </div>
  );
};

export default MenuLink;