import { DeepPartial } from '@reduxjs/toolkit';
import { StateChema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateChema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateChema)).toEqual(10);
    });
});
