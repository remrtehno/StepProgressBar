import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball: FC<{
  label: string,
  onClick?(arg: string): any,
  isActive?: boolean
}> = (props) => {
  return <div>
    { props.la }
    <button
      type="button"
      onClick={() => props.onClick?.call(null, props.label)}
      className={s.Ball}
      data-active={props.isActive}
    />
  </div>
}

export default Ball;