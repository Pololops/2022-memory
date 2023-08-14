import useAppSelector from '../../hooks/useSelector';
import Button from '../Button/Button';
import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';
import Range from '../Range/Range';

import './Modal.scss';

interface Props {
  minCardsValue: number,
  maxCardsValue: number,
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>,
  onDecreaseButtonClick: React.MouseEventHandler<HTMLButtonElement>,
  onIncreaseButtonClick: React.MouseEventHandler<HTMLButtonElement>,
}

export default function Modal({
  minCardsValue,
  maxCardsValue,
  onDecreaseButtonClick,
  onIncreaseButtonClick,
  onButtonClick,
}: Props) {
  const isLoading = useAppSelector((state) => state.isLoading);
  const isModalVisible = useAppSelector((state) => state.isModalVisible);
  const score = useAppSelector((state) => state.score);
  const turnNumber = useAppSelector((state) => state.turnNumber);
  const cardsQuantity = useAppSelector((state) => state.cardsQuantity);

  return (
    <div
      data-testid="modal"
      className={`modal${!isModalVisible ? ' hide' : ''}`}
    >
      <Message >
        {
          turnNumber < 1
            ? (
              <>
                Bienvenue dans le jeu Pokémon Memory !
                {!isLoading && minCardsValue !== maxCardsValue && (
                  <>
                    <br />
                    <br />
                    Choisissez le nombre de cartes que vous souhaitez :
                  </>
                )}
              </>
            )
            : (
              <>
                La partie est terminée !
                <br />
                <br />
                Vous avez obtenu {score} point{score > 1 ? 's' : ''}
              </>
            )
        }
      </Message>
      {
        isLoading
          ? <div className="modal__spinner"><Spinner /></div>
          : (
            <div className="modal__form">
              {minCardsValue !== maxCardsValue &&
                <Range
                  value={cardsQuantity}
                  min={minCardsValue}
                  max={maxCardsValue}
                  onDecreaseButtonClick={onDecreaseButtonClick}
                  onIncreaseButtonClick={onIncreaseButtonClick}
                />
              }
              <Button onClick={onButtonClick}>
                {
                  turnNumber < 1
                    ? 'Commencer une partie'
                    : 'Recommencer une partie'
                }
              </Button>
            </div>
          )
      }
    </div>
  )
}