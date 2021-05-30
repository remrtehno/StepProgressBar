import React, { FC } from 'react';
import s from './ProgressBar.module.scss'

const Progress: FC<{ progress: number }>(props) => {
  return <div className={s.Progress}>
    <div className={s.ProgressInner} />
  </div>
}

export default Progress;