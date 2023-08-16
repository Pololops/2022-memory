import useAppSelector from '../../hooks/useSelector';
import Button from '../Button/Button';
import Message from '../Message/Message';
import Spinner from '../Spinner/Spinner';
import Select from '../Select/Select';
import Range from '../Range/Range';

import './Modal.scss';

interface Props {
  minCardsValue: number,
  maxCardsValue: number,
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>,
  onDecreaseButtonClick: React.MouseEventHandler<HTMLButtonElement>,
  onIncreaseButtonClick: React.MouseEventHandler<HTMLButtonElement>,
  themes: { id: number, name: string, value: string }[],
  currentTheme: string,
  onChangeTheme: React.ChangeEventHandler<HTMLSelectElement>,
}

export default function Modal({
  minCardsValue,
  maxCardsValue,
  onDecreaseButtonClick,
  onIncreaseButtonClick,
  onChangeTheme,
  themes,
  currentTheme,
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
      <Message>
        {
          turnNumber < 1
            ? <>Bienvenue dans le jeu de Memory !</>
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
              <Select
                themes={themes}
                currentTheme={currentTheme}
                onChangeTheme={onChangeTheme}
              />
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