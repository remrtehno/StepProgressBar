import React, { FC } from 'react';
import s from './ProgressBar.module.scss'

function Progress: FC<{pro}>() {
  return <div className={s.Progress}>
    <div className={s.ProgressInner} />
  </div>
}

export default Progress;