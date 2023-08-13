import './Range.scss';

interface Props {
  value: number;
  onDecreaseButtonClick: React.MouseEventHandler<HTMLButtonElement>,
  onIncreaseButtonClick: React.MouseEventHandler<HTMLButtonElement>,
}

export default function Range({
  value,
  onDecreaseButtonClick,
  onIncreaseButtonClick,
}: Props) {
  return (
    <div className="difficulty">
      <button
        disabled={value <= 8}
        type="button"
        onClick={onDecreaseButtonClick}
      >
        -
      </button>

      <span>{value * 2} cartes</span>

      <button
        disabled={value >= 20}
        type="button"
        onClick={onIncreaseButtonClick}
      >
        +
      </button>
    </div>
  );
}