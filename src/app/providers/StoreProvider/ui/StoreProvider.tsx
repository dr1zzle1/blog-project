import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateChema } from '../config/StateChema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateChema>;
}

export const StoreProvider = (props:StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateChema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
