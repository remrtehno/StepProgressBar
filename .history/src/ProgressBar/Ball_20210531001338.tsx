import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball: FC<{
  label: string,
  onClick?(): void,
  isActive?: boolean = false,
}> = (props) => {
  return <button
    type="button"
    onClick={props.onClick}
    className={s.Ball}
    data-acitve={props.isActive}
  />
}

export default Ball;