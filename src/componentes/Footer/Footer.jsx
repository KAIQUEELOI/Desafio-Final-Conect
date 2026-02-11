import React from 'react'


import Logo from '../../assets/logo.png'
import Instagram from '../../assets/instagram.png'
import Linkendin from '../../assets/linkedin.png'
import Watsapp from '../../assets/whatsapp.png'

import styles from "./Footer.module.scss";

function Footer() {
    return (
        <>
    <section className={styles.footerSection}>

         <div className={styles.logoFooter}>
            <img src={Logo} alt="" />
            <p>Connect</p>
         </div>

        <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
    
        <nav className={styles.imgContainer}>
            <img src={Watsapp} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkendin} alt="" />
        </nav>
    
    </section>
        </>
    )
}

export default Footer