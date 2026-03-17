import './Footer.scss'
import { Logo } from '@/components/Logo'
import { Menu } from '@/components/Menu'
import { Socials } from '@/components/Socials'
import { currentYear, menuItems } from '@/layouts/Footer/footer.data'

export default () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <div className="footer__info">
            <Logo className="footer__logo" />
            <div className="footer__description">
              <p>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
            </div>
          </div>
          <Menu items={menuItems} />
        </div>
        <div className="footer__extra">
          <div className="footer__copyright">
            ©&nbsp;<time dateTime={currentYear}>{currentYear}</time>
            &nbsp;Flowbase. Powered by&nbsp;
            <a href="/" target="_blank">
              Webflow
            </a>
          </div>
          <Socials className="footer__soc1als" />
        </div>
      </div>
    </footer>
  )
}
