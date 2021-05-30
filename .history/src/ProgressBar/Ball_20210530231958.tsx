import { FC } from 'react';
import s from './ProgressBar.module.scss'

const Ball: FC<{ label: string, onClick?(): void }> = (props) => {
  return <button type="button" onClick={props.onClick} className={s.Ball} />
}

export default Ball;