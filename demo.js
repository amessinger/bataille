import { interpret } from 'xstate';
import machine from './machine/index.js';

const service = interpret(machine).onTransition(state => {
  console.log(state.context);
})

service.start();

service.send('CREATE');
service.send('SHUFFLE');
service.send('DEAL');
service.send('PLAY');
service.send('PLAY');
service.send('PLAY');
service.send('PLAY');
service.send('PLAY');
service.send('PLAY');
service.send('PLAY');
service.send('PLAY');
