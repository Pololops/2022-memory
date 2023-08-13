import useAppSelector from '../../hooks/useSelector';
import Message from '../Message/Message';

import './Modal.scss';

interface Children {
  children: JSX.Element | JSX.Element[],
}

export default function Modal({ children }: Children) {
  const isModalVisible = useAppSelector((state) => state.isModalVisible);
  const score = useAppSelector((state) => state.score);
  const turnNumber = useAppSelector((state) => state.turnNumber);

  return (
    <div
      data-testid="modal"
      className={`modal${!isModalVisible ? ' hide' : ''}`}
    >
      <Message >
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
      {children}
    </div>
  )
}