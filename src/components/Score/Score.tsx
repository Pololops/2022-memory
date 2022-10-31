import useAppSelector from '../../hooks/useSelector';

import './Score.scss';

export default function Score() {
  const score = useAppSelector((state) => state.score);

  return (
    <p data-testid="score" className="score">
      Votre score est de {score} point{score > 1 && 's'}
    </p>
  )
}