import React from 'react';
import styles from './projects.module.css';
import Link from 'next/link';

let sectionSubtitle: string = 'Mi trabajo';
let sectionTitle: string = 'Proyectos Destacados';
let sectionDescription: string = 'Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo';
let githubUrl: string = 'https://github.com/TU-USUARIO-AQUI'; // ← pon tu GitHub personal

export default function Projects() {
    return (
        <section className={`${styles.projects} section`} id="projects">
            <div className="container">
                <div className="section__header">
                    <span className="section__subtitle">{sectionSubtitle}</span>
                    <h2 className="section__title">{sectionTitle}</h2>
                    <p className="section__description">{sectionDescription}</p>
                </div>

                <div className={styles.projects__grid}>
                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <div className={styles.project__overlay}>
                                <Link
                                    href="https://github.com/ExtraWeb0rdinarios" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.project__link}>
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>ENLACE MAC</h3>
                            <p className={styles.project__description}>
                                Página creada dedicada a la comunidad estudiantil de la Licenciatura de Matemáticas Aplicadas y Computación, donde los alumnos serán informados con vacantes en donde realizar su servicio social, y por otro lado las empresas o profesores informarán sobre sus vacantes.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>Next.js</span>
                                <span className={styles.tech}>Github</span>
                                <span className={styles.tech}>HTML</span>
                                <span className={styles.tech}>Copespaces</span>
                            </div>
                        </div>
                    </article>
                </div>

                <div className={styles.projects__more}>
                    <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                        <i className="fab fa-github"></i> Ver más en GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}