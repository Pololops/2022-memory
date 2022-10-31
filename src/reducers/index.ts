import initialState from '../state';
import type { RootState } from '../state';

import { 
  duplicateCards, 
  resetCards, 
  shuffleCards, 
  validateCombination, 
  cancelWrongCombination, 
} from '../utils/cardsOperator';

import type { 
  Actions
} from '../actions';

import { 
  GET_CARDS, 
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
      const cards = duplicateCards(action.payload);
      const initializedCards = resetCards(cards);
    
      return {
        ...state,
        cards: [...initializedCards],
      };
    }

    case FLIP_CARD: {
      const updatedTurn = [...state.turn];

      const updatedCards = state.cards.map((card) => {
        if(card.id === action.payload) {
          // Add id and name of flipped card into the "turn" key of state, as buffer
          updatedTurn.push({ id: card.id, name: card.name });
          
          return { ...card, isFlipped: true }
        }
        return card;
      });

      return {
        ...state,
        cards: updatedCards,
        turn: updatedTurn,
      };
    }

    case START_GAME: {
      const newsCards = resetCards(state.cards);
      const shuffledNewCards = shuffleCards(newsCards);

      return {
        ...state,
        cards: [...shuffledNewCards],
        score: 0,
        gameIsOn: true,
        isModalVisible: false,
      };
    }

    case TEST_COMBINATION: {
      const updatedCards = validateCombination(state.cards, state.turn);

      return {
        ...state,
        cards: updatedCards,
      };
    }

    case INIT_NEXT_TURN: {
      const updatedCards = cancelWrongCombination(state.cards);

      return {
        ...state,
        cards: updatedCards,
        turn: [],
      };
    }

    case STOP_GAME: {
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
