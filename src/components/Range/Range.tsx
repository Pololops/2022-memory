import './Range.scss';

interface Props {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  step: number;
}

export default function Range({
  value,
  min,
  max,
  step,
  onChange,
}: Props) {
  return (
    <div className="difficulty">
      <label htmlFor="size">Difficulté : </label>
      <span>{value * 2} cartes</span>
      <input
        type="range"
        id="size"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}