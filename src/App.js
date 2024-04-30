import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header/index';
import Routes from './routes';
import History from './services/history';
import store, { persitor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persitor}>
        <Router history={History}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
