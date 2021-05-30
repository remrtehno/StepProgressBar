import React, { useEffect } from 'react';
import { FC, useState } from "react";
import Ball from "./Ball";
import Progress from "./Progress";
import s from './ProgressBar.module.scss'

declare namespace ProgressBarProps {
  export type Labels = {
    label: string,
  }
  export type Props = {
    labels: Labels[],
  }
}

const ProgressBar: FC<ProgressBarProps.Props> = (props) => {
  const [state, setState] = useState(0);

  const handleStep = () => {

  }

  useEffect(() => { })

  return (
    <div className={s.ProgressBar}>
      <Progress progress={0} />
      { props.labels && props.labels.map((item, index) =>
        <Ball onClick={handleStep} label={item.label} key={index} />
      )}

    </div>
  )
}

export default ProgressBar;