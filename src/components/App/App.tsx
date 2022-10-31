import { useEffect } from 'react';
import useAppDispatch from '../../hooks/useDispatch';
import useAppSelector from '../../hooks/useSelector';
import { 
  getCards, 
  startGame,
  testCombination, 
  initNextTurn,
} from '../../actions';

import './App.scss';
import cards from '../../assets/data/cards.json';

import Score from '../Score/Score';
import Board from '../Board/Board';
import TimeCount from '../TimeCount/TimeCount';
import Modal from '../Modal/Modal';
import Message from '../Message/Message';
import Button from '../Button/Button';

export default function App() {
  const dispatch = useAppDispatch();
  const turn = useAppSelector((state) => state.turn);

  const clickButtonHandler = () => {
    dispatch(startGame());
  }

  useEffect(() => {
    dispatch(getCards(cards));
  }, []);

  useEffect(() => {
    if (turn.length > 1) {
      dispatch(testCombination());

      setTimeout(() => {
        dispatch(initNextTurn());
      }, 1500);
    }
  }, [turn]);

  return (
    <div className="app">
      <Score />
      <Board />
      <TimeCount />
      <Modal>
        <Message text="Bienvenue dans le jeu du Memory !" />
        <Button text="Commencer une partie" onClick={clickButtonHandler} />
      </Modal>
    </div>
  )
}