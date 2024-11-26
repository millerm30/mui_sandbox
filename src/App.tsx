import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import PushContainer from './containers/PushContainer';
import HomeContainer from './containers/HomeContainer';
import NotificationCardContainer from './containers/NotificationCardContainer';
import { LoadingProvider } from './contexts/LoadingProvider';
import ScrollToTopButton from '~components/ScrollTopTopButton';

export default function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/push-notifications" element={<PushContainer />} />
            <Route
              path="/notification-card"
              element={<NotificationCardContainer />}
            />
          </Routes>
          <ScrollToTopButton />
        </PageLayout>
      </BrowserRouter>
    </LoadingProvider>
  );
}
