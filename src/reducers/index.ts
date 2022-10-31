import initialState from '../state';

import type { ActionTypes } from '../actions';
import { duplicateCards, resetCards } from '../middlewares';

import { 
  GET_AND_INIT_CARDS, 
  FLIP_CARD,
} from '../actions';

// ! Find a way to delete the type "any" on "action" parameter
const reducer = (state = initialState, action: ActionTypes | any) => {
  switch (action.type) {
    case GET_AND_INIT_CARDS: {
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

    default: {
      return state;
    }
  }
}

export default reducer;
