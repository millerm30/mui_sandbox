import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import PushContainer from './containers/PushContainer';
import HomeContainer from './containers/HomeContainer';
import { LoadingProvider } from './contexts/LoadingProvider';

export default function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/push-notifications" element={<PushContainer />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </LoadingProvider>
  );
}
