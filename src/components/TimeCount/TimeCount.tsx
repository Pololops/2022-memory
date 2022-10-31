import { useEffect, useState } from 'react';

import './TimeCount.scss';
import ProgressBar from './ProgressBar';

let timerInterval: ReturnType<typeof setInterval>;

export default function TimeCount() {
  const maxTime = 60;
  const [time, setTime] = useState(maxTime);

  useEffect(() => {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 0.01);
      }, 10);

      return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(timerInterval);
      setTime(maxTime);
    }
  }, [time]);

  return (
    <div data-testid="time-counter" className="time-counter">
      <ProgressBar time={time} maxTime={maxTime} />
    </div>
  )
}