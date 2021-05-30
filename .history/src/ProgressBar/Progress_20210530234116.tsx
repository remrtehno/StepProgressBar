import s from './ProgressBar.module.scss'

function Progress() {
  return <div className={s.Progress}>
    <div className={s.ProgressInner} />
  </div>
}

export default Progress;