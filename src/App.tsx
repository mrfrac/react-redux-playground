import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store';
import TodoList from './components/TodoList';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoList color={"red"} />
    </Provider>
  );
}

export default App;
