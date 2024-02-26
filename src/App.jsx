import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import store, { persistor } from './store';
import GlobalStyles, {
  Main,
  WrapperMainContent,
  WrapperRightContent,
} from './styles/GlobalStyles';
import Routes from './routes';
import SideMenu from './components/SideMenu';
import PreviewPlayer from './components/PreviewPlayer';
import Loading from './components/Loading';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <WrapperMainContent>
            <SideMenu />
            <WrapperRightContent>
              <Main>
                <Routes />
                <Loading />
              </Main>
            </WrapperRightContent>
          </WrapperMainContent>
          <GlobalStyles />
          <ToastContainer autoClose={2500} className="toast-container" />
          <PreviewPlayer />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
