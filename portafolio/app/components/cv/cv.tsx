import React from 'react';
import styles from './cv.module.css';
import Link from 'next/link';

let cvDescription: string = 'Descarga mi CV para conocer mi formación académica, habilidades técnicas y experiencia.';
let linkedinUrl: string = 'www.linkedin.com/in/leslie-danaé-gonzález-hernández-8921303b4';
let linkedinUser: string = '@Leslie Danaé González Hernández';
let githubUrl: string = 'https://github.com/Less-lie';
let githubUser: string = '@Less-lie';
let email: string = 'danae.gonher2@gmail.com';

export default function CV() {
    return (
        <section className={`${styles.cv} section`} id="cv">
            <div className="container">
                <div className={styles.cv__content}>
                    <div className={styles.cv__info}>
                        <span className="section__subtitle">Conoce mi trayectoria</span>
                        <h2 className="section__title">Mi Currículum</h2>
                        <p className={styles.cv__description}>{cvDescription}</p>
                        <div className={styles.cv__buttons}>
                            <Link href="https://www.overleaf.com/gallery/tagged/cv" className="btn btn--primary btn--large">
                                <i className="fas fa-download"></i> Descargar CV
                            </Link>
                            <Link href="#" className="btn btn--secondary btn--large">
                                <i className="fas fa-eye"></i> Ver CV Digital
                            </Link>
                        </div>
                    </div>

                    <div className={styles.cv__social}>
                        <h3 className={styles.cv__social_title}>Conectemos</h3>
                        <div className={styles.cv__social_links}>
                            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--linkedin']}`}>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>LinkedIn</span>
                                    <span className={styles.social__user}>{linkedinUser}</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </Link>

                            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--github']}`}>
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>GitHub</span>
                                    <span className={styles.social__user}>{githubUser}</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </Link>

                            <Link href={`mailto:${email}`} className={styles.social__card}>
                                <div className={`${styles.social__icon} ${styles['social__icon--email']}`}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>Email</span>
                                    <span className={styles.social__user}>{email}</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}