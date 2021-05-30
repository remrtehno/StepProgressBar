import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball: FC<{
  label: string,
  onClick?(arg: string): any,
  isActive?: boolean
}> = (props) => {
  return (
    <div className={s.BallTextWrapper}>
      <div className={s.BallText}
        style={{ color: props.isActive ? 'var(--main-color)' }}>{props.label}</div>
      <button
        type="button"
        onClick={() => props.onClick?.call(null, props.label)}
        className={s.Ball}
        data-active={props.isActive}
      />
    </div>
  )
}

export default Ball;