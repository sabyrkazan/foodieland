import './Socials.scss'
import clsx from 'clsx'
import { Icon } from '@/components/Icon'
import { socialItems } from './socials.data'

export default ({ className }) => {
  return (
    <div className={clsx('soc1als', className)}>
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
