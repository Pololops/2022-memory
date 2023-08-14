import './Range.scss';

interface Props {
  value: number;
  min: number;
  max: number;
  onDecreaseButtonClick: React.MouseEventHandler<HTMLButtonElement>,
  onIncreaseButtonClick: React.MouseEventHandler<HTMLButtonElement>,
}

export default function Range({
  value,
  min,
  max,
  onDecreaseButtonClick,
  onIncreaseButtonClick,
}: Props) {
  return (
    <div className="difficulty">
      <button
        disabled={value <= min}
        type="button"
        onClick={onDecreaseButtonClick}
      >
        -
      </button>

      <span>{value * 2} cartes</span>

      <button
        disabled={value >= max}
        type="button"
        onClick={onIncreaseButtonClick}
      >
        +
      </button>
    </div>
  );
}