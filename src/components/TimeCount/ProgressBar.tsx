interface Props {
  time: number,
  maxTime: number,
  isCounterRunning: Boolean
}

export default function ProgressBar({time, maxTime, isCounterRunning}: Props) {
  return (
    <div 
      data-testid="progress-bar" 
      className={`time-counter__progress ${isCounterRunning ? 'started' : 'stopped'}`}
      style={{width: `${((100 * time / maxTime) - 100) * (-1)}%`}}
    ></div>
  )
}