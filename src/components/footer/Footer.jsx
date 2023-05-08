import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Jogendra</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer__link'>Project</a>
                </li>

                <li>
                    <a href="#skills" className='footer__link'>Skills</a>
                </li>

            </ul>

            <div className="footer__social">
                <a href="" className="footer__social-icon" target='_blank'>
                    <i class="uil uil-instagram"></i>
                </a>

                <a href="" className="footer__social-icon" target='_blank'>
                    <i class="uil uil-facebook"></i>
                </a>

                <a href="" className="footer__social-icon" target='_blank'>
                    <i class="uil uil-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved</span>
        </div>

    </footer>
  )
}

export default Footer