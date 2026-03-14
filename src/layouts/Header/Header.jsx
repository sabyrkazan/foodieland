import './Header.scss'
import { Logo } from '@/components/Logo'
import { Socials } from '@/components/Socials'
import { Menu } from '@/components/Menu'
import { menuItems } from './header.data'

export default ({ url }) => {
  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <Menu className="header__menu" items={menuItems} url={url} />
        <Socials className="header__soc1als" />
      </div>
    </header>
  )
}
