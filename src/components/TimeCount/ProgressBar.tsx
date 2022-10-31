interface Props {
  time: number,
  maxTime: number,
}

export default function ProgressBar({time, maxTime}: Props) {
  return (
    <div 
      data-testid="progress-bar" 
      className="time-counter__progress"
      style={{width: `${((100 * time / maxTime) - 100) * (-1)}%`}}
    ></div>
  )
}