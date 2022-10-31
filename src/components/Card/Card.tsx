import useAppDispatch from '../../hooks/useDispatch';
import { flipCard } from '../../actions';

import './Card.scss';

interface Props {
  id: number,
  name: string,
  image: string,
  isFlipped: boolean,
}

export default function Card({
  id, 
  name, 
  image, 
  isFlipped, 
}: Props) {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(flipCard(id));
  }

  return (
    <li 
      className={`card ${isFlipped ? `flipped` : ``}`}
      onClick={onClickHandler}
    >
      <div className="card__face card__face--back">{name}</div>
      <div 
        className="card__face card__face--front"
        style={{backgroundImage: `url(${image})`}}
      ></div>
    </li>
  )
}