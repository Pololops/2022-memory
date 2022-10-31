import { Middleware } from 'redux';
import { Dispatch } from 'react';
import type { RootState } from '../state';
import type { Actions } from '../actions';

const logger: Middleware<{}, RootState> = (store) => (next: Dispatch<Actions>) => (action: Actions) => {
    console.log('LOGGER : ', action);
    return next(action);

}

export default logger;