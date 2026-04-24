import React from 'react';
import styles from './interests.module.css';

let sectionSubtitle: string = 'Lo que me apasiona';
let sectionTitle: string = 'Intereses & Especialidades';
let sectionDescription: string = 'Áreas variadas que me interesan, y que me apasionan';

export default function Interests() {
    return (//plantilla
        <section className={`${styles.interests} section`} id="interests">
            <div className="container">
                <div className="section__header">/
                    <span className="section__subtitle">{sectionSubtitle}</span>
                    <h2 className="section__title">{sectionTitle}</h2>
                    <p className="section__description">{sectionDescription}</p>
                </div>
                
                <div className={styles.interests__grid}>
                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}><i className="fas fa-laptop-code"></i></div>
                        <h3 className={styles.card__title}>Finanzas</h3>
                        <p className={styles.card__description}>Analista financiero, gestión de riesgos, desarollo de modelos de evaluación de activos financieros.</p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Paython</span>
                            <span className={styles.tag}>JavaScript</span>
                            <span className={styles.tag}>Bloomberg</span>
                        </div>
                    </article>

                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}><i className="fas fa-shield-halved"></i></div>
                        <h3 className={styles.card__title}> Database Administration</h3>
                        <p className={styles.card__description}> Análisis estadísticos datos, modelos predictivos con la minería de datos para toma de decisiones.</p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Paython</span>
                            <span className={styles.tag}>MySQL</span>
                            <span className={styles.tag}>Oracle</span>
                        </div>
                    </article>

                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}><i className="fas fa-brain"></i></div>
                        <h3 className={styles.card__title}>Arquitectura de Bases de datos financieras</h3>
                        <p className={styles.card__description}>Diseñar los cimientos donde se almacenan inmensas cantidades de transacciones, asegurando una modelo con orden, limpieza y analizada.</p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Snowflake</span>
                            <span className={styles.tag}>PostgreSQL</span>
                            <span className={styles.tag}>SQL</span>
                        </div>
                    </article>

                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}><i className="fas fa-database"></i></div>
                        <h3 className={styles.card__title}>Data Science</h3>
                        <p className={styles.card__description}>Analizar grandes volúmenes de datos para encontrar patrones y apoyar decisiones. Combina matemáticas, programación y lógica.</p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>MySQL</span>
                            <span className={styles.tag}>Python</span>
                            <span className={styles.tag}>Pandas</span>
                        </div>
                    </article>

                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}><i className="fas fa-mobile-screen-button"></i></div>
                        <h3 className={styles.card__title}>Operations Research</h3>
                        <p className={styles.card__description}>Aplicacion de modelos matemáticos, dandole un uso para minimizar o maximizar beneficios-costos-capacidades.</p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Python</span>
                            <span className={styles.tag}>MATLAB</span>
                        </div>
                    </article>

                    <article className={styles.interest__card}>
                        <div className={styles.card__icon}><i className="fas fa-cloud"></i></div>
                        <h3 className={styles.card__title}>Business Intelligence</h3>
                        <p className={styles.card__description}>Organización de datos y creación de dashboard visuales para la toma de decisiones empresariales.</p>
                        <div className={styles.card__tags}>
                            <span className={styles.tag}>Power BI</span>
                            <span className={styles.tag}>SQL</span>
                        </div>
                    </article>
                </div>

                <div className={styles.subjects}>
                    <h3 className={styles.subjects__title}>
                        <i className="fas fa-graduation-cap"></i> Materias Relevantes
                    </h3>
                    <div className={styles.subjects__list}>
                        <span className={styles.subject}>Programación Orientada a Objetos</span>
                        <span className={styles.subject}>Estructuras de Datos</span>
                        <span className={styles.subject}>Desarrollo Web</span>
                        <span className={styles.subject}>Ingeniería de Software</span>
                        <span className={styles.subject}>Bases de Datos</span>
                        <span className={styles.subject}>Desarrollo Web</span>
                    </div>
                </div>
            </div>
        </section>
    );
}