import './button.css'

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  const classList = [
    'storybook-button',
    `storybook-button--${size}`,
    mode,
  ].join(' ')

  return `<button type="button" class="${classList}">${label}</button>`
}
