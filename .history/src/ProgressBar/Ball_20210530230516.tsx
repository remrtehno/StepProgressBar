import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball:FC<{label: string}> = (props) => {
  return <div>
    {props.label}
    <div className={s.Ball} />
  </div>
}

export default Ball;