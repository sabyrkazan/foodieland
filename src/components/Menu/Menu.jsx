import './Menu.scss'
import clsx from 'clsx'

export default ({ className, items, url }) => {
  return (
    <nav className={clsx('menu', className)}>
      <ul className="menu__list">
        {items.map(({ label, href }) => (
          <li className="menu__item" key={label}>
            <a
              className={clsx('menu__link', href === url && 'is-active')}
              href={href}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
