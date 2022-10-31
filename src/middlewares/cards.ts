import { Middleware } from 'redux';
import { Dispatch } from 'react';

import { SEARCH_NOT_FOUND_CARD, stopGame } from '../actions';
import { isAllCardsFound } from '../utils/cardsOperations'

import type { RootState } from '../state';
import type { Actions } from '../actions';

export const validateCombination: Middleware<{}, RootState> = (store) => (next: Dispatch<Actions>) => (action: Actions) => {
 switch (action.type) {
    case SEARCH_NOT_FOUND_CARD: {
      const state = store.getState();

      const isCardsFound = isAllCardsFound(state.cards);

      if (isCardsFound) {
        store.dispatch(stopGame());
      };

      break;
    }

    default: return next(action);
  }
}
