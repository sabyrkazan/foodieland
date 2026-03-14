import './Header.scss'
import { Logo } from '@/components/Logo'
import { Socials } from '@/components/Socials'
import { menuItems } from './header.data'

export default ({ url }) => {
  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href }) => (
              <li className="header__menu-item" key={label}>
                <a className="header__menu-link" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Socials />
      </div>
    </header>
  )
}
