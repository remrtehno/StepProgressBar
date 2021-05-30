import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball: FC<{
  label: string,
  onClick?(arg: string): void,
  isActive?: boolean
}> = (props) => {
  
  return <button
    type="button"
    onClick={props.onClick}
    className={s.Ball}
    data-active={props.isActive}
  />
}

export default Ball;