import './Grid.scss'
import clsx from 'clsx'
import React from 'react'

export default ({ className, children, columns = 1 }) => {
  return (
    <ul className={clsx('grid', `grid--${columns}`, className)}>
      {React.Children.map(children, (child, index) => (
        <li className="grid__item" key={index}>
          {child}
        </li>
      ))}
    </ul>
  )
}
