
import { Container } from 'semantic-ui-react'
import './styles.css'
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';
import { useStore } from '../stores/store';
import { useEffect } from 'react';
import LoadingComponents from './LoaadingComponent';
import ModalContainer from '../common/models/ModalContainer';


const App = observer(function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded)
    return <LoadingComponents content='Loading app...' />

  return (
    <>
    <ModalContainer/>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      {
        location.pathname === '/' ? <HomePage /> :
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }} >
              <Outlet />
            </Container>
          </>
      }

    </>
  )
});

export default App;



