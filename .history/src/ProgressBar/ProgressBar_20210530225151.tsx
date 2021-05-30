import { FC } from "react";
import s from './ProgressBarProps.module.scss'

declare namespace ProgressBarProps {
  export type Props = {

  }
}

function Ball() {
  return <div className={s.Ball}></div>
}

const ProgressBar: FC<ProgressBarProps.Props> = (props) => {
  return (
    <div>2</div>)
}

export default ProgressBar;