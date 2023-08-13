import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import useAppDispatch from '../../hooks/useDispatch';
import useAppSelector from '../../hooks/useSelector';
import {
  getCards,
  testCombination,
  searchNotFoundCard,
  initNextTurn,
  increaseScore,
  decreaseScore,
  startGame,
  changeCardsQuantity,
} from '../../actions';

import './App.scss';
import cards from '../../assets/data/cards-pokemon.json';

import Spinner from '../Spinner/Spinner';
import Score from '../Score/Score';
import Board from '../Board/Board';
import TimeCount from '../TimeCount/TimeCount';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';

export default function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isLoading);
  const allCards = useAppSelector((state) => state.allCards);
  const cardsQuantity = useAppSelector((state) => state.cardsQuantity);
  const playingCards = useAppSelector((state) => state.playingCards);
  const turn = useAppSelector((state) => state.turn);

  const appMaxWidth = () => {
    if (cardsQuantity > 18) return 'calc(800px + 9em)';
    if (cardsQuantity === 8) return 'calc(400px + 5em)';
    if (cardsQuantity === 10) return 'calc(400px + 5em)';
    if (cardsQuantity === 12) return 'calc(600px + 7em)';
    if (cardsQuantity === 14) return 'calc(700px + 8em)';
    if (cardsQuantity === 16) return 'calc(800px + 9em)';
    if (cardsQuantity === 18) return 'calc(600px + 7em)';
    return 'calc(800px + 9em))';
  }

  const changeRangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(changeCardsQuantity(Number(event.target.value)));
    dispatch(getCards(cards));
  }

  const clickButtonHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(startGame(cards));
  }

  useEffect(() => {
    dispatch(getCards(cards));
  }, []);

  useEffect(() => {
    if (turn.length > 1) {
      const isTurnWin = (turn[0].name === turn[1].name) && (turn[0].id !== turn[1].id);

      dispatch(testCombination());

      let timer = 0;
      if (isTurnWin) {
        dispatch(increaseScore());
        dispatch(searchNotFoundCard());
      } else {
        timer = 1500;
        dispatch(decreaseScore());
      }

      setTimeout(() => {
        dispatch(initNextTurn());
      }, timer);
    }
  }, [turn]);

  return (
    <div className="app" style={{ maxWidth: appMaxWidth() }}>
      {isLoading && (
        <Board cards={allCards} isLoadControlled={true} />
      )}

      <Score />
      <Board
        cards={playingCards}
        isLoadControlled={false}
      />
      <TimeCount />
      {
        createPortal(
          <Modal>
            {
              isLoading
                ? <Spinner />
                : (
                  <Form
                    onChangeRange={changeRangeHandler}
                    onButtonClick={clickButtonHandler}
                  />
                )
            }
          </Modal>,
          document.body
        )
      }
    </div>
  )
}