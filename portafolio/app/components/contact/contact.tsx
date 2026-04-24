import React from 'react';
import styles from './contact.module.css';
import Link from 'next/link';

let email: string = 'danae.gonher2@gmail.com';
let phone: string = '55 91 07 77 72';
let location: string = 'Estado de México, México';

export default function Contact() {
    return (
        <section className={`${styles.contact} section`} id="contact">
            <div className="container">
                <div className={styles.contact__content}>
                    <div className={styles.contact__info}>
                        <span className="section__subtitle">¿Tienes un proyecto?</span>
                        <h2 className="section__title">¡Hablemos!</h2>
                        <p className={styles.contact__description}>
                            Estoy disponible para oportunidades laborales, proyectos freelance
                            o simplemente para conectar. ¡No dudes en contactarme!
                        </p>

                        <div className={styles.contact__data}>
                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className={styles.contact__text}>
                                    <span className={styles.contact__label}>Email</span>
                                    <Link href={`mailto:${email}`} className={styles.contact__value}>{email}</Link>
                                </div>
                            </div>

                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className={styles.contact__text}>
                                    <span className={styles.contact__label}>Teléfono</span>
                                    <span className={styles.contact__value}>{phone}</span>
                                </div>
                            </div>

                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className={styles.contact__text}>
                                    <span className={styles.contact__label}>Ubicación</span>
                                    <span className={styles.contact__value}>{location}</span>
                                </div>
                            </div>

                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <div className={styles.contact__text}>
                                    <span className={styles.contact__label}>Disponibilidad</span>
                                    <span className={`${styles.contact__value} ${styles['contact__value--available']}`}>
                                        Disponible para trabajar
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contact__cta}>
                        <div className={styles.contact__card}>
                            <h3 className={styles.contact__card_title}>¿Lista para comenzar?</h3>
                            <p className={styles.contact__card_text}>
                                Envíame un mensaje y lo atenderé lo antes posible.
                            </p>
                            <Link href={`mailto:${email}`} className="btn btn--primary btn--large btn--full">
                                <i className="fas fa-paper-plane"></i> Enviar mensaje
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}