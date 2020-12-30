import { interpret } from 'xstate';
import machine from './machine.js';

test('initial state', () => {
  const service = interpret(machine);
  
  service.start();
  
  expect(service.state.value).toEqual({ deck: 'idle' });
});
