import type { CardFromData, Card } from '../state';

export function duplicateCards(cards: CardFromData[]): CardFromData[] {
  const duplicatedCards = cards.map((card) => {
    return {
      ...card,
      id: card.id + 8,
    }
  });

  return [...cards, ...duplicatedCards];
}

export function resetCards(cards: Card[] | CardFromData[]): Card[] {
  return cards.map((card) => {
    return {
      ...card,
      isFlipped: false,
      isSucced: false,
      isFailed: false,
    }
  });
}
