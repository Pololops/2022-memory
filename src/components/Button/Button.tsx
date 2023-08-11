import './Button.scss';

interface Props {
  text: string,
  onClick: React.MouseEventHandler,
}

export default function Button({ text, onClick }: Props) {
  return <button className="modal__button" onClick={onClick}>{text}</button>
}