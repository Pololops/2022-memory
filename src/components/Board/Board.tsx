import './Board.scss';
import Card from '../Card/Card';
import type { CardFromData, Card as CardInterface } from '../../state';

interface Props {
  cards: CardInterface[] | (CardFromData & {
    isFlipped?: boolean,
    isSucceed?: boolean,
    isFailed?: boolean,
  })[],
  isLoadControlled: boolean,
}

export default function Board({ cards, isLoadControlled }: Props) {
  return (
    <ul
      data-testid={isLoadControlled ? 'images-loader-board' : 'board'}
      className={isLoadControlled ? 'invisible' : 'board'}
    >
      {
        cards.length > 0 &&
        cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.url}
            isFlipped={card.isFlipped ? card.isFlipped : false}
            isSucceed={card.isSucceed ? card.isSucceed : false}
            isFailed={card.isFailed ? card.isFailed : false}
            isLoadControlled={isLoadControlled}
          />
        ))
      }
    </ul>
  )
}