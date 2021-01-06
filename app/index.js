import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { useMachine } from '@xstate/react';
import machine from '../machine/index.js';
import Loading from './components/loading.js';
import { getStateComponentName } from './utils.js';

function App() {
  const [state, send] = useMachine(machine);

  const Component = lazy(() => import(`./components/states/${getStateComponentName(state)}.js`));

  return (
    <Suspense fallback={<Loading />}>
      <Component send={send} state={state} />
    </Suspense>
  );
}

render(<App />, document.getElementById('root'));