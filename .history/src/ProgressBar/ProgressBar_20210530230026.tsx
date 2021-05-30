import { FC } from "react";
import s from './ProgressBar.module.scss'

declare namespace ProgressBarProps {
  export type Labels
  export type Props = {
    labels: 
  }
}

function Ball() {
  return <div className={s.Ball} />
}

function Progress() {
  return <div className={s.Progress} />
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