import { FC } from "react";
import s from './ProgressBar.module.scss'

declare namespace ProgressBarProps {
  export type Props = {

  }
}

function Ball() {
  return <div className={s.Ball}></div>
}

function Progress() {
  return <dvi></dvi>
}

const ProgressBar: FC<ProgressBarProps.Props> = (props) => {
  return (
    <div className={s.ProgressBar}>
      <Ball />
      <Progress />
    </div>
  )
}

export default ProgressBar;