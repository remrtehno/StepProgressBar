import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball: FC<{ label: string }> = (props) => {
  return <button>
    <div className={s.Ball} />
  </div>
}

export default Ball;