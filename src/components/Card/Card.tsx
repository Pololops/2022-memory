import useAppDispatch from '../../hooks/useDispatch';
import useAppSelector from '../../hooks/useSelector';
import { flipCard, loadingImageComplete } from '../../actions';

import './Card.scss';

interface Props {
  id: number,
  image: string,
  isFlipped: boolean,
  isSucceed: boolean,
  isFailed: boolean,
  isLoadControlled: boolean,
}

export default function Card({
  id,
  image,
  isFlipped,
  isSucceed,
  isFailed,
  isLoadControlled
}: Props) {
  const dispatch = useAppDispatch();

  const gameIsOn = useAppSelector((state) => state.gameIsOn);
  const turn = useAppSelector((state) => state.turn);

  const onImageLoadedHandler = () => {
    dispatch(loadingImageComplete());
  }

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
        >
          {isLoadControlled && (
            <img
              src={image}
              alt=""
              onLoad={onImageLoadedHandler}
            />
          )}
        </div>
      </div>
    </li>
  )
}