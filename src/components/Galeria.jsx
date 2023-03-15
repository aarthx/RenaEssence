import React from 'react';
import styles from './Galeria.module.css';

const Galeria = () => {
  return (
    <section className={styles.galeria}>
      <div className={styles.conjunto1}>
        <img src="src/assets/galery/monalisa.png" alt="Monalisa" />
        <img
          src="src/assets/galery/virgemDaRocha.png"
          alt="Virgem das Rochas"
        />
        <img
          src="src/assets/galery/homemVitruviano2.png"
          alt="O Homem Vitruviano"
        />
        <img
          src="src/assets/galery/ultimaCeia.png"
          alt="A Última Ceia"
          style={{ gridColumn: '-1 / 1' }}
        />
      </div>
      <div className={styles.conjunto2}>
        <img
          src="src/assets/galery/capelaSistina.png"
          alt="Teto da Capela Sistina"
        />
        <img src="src/assets/galery/venus.png" alt="O Nascimento de Vênus" />
        <img
          src="src/assets/galery/adao.png"
          alt="A criação de Adão"
          style={{ gridColumn: '-1 / 1' }}
        />
        <img src="src/assets/galery/madona.png" alt="Madona das escadas" />
        <img src="src/assets/galery/centauromaquia.png" alt="Centauromaquia" />
      </div>
    </section>
  );
};

export default Galeria;
