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

    const clickedBullet = state.findIndex((val) => val.label === label);



    let isActiveIndex = 0;
    state.forEach((item, index) => {
      if (item.active) {
        isActiveIndex = index;
      } else {
        return;
      }
    })
    console.log(isActiveIndex - clickedBullet);
    
    if (isActiveIndex - clickedBullet <= 1) {
      return;
    }


    setState((prevState: ProgressBarProps.Labels[]) => {
      const clickedBullet = prevState.findIndex((val) => val.label === label);
      prevState.forEach((item, index) => {
        if (index <= clickedBullet) {
          item.active = true;
        } else {
          item.active = false;
        }
      })
      return [...prevState];
    })
  }

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