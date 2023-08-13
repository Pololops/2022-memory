import './Button.scss';

interface Props {
  children: React.ReactNode,
  onClick: React.MouseEventHandler,
}

export default function Button({
  children,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      className="modal__button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}