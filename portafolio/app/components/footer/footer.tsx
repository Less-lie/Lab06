import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

let name: string = 'Leslie Danaé González Hernández';
let footerText: string = 'Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto!';
let linkedinUrl: string = 'https://linkedin.com/in/tu-perfil';
let githubUrl: string = 'https://github.com/tu-usuario';
let email: string = 'danae.gonher2@gmail.com';
let year: number = 2026;

export default function Footer() {
    return (
        <footer className={styles.footer} id="footer">
            <div className="container">
                <div className={styles.footer__content}>
                    <div className={styles.footer__brand}>
                        <Link href="#" className={styles.footer__logo}>
                            <span className="logo__bracket">&lt;</span>
                            {name}
                            <span className="logo__bracket">/&gt;</span>
                        </Link>
                        <p className={styles.footer__text}>{footerText}</p>
                    </div>

                    <div className={styles.footer__social}>
                        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.footer__social_link} aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.footer__social_link} aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </Link>
                        <Link href={`mailto:${email}`} className={styles.footer__social_link} aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </Link>
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <p className={styles.footer__copyright}>
                        &copy; {year} {name}. Todos los derechos reservados.
                    </p>
                    <p className={styles.footer__made}>
                        Hecho con <i className="fas fa-heart"></i> y mucho <i className="fas fa-coffee"></i>
                    </p>
                </div>
            </div>
        </footer>
    );
}