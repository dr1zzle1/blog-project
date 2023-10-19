import { CounterChema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateChema {
    counter: CounterChema;
    user: UserSchema
}
