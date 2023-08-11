import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import useAppDispatch from '../../hooks/useDispatch';
import useAppSelector from '../../hooks/useSelector';
import {
  getCards,
  startGame,
  testCombination,
  searchNotFoundCard,
  initNextTurn,
  increaseScore,
  decreaseScore,
} from '../../actions';

import './App.scss';
import cards from '../../assets/data/cards-pokemon.json';

import Score from '../Score/Score';
import Board from '../Board/Board';
import TimeCount from '../TimeCount/TimeCount';
import Modal from '../Modal/Modal';
import Message from '../Message/Message';
import Button from '../Button/Button';

export default function App() {
  const dispatch = useAppDispatch();
  const turn = useAppSelector((state) => state.turn);
  const turnNumber = useAppSelector((state) => state.turnNumber);
  const score = useAppSelector((state) => state.score);

  const clickButtonHandler = () => {
    dispatch(startGame());
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
    <div className="app">
      <Score />
      <Board />
      <TimeCount />
      {
        createPortal(
          <Modal>
            <Message>
              {
                turnNumber < 1
                  ? 'Bienvenue dans le jeu Pokémon Memory !'
                  : (
                    <>
                      La partie est terminée !
                      <br />
                      Vous avez obtenu {score} point{score > 1 ? 's' : ''}
                    </>
                  )
              }
            </Message>
            <Button
              text={turnNumber < 1 ? 'Commencer une partie' : 'Recommencer une partie'}

              onClick={clickButtonHandler}
            />
          </Modal>,
          document.body
        )
      }
    </div>
  )
}