import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball: FC<{
  label: string,
  onClick?(arg: string): any,
  isActive?: boolean
}> = (props) => {
  return <button
    type="button"
    onClick={}
    className={s.Ball}
    data-active={props.isActive}
  />
}

export default Ball;