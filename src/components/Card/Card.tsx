import { useState } from 'react';

import './Card.scss';

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClickHandler = () => {
    setIsFlipped(true);
  }

  return (
    <li 
      className={`card ${isFlipped ? `flipped` : ``}`}
      onClick={onClickHandler}
    >
      <div className="card__face card__face--back"></div>
      <div className="card__face card__face--front"></div>
    </li>
  )
}