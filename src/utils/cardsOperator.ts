import type { CardFromData, Card } from '../state';

export function duplicateCards(cards: CardFromData[]): CardFromData[] {
  const duplicatedCards = cards.map((card) => {
    return {
      ...card,
      id: card.id + cards.length,
    }
  });

  return [...cards, ...duplicatedCards];
}

export function resetCards(cards: Card[] | CardFromData[]): Card[] {
  return cards.map((card) => {
    return {
      ...card,
      isFlipped: false,
      isSucceed: false,
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

export function validateCombination(cards: Card[], turn: {id: number, name: string}[]): Card[] {
  return cards.map((card) => {
    if (card.isFlipped && !card.isSucceed) {
      if (turn[0].name === turn[1].name && turn[0].id !== turn[1].id) {
        return { ...card, isSucceed: true }
      } else {
        return { ...card, isFailed: true }
      }
    }

    return card
  });
}

export function cancelWrongCombination(cards: Card[]): Card[] {
  return cards.map((card) => {
    if (card.isFailed) {
      return { ...card, isFlipped: false, isFailed: false }
    }

    return card;
  });
}
