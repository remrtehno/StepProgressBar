import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball:FC<{label: string}> = (props) => {
  return <div className={s.Ball} />
}

export default Ball;