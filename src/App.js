import React from 'react';
import Body from './components/Body';
import appStore from './utils/appstore';
import { Provider, useDispatch, useSelector,  } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Browse from './components/Browse';


const App = () => {
  return (
      <Provider store={appStore}>
        

        <Body />
      </Provider>
  );
}

export default App;
