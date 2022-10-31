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

export function shuffleCards(cards: Card[]): Card[] {
  let shuffledCards = [...cards];

  for (let i = shuffledCards.length -1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i);
    const card = shuffledCards[i];
    shuffledCards[i] = shuffledCards[randomNum];
    shuffledCards[randomNum] = card;
  }

  return shuffledCards;
}
