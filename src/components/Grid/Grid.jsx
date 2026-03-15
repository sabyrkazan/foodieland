import './Grid.scss'
import clsx from 'clsx'

export default ({ children, columns }) => {
  return (
    <ul className={clsx('grid', `grid--${columns}`, className)}>
      {children.map((child, index) => (
        <li className="grid__item" key={index}>
          {child}
        </li>
      ))}
    </ul>
  )
}
