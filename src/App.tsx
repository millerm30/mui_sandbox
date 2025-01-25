import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import PushContainer from './containers/PushContainer';
import HomeContainer from './containers/HomeContainer';
import NotificationCardContainer from './containers/NotificationCardContainer';
import { LoadingProvider } from './contexts/LoadingProvider';
import ScrollToTopButton from '~components/ScrollTopTopButton';
import { NotificationAPIProvider } from '@notificationapi/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1677ff',
    },
    secondary: {
      main: '#808080',
    },
    error: {
      main: '#FF2D55',
    },
    success: {
      main: '#37B877',
    },
    text: {
      secondary: '#8C8C8C',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
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
              <ScrollToTopButton />
            </PageLayout>
          </BrowserRouter>
        </LoadingProvider>
      </NotificationAPIProvider>
    </ThemeProvider>
  );
}
