import useAppSelector from '../../hooks/useSelector';

import './Board.scss';
import Card from '../Card/Card';

export default function Board() {
  const cards = useAppSelector((state) => state.cards);

  return (
    <ul data-testid="board" className="board">
      {
        cards.length > 0 && 
        cards.map(({id, name, url, isFlipped}) => (
          <Card 
            key={id} 
            id={id} 
            name={name}
            image={url} 
            isFlipped={isFlipped} 
          />
        ))
      }
    </ul>
  )
}