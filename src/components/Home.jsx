import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.mainContent}>
      <section className={styles.capa}>
        <h2>
          O Renascimento: um Período de <span>Mudanças</span>
        </h2>
        <img src="src/assets/leoDaVinci.png" alt="Leonardo da Vinci sombra" />
      </section>
      <section className={styles.imgsHome}>
        <div>
          <img
            src="/src/assets/amorSacro.png"
            alt="Arte Amor Sacro e amor Profano"
          />
          <p>
            Inspirado nos valores da{' '}
            <span>
              Antiguidade Clássica e gerado pelas modificações econômicas
            </span>{' '}
            , o Renascimento reformulou a vida medieval e deu início à Idade
            Moderna.
          </p>
        </div>
        <div>
          <p>
            Foi marcado por importantes descobertas científicas, notadamente nos
            campos da <span>astronomia</span> , da <span>física</span>, da{' '}
            <span>medicina</span>, da <span>matemática</span> e da{' '}
            <span>geografia</span>.
          </p>
          <img
            src="/src/assets/homemVitruviano.png"
            alt="Arte O Homem Vitruviano"
          />
        </div>
      </section>
      <section className={styles.citeHome}>
        <blockquote>
          “Nada pode ser amado ou odiado antes de ser compreendido” <br />{' '}
          <span>Leonardo da Vinci</span>
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
