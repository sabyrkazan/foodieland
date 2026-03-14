import './Socials.scss'
import { Icon } from '@/components/Icon'
import { socialItems } from './socials.data'

export default () => {
  return (
    <div className="soc1als header__soc1als">
      <ul className="soc1als__list">
        {socialItems.map(({ label, icon }) => (
          <li className="soc1als__item" key={label}>
            <a className="soc1als__link" href="/" title={label}>
              <span className="visually-hidden">{label}</span>
              <Icon name={icon} hasFill />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
