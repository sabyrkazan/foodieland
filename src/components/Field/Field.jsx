import './Field.scss'
import clsx from 'clsx'
import { getIdFromTitle } from '@/utils'

export default ({
  className,
  id = getIdFromTitle(label),
  label,
  isLabelHidden = false,
  type,
  placeholder,
  isRequired,
  inputMode,
  mask,
}) => {
  const Component = type === 'textarea' ? 'textarea' : 'input'

  const extraAttrs = {}

  if (mask) {
    extraAttrs['data-js-input-mask'] = mask
  }

  return (
    <div className={clsx('field', className)}>
      <label
        className={clsx('field__label', isLabelHidden && 'visually-hidden')}
        htmlFor={id}
      >
        {label}
        {isRequired && (
          <span className="field__required-star" aria-hidden="true">
            &nbsp;*
          </span>
        )}
      </label>
      <Component
        className="field__control"
        id={id}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        inputMode={inputMode}
        {...extraAttrs}
      />
    </div>
  )
}
