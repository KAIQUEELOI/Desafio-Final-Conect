import styles from "./Perfil.module.scss"
import ImgPerfil from "../../assets/image.jpeg"


function Perfil() {
  return (
    <>
      <section className={styles.containerTelaPerfil}>
     
      <article>
        <img src={ImgPerfil} alt="Foto de perfil" />

         <div className={styles.cardInfo}>
          <h2> Kaique Eloi </h2>
          <h3> Aluno Ativo</h3>

          <p className={styles.paragrafoSobreMim}>
            Cursando ultimo periodo do curso Tecnico em Informática pelo Instituto Federal do Piauí (IFPI)  
          </p>

          <address>
            <p> Piauí,PI</p>
            <p>kcostakaique21@gmail.com</p>
            <p> Membro desde 2025</p>
          </address>

          <ul className={styles.listaInteresses}>
            <li>Pesquisador cientifico jr.</li>
            <li>Progamador Front-End</li>
            <li>estudante de T.I</li>
          </ul>
        </div>   
        </article>
      </section>
    </>
  );
}

export default Perfil;