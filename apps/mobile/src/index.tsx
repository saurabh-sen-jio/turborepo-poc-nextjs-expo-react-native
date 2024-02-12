import {Provider} from 'react-redux';
import {store} from '@repo/store';
import TodoExample from './TodoExample.tsx';

export default function Native() {
  return (
    <Provider store={store}>
      <TodoExample />
    </Provider>
  );
}


