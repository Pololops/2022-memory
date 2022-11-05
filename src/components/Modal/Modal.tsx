import useAppSelector from '../../hooks/useSelector';

import './Modal.scss';

interface Children {
  children: JSX.Element | JSX.Element[],
}

export default function Modal({ children }: Children) {
  const isModalVisible = useAppSelector((state) => state.isModalVisible);

  return (
    <div 
      data-testid="modal" 
      className={`modal${!isModalVisible ? ' hide' : ''}`}
    >
      {children}
    </div>
  )
}