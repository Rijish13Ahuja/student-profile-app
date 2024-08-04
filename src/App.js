import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
import ProfileDetails from './components/ProfileDetails';
import ProfileEdit from './components/ProfileEdit';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Provider store={store}>
      <div className="App">
        {isEditing ? (
          <ProfileEdit onCancel={() => setIsEditing(false)} />
        ) : (
          <ProfileDetails onEdit={() => setIsEditing(true)} />
        )}
      </div>
    </Provider>
  );
}

export default App;