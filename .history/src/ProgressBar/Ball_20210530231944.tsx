import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball: FC<{ label: string, onClick }> = (props) => {
  return <button type="button" className={s.Ball} />
}

export default Ball;