import Range from '../Range/Range';
import Button from '../Button/Button';
import useAppSelector from '../../hooks/useSelector';

import './Form.scss';

interface Props {
  onChangeRange: React.ChangeEventHandler<HTMLInputElement>,
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>,
}

export default function Form({ onChangeRange, onButtonClick }: Props) {
  const cardsQuantity = useAppSelector((state) => state.cardsQuantity);
  const turnNumber = useAppSelector((state) => state.turnNumber);

  return (
    <div className="form">
      <Range
        value={cardsQuantity}
        onChange={onChangeRange}
        min={8}
        max={20}
        step={2}
      />
      <Button
        text={turnNumber < 1 ? 'Commencer une partie' : 'Recommencer une partie'}
        onClick={onButtonClick}
      />
    </div>
  );
}