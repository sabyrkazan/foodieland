import './Section.scss'
import clsx from 'clsx'
import { Button } from '@/components/Button'

export default ({
  className,
  headerMode,
  title,
  titleId,
  description,
  descriptionClassName,
  linkLabel,
  children,
}) => {
  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className={`section__header section__header--mode-${headerMode}`}>
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className={clsx('section__description',descriptionClassName)}>
            <p>{description}</p>
          </div>
        )}
        {linkLabel && (
          <Button className="section__link" href="/" mode="accent">
            {linkLabel}
          </Button>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
