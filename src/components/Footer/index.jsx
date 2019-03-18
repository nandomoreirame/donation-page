import React from 'react'
import PropTypes from 'prop-types'
import trackmobLogo from './trackmob-logo.png'
import module from './footer.module.styl'

const phone2tel = phone =>
  phone.replace(/\D+/g, '')

const defaultProps = {
  logo: '',
  email: '',
  phones: [],
}

const Footer = ({ logo, email, phones }) => (
  <footer className={module.Footer}>
    <div className={module.Footer__inner}>
      <div className={module.Footer__column}>
        {logo && <img className={module.Footer__logo} src={logo} alt="" />}
        {(phones || email) &&
          <div>
            <p className={module.Footer__text}>Está com dúvidas?</p>

            {phones.map((phone, i) => {
              if (!phone.number) return null
              return (
                <p className={module.Footer__text} key={i}>{phone.title}: <a href={`tel:${phone2tel(phone.number)}`} >{phone.number}</a></p>
              )
            })}

            {email && <p className={module.Footer__text}>Por email: <a href={`mailto:${email}`} title={`Por email: ${email}`}>{email}</a></p>}
          </div>
        }
      </div>
      <div className="Footer__column">
        <div style={{ textAlign: 'right' }}>
          <p className={module.Footer__text}>Copyright ©2017</p>
          <a className={module.Footer__copy} href="https://trackmob.com.br/" target="_blank" rel="noopener noreferrer">
            <span>Powered by</span> <img src={trackmobLogo} alt="Powered by Trackmob" />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

const propTypes = {
  logos: PropTypes.string,
  email: PropTypes.string,
  phones: PropTypes.array,
}

Footer.propTypes = propTypes
Footer.defaultProps = defaultProps

export default Footer
