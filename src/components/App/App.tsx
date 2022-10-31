import { useState } from 'react';

import './App.scss';

import Score from '../Score/Score';
import Board from '../Board/Board';
import TimeCount from '../TimeCount/TimeCount';
import Modal from '../Modal/Modal';
import Message from '../Message/Message';
import Button from '../Button/Button';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const clickButtonHandler = () => {
    setIsModalVisible(false);
  }

  return (
    <div className="app">
      <Score />
      <Board />
      <TimeCount />
      <Modal isVisible={isModalVisible}>
        <Message text="Bienvenue dans le jeu du Memory !" />
        <Button text="Commencer une partie" onClick={clickButtonHandler} />
      </Modal>
    </div>
  )
}