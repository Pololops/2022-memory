import useAppDispatch from '../../hooks/useDispatch';
import useAppSelector from '../../hooks/useSelector';
import { flipCard } from '../../actions';

import './Card.scss';

interface Props {
  id: number,
  image: string,
  isFlipped: boolean,
  isSucceed: boolean,
  isFailed: boolean,
}

export default function Card({
  id,
  image,
  isFlipped,
  isSucceed,
  isFailed,
}: Props) {
  const dispatch = useAppDispatch();

  const gameIsOn = useAppSelector((state) => state.gameIsOn);
  const turn = useAppSelector((state) => state.turn);

  const onClickHandler = () => {
    if (gameIsOn && !isFlipped && turn.length < 2) {
      dispatch(flipCard(id));
    }
  }

  return (
    <li
      className={`card${isFlipped ? ` flipped` : ``}${isSucceed ? ` success` : ``}${isFailed ? ` fail` : ``}`}
      onClick={onClickHandler}
    >
      <div className="card__inner">
        <div className="card__inner__face card__inner__face--back"></div>
        <div
          className="card__inner__face card__inner__face--front"
          style={{ backgroundImage: image !== '' ? `url(${image})` : `none` }}
        ></div>
      </div>
    </li>
  )
}