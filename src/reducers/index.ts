import initialState from '../state';
import type { RootState } from '../state';


import {
  createEmptyCards,
  duplicateCards,
  shuffleCards,
  validateCombination,
  cancelWrongCombination,
  selectCards,
  resetPlayingCards,
} from '../utils/cardsOperations';

import type { Actions } from '../actions';

import {
  GET_CARDS,
  LOADING_IMAGE_COMPLETE,
  DECREASE_CARDS_QUANTITY,
  INCREASE_CARDS_QUANTITY,
  FLIP_CARD,
  START_GAME,
  STOP_GAME,
  TEST_COMBINATION,
  INIT_NEXT_TURN,
  INCREASE_SCORE,
  DECREASE_SCORE,
} from '../actions';

const reducer = (state: RootState = initialState, action: Actions): RootState => {
  switch (action.type) {
    case GET_CARDS: {
      return {
        ...state,
        allCards: action.payload,
        playingCards: createEmptyCards(state.cardsQuantity * 2),
        cardsQuantity: action.payload.length < state.cardsQuantity ? action.payload.length : state.cardsQuantity,
      };
    }

    case LOADING_IMAGE_COMPLETE: {
      const addLoadedImage = state.loadedImages + 1;
      if (addLoadedImage === state.allCards.length) {
        return {
          ...state,
          isLoading: false,
          loadedImages: state.allCards.length,
        };
      }

      return {
        ...state,
        loadedImages: addLoadedImage,
      };
    }

    case DECREASE_CARDS_QUANTITY: {
      const newCardsQuantity = state.cardsQuantity <= 8
        ? state.cardsQuantity
        : state.cardsQuantity - 2;

      return {
        ...state,
        cardsQuantity: newCardsQuantity,
      };
    }

    case INCREASE_CARDS_QUANTITY: {
      const maxQuantity = state.allCards.length > 20 ? 20 : state.allCards.length;
      const newCardsQuantity = state.cardsQuantity >= maxQuantity
        ? state.cardsQuantity
        : state.cardsQuantity + 2;

      return {
        ...state,
        cardsQuantity: newCardsQuantity,
      };
    }

    case START_GAME: {
      const selectedCards = selectCards(state.allCards, state.cardsQuantity);
      const duplicatedCards = duplicateCards(selectedCards, state.allCards.length);
      const initPlayingCards = resetPlayingCards(duplicatedCards);
      const shuffledPlayingCards = shuffleCards(initPlayingCards);

      return {
        ...state,
        playingCards: shuffledPlayingCards,
        score: 0,
        gameIsOn: true,
        counter: 60 * (state.cardsQuantity / 8),
        isModalVisible: false,
        turnNumber: state.turnNumber + 1,
      };
    }

    case FLIP_CARD: {
      const updatedTurn = [...state.turn];

      const updatedCards = state.playingCards.map((card) => {
        if (card.id === action.payload) {
          // Add id and name of flipped card into the "turn" key of state, as buffer
          updatedTurn.push({ id: card.id, name: card.name });

          return { ...card, isFlipped: true }
        }
        return card;
      });

      return {
        ...state,
        playingCards: updatedCards,
        turn: updatedTurn,
      };
    }

    case TEST_COMBINATION: {
      const updatedCards = validateCombination(state.playingCards, state.turn);

      return {
        ...state,
        playingCards: updatedCards,
      };
    }

    case INIT_NEXT_TURN: {
      const updatedCards = cancelWrongCombination(state.playingCards);

      return {
        ...state,
        playingCards: updatedCards,
        turn: [],
      };
    }

    case STOP_GAME: {
      sessionStorage.setItem('score', JSON.stringify(state.score));

      return {
        ...state,
        gameIsOn: false,
        isModalVisible: true,
      };
    }

    case INCREASE_SCORE: {
      const newScore = state.score + action.payload;

      return {
        ...state,
        score: newScore,
      };
    }

    case DECREASE_SCORE: {
      let newScore = state.score - action.payload;
      if (newScore < 0) {
        newScore = 0
      };

      return {
        ...state,
        score: newScore,
      };
    }

    default: return state;
  }
}

export default reducer;
