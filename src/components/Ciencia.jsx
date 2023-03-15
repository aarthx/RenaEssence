import React from 'react';
import styles from './Ciencia.module.css';

const Ciencia = () => {
  return (
    <section className={styles.ciencia}>
      <div className={styles.cientista}>
        <p>
          <span>Nicolau Copérnico</span> (1473-1543): astrônomo e matemático
          polonês, considerado o “Pai da Astronomia Moderna”. Foi criador da
          Teoria Heliocêntrica (sol como centro do Universo), na qual contradiz
          a Teoria Geocêntrica medieval (adotada pela Igreja Católica), em que a
          Terra seria o centro do Universo.
        </p>
        <img src="./assets/copernico.png" alt="Heliocentrismo" />
      </div>
      <div className={styles.cientista}>
        <img src="./assets/galileu.png" alt="Galileu olhando um telescópio" />
        <p>
          <span>Galileu Galilei</span> (1564-1642): astrônomo, físico,
          matemático e filósofo italiano, Galileu foi defensor da Teoria
          Heliocêntrica de Copérnico, sendo considerado um dos fundadores da
          geometria moderna e da física. Além disso, aperfeiçoou o telescópio,
          inventou o microscópio com duas lentes e o compasso geométrico.
        </p>
      </div>
      <div className={styles.cientista}>
        <p>
          <span>Johannes Kepler</span> (1571-1630): astrônomo, matemático e
          astrólogo alemão, Kepler aprofundou suas teorias sobre mecânica
          celeste inspiradas no modelo heliocêntrico, apresentando estudos sobre
          as eclipses lunar e solar.
        </p>
        <img src="./assets/kepler.png" alt="Eclipses solar e lunar" />
      </div>
      <div className={styles.cientista}>
        <img src="./assets/vesalius.png" alt="Anatomia humana" />
        <p>
          <span>Andreas Vesalius</span> (1514-1564): médico belga, considerado o
          “Pai da Anatomia Moderna”, Vesalius foi um dos precursores dos estudos
          sobre anatomia e fisiologia, após dissecar corpos de humanos e
          escrever sua principal obra, um atlas de Anatomia Humana intitulado
          “Fábrica”.
        </p>
      </div>
      <div className={styles.cientista}>
        <p>
          <span>Francis Bacon</span> (1561-1626): filósofo, político e
          alquimista inglês, Bacon foi o criador do “Método Científico” (nova
          maneira de estudar a natureza), sistematizando o conhecimento humano,
          sendo considerado o fundador da “Ciência Moderna”.
        </p>
      </div>
      <div className={styles.cientista}>
        <p>
          <span>René Descartes</span> (1596-1650): filósofo, físico e matemático
          francês, segundo seus estudos, Descartes foi considerado o “Pai do
          Racionalismo e da Matemática Moderna” e ainda, o fundador da Filosofia
          Moderna. Sua obra mais representativa é o “Discurso sobre o Método”,
          tratado filosófico e matemático propondo as bases do racionalismo.
        </p>
      </div>
      <div className={styles.cientista}>
        <p>
          <span>Leonardo da Vinci</span> (1452-1519): inventor, matemático,
          engenheiro e artista italiano, Da Vinci foi considerado um dos mais
          proeminentes gênios do Renascimento e da história da humanidade.
          Avançou em diversos estudos sobre a anatomia humana, e inventou o
          paraquedas, a máquina de voar, o submarino, o tanque de guerra, dentre
          outros.
        </p>
      </div>
      <div className={styles.cientista}>
        <p>
          <span>Isaac Newton</span> (1643-1727): filósofo, físico, matemático,
          astrônomo, alquimista e teólogo inglês, Newton foi considerado o “Pai
          da Física e da Mecânica Modernas”, do qual desenvolveu diversos
          conhecimentos nas áreas da matemática, física e filosofia natural.
          Estudou o movimento dos corpos propondo as três “Leis de Newton”.
        </p>
        <img src="./assets/newton.png" alt="Newton e suas descobertas" />
      </div>
    </section>
  );
};

export default Ciencia;
