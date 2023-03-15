import React from 'react';
import styles from './Artistas.module.css';

const Artistas = () => {
  return (
    <section className={styles.artistas}>
      <div className={styles.boxArtist}>
        <img src="src/assets/daVinci.png" alt="Leonardo da Vinci" />
        <div className={styles.artistDescription}>
          <h2>Leonardo da Vinci</h2>
          <p>
            Polímata nascido na atual Itália, uma das figuras mais importantes
            do Alto Renascimento, que se destacou como cientista, matemático,
            engenheiro, inventor, anatomista, pintor, escultor, arquiteto,
            botânico, poeta e músico.
          </p>
          <p>Data: 1452 - 1519</p>
          <ul aria-label="Principais trabalhos">
            <li>Mona Lisa</li>
            <li>A Última Ceia</li>
            <li>A Virgem das Rochas</li>
            <li>Homem Vitruviano</li>
          </ul>
        </div>
      </div>
      <div className={styles.boxArtist}>
        <div className={styles.artistDescription}>
          <h2>Michelangelo</h2>
          <p>
            Miguel Ângelo, foi um pintor, escultor, poeta, anatomista e
            arquiteto italiano, considerado um dos maiores criadores da história
            da arte do ocidente.
          </p>
          <p>Data: 1475 - 1564</p>
          <ul aria-label="Principais trabalhos">
            <li>Teto da Capela Sistina</li>
            <li>A Criação de Adão</li>
            <li>Madonna da Escada</li>
            <li>Centauromaquia</li>
          </ul>
        </div>
        <img src="src/assets/michelangelo.png" alt="Michelangelo" />
      </div>
      <div className={styles.boxArtist}>
        <img src="src/assets/botticelli.png" alt="Botticelli" />
        <div className={styles.artistDescription}>
          <h2>Sandro Botticelli</h2>
          <p>
            Pintor italiano. Assim como um de seus irmãos, havia sido apelidado
            de "botticelli", que significa em italiano "pequeno tonel", o
            epíteto substitui o "es panucam" sobrenome de família, passando a
            identificar o futuro pintor.
          </p>
          <p>Data: 1445 - 1510</p>
          <ul aria-label="Principais trabalhos">
            <li>Primavera</li>
            <li>O Nascimento de Vênus</li>
            <li>A Adoração dos Magos</li>
            <li>Vênus e Marte</li>
          </ul>
        </div>
      </div>
      <div className={styles.boxArtist}>
        <div className={styles.artistDescription}>
          <h2>Rafael Sanzio</h2>
          <p>
            Foi um mestre da pintura e da arquitetura da escola de Florença
            durante o Renascimento italiano, celebrado pela perfeição e
            suavidade de suas obras.
          </p>
          <p>Data: 1483 - 1520</p>
          <ul aria-label="Principais trabalhos">
            <li>Escola de Atenas</li>
            <li>Transfiguração</li>
            <li>Madona Sistina</li>
            <li>O Triunfo de Galatéia</li>
          </ul>
        </div>
        <img src="src/assets/rafael.png" alt="Rafael Sanzio" />
      </div>
    </section>
  );
};

export default Artistas;
