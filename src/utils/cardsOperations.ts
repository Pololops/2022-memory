import type { CardFromData, Card } from '../state';

/**
 * Funtion to duplicate cards
 * @returns All Duplicate Cards
 */
export const duplicateCards = (cards: CardFromData[]): CardFromData[] => {
  const duplicatedCards = cards.map((card) => {
    return {
      ...card,
      id: card.id + cards.length,
    }
  });

  return [...cards, ...duplicatedCards];
}

/**
 * Funtion to reset all cards informations
 * @returns Cards at the original state
 */
export const resetCards = (cards: Card[] | CardFromData[]): Card[] => {
  return cards.map((card) => {
    return {
      ...card,
      isFlipped: false,
      isSucceed: false,
      isFailed: false,
    }
  });
}

/**
 * Funtion to random shuffle cards
 * @returns Shuffled Cards
 */
export const shuffleCards = (cards: Card[]): Card[] => {
  let shuffledCards = [...cards];

  for (let i = shuffledCards.length -1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i);
    const card = shuffledCards[i];
    shuffledCards[i] = shuffledCards[randomNum];
    shuffledCards[randomNum] = card;
  }

  return shuffledCards;
}

/**
 * Funtion to test if two cards are the same
 * @returns All cards with indications in them if they are found or not
 */
export const validateCombination = (cards: Card[], turn: {id: number, name: string}[]): Card[] => {
  return cards.map((card) => {
    if (card.isFlipped && !card.isSucceed) {
      if (turn[0].name === turn[1].name && turn[0].id !== turn[1].id) {
        return { ...card, isSucceed: true }
      } else {
        return { ...card, isFailed: true }
      }
    }

    return card;
  });
}

/**
 * Funtion to reset the cards of a wrong combination
 * @returns All cards
 */
export const cancelWrongCombination = (cards: Card[]): Card[] => {
  return cards.map((card) => {
    if (card.isFailed) {
      return { ...card, isFlipped: false, isFailed: false }
    }

    return card;
  });
}

/**
 * Funtion to test if all cards are found
 * @returns boolean - true: if all cards are found | false: otherwise
 */
export const isAllCardsFound = (cards: Card[]): boolean => {
  const foundCard = cards.find(({isSucceed}) => isSucceed === false);

  return !foundCard ? true : false;
}
