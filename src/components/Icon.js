import sprite from '../images/sprite.svg';

export function Icon ({iconId, iconColor, width, height, iconClass}){
  return (
    <>
      {iconId && (
        <svg fill={iconColor} width={width} height={height} className={`icon icon-${iconId} ${iconClass}`}>
          <use xlinkHref={`${sprite}#${iconId}`}></use>
        </svg>
      )}
    </>
  )
}

Icon.defaultProps = {
  iconColor: 'grey',
  width: '24px',
  height: '24px'
}