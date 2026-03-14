import './Header.scss'
import { Logo } from '@/components/Logo'
import { Socials } from '@/components/Socials'
import { Menu } from '@/components/Menu'
import { BurgerButton } from '@/components/BurgerButton'
import { menuItems } from './header.data'

export default ({ url }) => {
  return (
    <header className="header" data-js-mobile-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <Menu
          className="header__menu"
          items={menuItems}
          url={url}
          extraAttrs={{ 'data-js-mobile-menu-overlay': '' }}
        />
        <Socials className="header__soc1als" />
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{ 'data-js-mobile-menu-burger-button': '' }}
        />
      </div>
    </header>
  )
}
