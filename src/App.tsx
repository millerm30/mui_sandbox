import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import PushContainer from './containers/PushContainer';
import HomeContainer from './containers/HomeContainer';
import NotificationCardContainer from './containers/NotificationCardContainer';
import { LoadingProvider } from './contexts/LoadingProvider';
import ScrollToTopButton from '~components/ScrollTopTopButton';
import {
  NotificationAPIProvider,
  NotificationLauncher,
} from '@notificationapi/react';

export default function App() {
  return (
    <NotificationAPIProvider
      userId={import.meta.env.VITE_USER_ID}
      clientId={import.meta.env.VITE_CLIENT_ID}
      webPushOptInMessage="AUTOMATIC"
      playSoundOnNewNotification={true}
    >
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
            <NotificationLauncher
              buttonStyles={{ backgroundColor: 'black' }}
              iconColor="white"
            />
            <ScrollToTopButton />
          </PageLayout>
        </BrowserRouter>
      </LoadingProvider>
    </NotificationAPIProvider>
  );
}
