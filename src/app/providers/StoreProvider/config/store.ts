import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateChema } from './StateChema';

export function createReduxStore(initialState?: StateChema) {
    const rootReducer: ReducersMapObject<StateChema> = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore<StateChema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
