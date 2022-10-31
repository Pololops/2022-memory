import initialState from '../state';
import type { RootState } from '../state';

import { 
  duplicateCards, 
  resetCards, 
  shuffleCards, 
} from '../middlewares';

import type { 
  Actions
} from '../actions';

import { 
  GET_CARDS, 
  FLIP_CARD,
  START_GAME, 
  STOP_GAME, 
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
      const updatedCards = state.cards.map((card) => {
        if(card.id === action.payload) {
          return { ...card, isFlipped: true }
        }
        return card;
      });

      return {
        ...state,
        cards: updatedCards,
      };
    }

    case START_GAME: {
      const shuffledCards = shuffleCards(state.cards);

      return {
        ...state,
        cards: [...shuffledCards],
        score: 0,
        gameIsOn: true,
        isModalVisible: false,
      };
    }

    case STOP_GAME: {
      return {
        ...state,
        gameIsOn: false,
        isModalVisible: true,
      };
    }

    default: return state;
  }
}

export default reducer;
