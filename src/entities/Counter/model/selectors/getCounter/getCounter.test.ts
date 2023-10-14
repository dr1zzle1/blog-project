import { StateChema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateChema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(state as StateChema)).toEqual({ value: 10 });
    });
});
