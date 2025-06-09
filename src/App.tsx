import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { GlobalStyles } from './styles/GlobalStyles';

// Loading component for Suspense
const Loading = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    Loading...
  </div>
);

const router = createBrowserRouter(routes, {
  basename: '/Test_FE',
});

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
