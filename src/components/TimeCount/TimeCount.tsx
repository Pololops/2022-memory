import { useEffect, useState } from 'react';
import useAppSelector from '../../hooks/useSelector';
import useAppDispatch from '../../hooks/useDispatch';
import { stopGame } from '../../actions';

import './TimeCount.scss';
import ProgressBar from './ProgressBar';

let timerInterval: ReturnType<typeof setInterval>;

export default function TimeCount() {
  const dispatch = useAppDispatch();

  const isModalVisible = useAppSelector((state) => state.isModalVisible);
  const maxTime = useAppSelector((state) => state.counter);
  const [time, setTime] = useState(maxTime);
  const [isCounterRunning, setIsCounterRunning] = useState(false);

  useEffect(() => {
    if (!isModalVisible) {
      setIsCounterRunning(true);
      setTime(maxTime);
      // Decrease time by 1 every second
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1 / 100);
      }, 10);
    } else {
      clearInterval(timerInterval);
      setIsCounterRunning(false);
    }

    return () => clearInterval(timerInterval);
  }, [isModalVisible]);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(timerInterval);
      dispatch(stopGame());
    }
  }, [time]);

  return (
    <div data-testid="time-counter" className="time-counter">
      <ProgressBar time={time} maxTime={maxTime} isCounterRunning={isCounterRunning} />
    </div>
  )
}