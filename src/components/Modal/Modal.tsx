import './Modal.scss';

interface Props {
  children: JSX.Element | JSX.Element[],
  isVisible: boolean,
}

export default function Modal({children, isVisible}: Props) {
  return (
    <div 
      data-testid="modal" 
      className={`modal ${!isVisible ? 'hide' : ''}`}
    >
      {children}
    </div>
  )
}