import type { CardFromData, Card } from '../state';

/** Function to get a random number
 * @param max - a maximum number
 * @returns Random number
 */
export const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max);
}

/** Function to create empty card
 * quantity - Number of cards to create
 * @returns Empty Card
 */
export const createEmptyCards = (quantity: number): Card[] => {
  return Array.from({ length: quantity }, (_, index) => {
    return {
      id: index + 1,
      name: (index + 1).toString(),
      url: '',
      isFlipped: false,
      isSucceed: false,
      isFailed: false,
    }
  }, []);
}

/**
 * Function to choose cards
 * @param cards - Array of cards
 * @param quantity - Number of cards to choose
 * @returns Array of Cards
 */
export const selectCards = (cards: CardFromData[], quantity: number): CardFromData[] => {
  if (quantity >= cards.length) return [...cards]

  const allCards = [...cards];
  const selectedCards: CardFromData[] = [];

  for (let i = 0; i < quantity; i++) {
    const randomIndex = getRandomNumber(allCards.length);
    const randomSelectedCard = allCards.splice(randomIndex, 1);

    selectedCards.push(randomSelectedCard[0]);
  }

  return selectedCards;
}

/**
 * Function to duplicate cards
 * @param cards - Array of cards
 * @param allCardsLength - Quantity of all cards to generate duplicate ids
 * @returns All Duplicate Cards
 */
export const duplicateCards = (cards: CardFromData[], allCardsLength: number): CardFromData[] => {
  const duplicatedCards = cards.map((card) => {
    return {
      ...card,
      id: card.id + allCardsLength,
    }
  });

  return [...cards, ...duplicatedCards];
}

/**
 * Function to reset all cards informations
 * @param cards - Array of cards
 * @returns Cards at the original state
 */
export const resetPlayingCards = (cards: CardFromData[]): Card[] => {
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
 * Function to random shuffle cards
 * @param cards - Array of cards
 * @returns Shuffled Cards
 */
export const shuffleCards = (cards: Card[]): Card[] => {
  let shuffledCards = [...cards];

  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i);
    const card = shuffledCards[i];
    shuffledCards[i] = shuffledCards[randomNum];
    shuffledCards[randomNum] = card;
  }

  return shuffledCards;
}

/**
 * Function to test if two cards are the same
 * @param cards - Array of cards
 * @param turn - A pair of cards
 * @returns All cards with indications in them if they are found or not
 */
export const validateCombination = (cards: Card[], turn: { id: number, name: string }[]): Card[] => {
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
 * Function to reset the cards of a wrong combination
 * @param cards - Array of cards
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
 * Function to test if all cards are found
 * @param cards - Array of cards
 * @returns boolean - true: if all cards are found | false: otherwise
 */
export const isAllCardsFound = (cards: Card[]): boolean => {
  const foundCard = cards.find(({ isSucceed }) => isSucceed === false);

  return !foundCard ? true : false;
}
