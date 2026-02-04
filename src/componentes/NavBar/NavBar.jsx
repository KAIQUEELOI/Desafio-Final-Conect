import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "../Inicio/Inicio";
import Acoes from "../AcoesDaConnect/AcoesDaConnect";
import QuemSomos from "../QuemSomos/QuemSomos";
import Perfil from "../Perfil/Perfil";


import Logo from "../../assets/logo.png";
import FotoDePerfil from "../../assets/image.png";


import styles from "./NavBar.module.scss"
function NavBar (){


    return(
       <BrowserRouter>

      <nav className={styles.navBar}>
        <Link to="/">
          <img src={Logo} alt="Logo" className={styles.logoImagem} />
        </Link>

        <ul>
          <li>
            <Link to="/"> Início </Link>
          </li>
          <li>
            <Link to="/acoes"> Ações da Connect</Link>
          </li>
          <li>
            <Link to="/quemSomos"> Quem Somos </Link>
          </li>
        </ul>

        <Link to="/perfil">
          <img src={FotoDePerfil} alt="Foto do perfil" className={styles.logoPerfil} />
        </Link>
      </nav>


              <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

         </BrowserRouter>   
    )
}
export default NavBar;