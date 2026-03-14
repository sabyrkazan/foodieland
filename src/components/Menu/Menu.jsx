import './Menu.scss'
import clsx from 'clsx'

export default ({ className, items }) => {
  return (
    <nav className={clsx('menu', className)}>
      <ul className="menu-list">
        {items.map(({ label, href }) => (
          <li className="menu-item" key={label}>
            <a className="menu-link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
