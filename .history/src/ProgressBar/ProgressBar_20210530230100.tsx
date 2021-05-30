import { FC } from "react";
import s from './ProgressBar.module.scss'

declare namespace ProgressBarProps {
  export type Labels = {
    label: string,
  }
  export type Props = {
    labels: Labels[],
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
      { props.labels }
      <Ball />
      <Progress />
    </div>
  )
}

export default ProgressBar;