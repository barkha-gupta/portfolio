import React from 'react'

export default function Footer() {
    return (
        <footer className='footer'>
            
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="mailto:guptabarkha0610@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/barkha-gupta-b68a5b25a/"><i className="fa-brands fa-linkedin"></i></a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/barkha-gupta"><i className="fa-brands fa-github"></i></a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.instagram.com/_barkhagupta_/"><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://drive.google.com/drive/folders/1dTx0JnNoZ1Rdqjqc8qV23bJFcmwO0RpO?usp=drive_link"><i className="fa-solid fa-file-pdf"></i></a>
                </li>
            </ul>
        </footer>
    )
}
