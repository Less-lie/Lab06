import React from 'react';
//¿Funcion de REAT? pues son funciones que retornan JSX (ese HTML dentro de JavaScript).
import styles from './header.module.css'; //IMPORTAR ESTILOS
import Link from 'next/link';
//trabajamos con header
//creamos la variable donde iran nuestros datos 
let HeaderData:String = 'Leslie Danaé González Hernández'
//necesito definir la funcion de este bloque de codigo.
//q es lo q lo hace funcionar, solo retorna JSX, <>AGRUPA ELEMENTOS</> no renderiza nada, importa de otros archivos
// - primero colocamos el codigo de header
// - quitamos el comentario
// reemplazamos CLASS por 
// diferencia entre ambas:  class es para html y className para Next js
// ctrl + f 
//link (no recarga toda la página) y prefetch automatico de paginas

export default function Header(){
    return (//pegamos la secion de header 
        <header className={styles.header} id="header">
            <nav className={styles.nav}>
                <Link href="#home" className={styles.nav__logo}>
                    <span className={styles.logo__bracket}>&lt;</span>{HeaderData}<span className={styles.logo__bracket}>/&gt;</span>
                </Link>
                
            
                <input type="checkbox" id="nav-toggle" className={styles.nav__checkbox}/> 
                <label htmlFor="nav-toggle" className={styles.nav__toggle}>
                    <i className="fas fa-bars"></i>
                </label>
                
                <div className={styles.nav__menu} id="nav-menu">
                    <label htmlFor="nav-toggle" className={styles.nav__close}>
                        <i className="fas fa-times"></i>
                    </label>
                    
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__item}>
                            <label htmlFor="nav-toggle">
                                <Link href="#home" className={styles.nav__link}>Inicio</Link>
                            </label>
                        </li>
                        <li className={styles.nav__item}>
                            <label htmlFor="nav-toggle">
                                <Link href="#interests" className={styles.nav__link}>Intereses</Link>
                            </label>
                        </li>
                        <li className={styles.nav__item}>
                            <label htmlFor="nav-toggle">
                                <Link href="#cv" className={styles.nav__link}>CV</Link>
                            </label>
                        </li>
                        <li className={styles.nav__item}>
                            <label htmlFor="nav-toggle">
                                <Link href="#projects" className={styles.nav__link}>Proyectos</Link>
                            </label>
                        </li>
                        <li className={styles.nav__item}>
                            <label htmlFor="nav-toggle">
                                <Link href="#contact" className={styles.nav__link}>Contacto</Link>
                            </label>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}