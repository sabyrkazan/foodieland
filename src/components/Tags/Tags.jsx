import './Tags.scss'
import clsx from 'clsx'
import { Icon } from '@/components/Icon'

export default ({ className, tags }) => {
  return (
    <div className={clsx('tags', className)}>
      <ul className="tags__list">
        {tags.map(({ icon, label }) => (
          <li className="tags__item" key={label}>
            <Icon name={icon} hasFill />
            <span className="tags__label">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
