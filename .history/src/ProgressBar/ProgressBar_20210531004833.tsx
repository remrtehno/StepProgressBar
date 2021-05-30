import React, { useEffect } from 'react';
import { FC, useState } from "react";
import Ball from "./Ball";
import Progress from "./Progress";
import s from './ProgressBar.module.scss'

declare namespace ProgressBarProps {
  export type Labels = {
    label: string,
    active: boolean,
  }
  export type Props = {
    labels: Labels[],
  }
}

const ProgressBar: FC<ProgressBarProps.Props> = (props) => {
  const [state, setState] = useState(props.labels);

  const handleStep = (label: string) => {
    setState((prevState: any) => {
      
      return [
        ...prevState,
        prevState.find((item: any) => item.label === label)
      ]
    })
  }

  useEffect(() => {
    // console.log(props.labels.length);
  }, [])

  return (
    <div className={s.ProgressBar}>
      <Progress progress={0} />
      { state && state.map((item, index) =>
        <Ball
          isActive={item.active}
          onClick={handleStep}
          label={item.label}
          key={index}
        />
      )}

    </div>
  )
}

export default ProgressBar;