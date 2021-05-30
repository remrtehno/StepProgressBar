import React, { FC } from 'react';
import s from './ProgressBar.module.scss'

const Progress: FC<{ progress: number }> = (props) => {
  return <div className={s.Progress}>
    <div className={s.ProgressInner} style={{wi} }/>
  </div>
}

export default Progress;