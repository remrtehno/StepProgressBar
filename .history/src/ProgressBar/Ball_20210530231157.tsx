import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball: FC<{ label: string }> = (props) => {
  return <button type="button">
    <button className={s.Ball} />
  </button>
}

export default Ball;