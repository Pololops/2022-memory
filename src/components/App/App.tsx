import { useEffect } from 'react';
import useAppDispatch from '../../hooks/useDispatch';
import { 
  getAndInitCards, 
  startGame,
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

  const clickButtonHandler = () => {
    dispatch(startGame());
  }

  useEffect(() => {
    dispatch(getAndInitCards(cards));
  }, []);

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