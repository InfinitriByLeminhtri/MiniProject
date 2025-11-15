import {
  Route,
  Routes,
  useLocation
} from "react-router-dom"

import NotFound from './features/user/pages/NotFound';

const AppLayout = () => {
  const location = useLocation();

  const hideFooterRoutes = [
    '/login',
    '/register',
    '*'
  ];



  const showFooterRoutes = [
    '/',
    '/home',
    '/quizzes-list',
    '/favorite-quizzes'
  ];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname) || !showFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        {/* Public Routes */}
        <Routes>
          {/* Public routes */}
          {/* {PublicRoutes()} */}

          {/* Admin routes */}
          {/* {AdminRoutes()} */}

          {/* User routes */}
          {/* {UserRoutes()} */}

          {/* Not Found Routes */}
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>

      {!shouldHideFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  )
}

const App = () => {
  return (
    <AppLayout />
  )
};

export default App