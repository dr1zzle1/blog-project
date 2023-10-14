import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterChema } from '../../types/counterShema';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterChema) => counter.value,
);
