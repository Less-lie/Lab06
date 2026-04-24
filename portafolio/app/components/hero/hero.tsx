import React from 'react';
import styles from './hero.module.css';
import Link from 'next/link';

let name: string = 'Leslie Danaé González Hernández';
let profession: string = 'Lic. en Matemáticas Aplicadas y Computación';
let description: string = 'Combinación de logica matemática relacionada con herramientas computacionales, transformadno datos a soluciones potentes.';

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={`container ${styles.hero__container}`}>
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                    <h1 className={styles.hero__title}>{name}</h1>
                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>{profession}</span>
                    </h2>
                    <p className={styles.hero__description}>{description}</p>
                    <div className={styles.hero__buttons}>
                        <Link href="#projects" className="btn btn--primary">
                            <i className="fas fa-rocket"></i> Ver mis proyectos
                        </Link>
                        <Link href="#contact" className="btn btn--outline">
                            <i className="fas fa-envelope"></i> Contáctame
                        </Link>
                    </div>
                </div>

                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <i className="fas fa-user-astronaut"></i>
                        </div>
                    </div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
                </div>
            </div>

            <div className={styles.hero__scroll}>
                <Link href="#interests" className={styles.hero__scroll_link}>
                    <span>Scroll</span>
                    <i className="fas fa-chevron-down"></i>
                </Link>
            </div>
        </section>
    );
}