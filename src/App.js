import './App.css';
import Body from './container/body/Body';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signin from './components/sign in/Signin';
import Profile from './container/profile/Profile';
import Myprofile from './components/Profile_data/my_profile/Myprofile';
import Wishlist from './components/Profile_data/wishlist/Wishlist';
import Wallet from './components/Profile_data/wallet/Wallet';
import Orders from './components/Profile_data/my_orders/Orders';
import Savedpayment from './components/Profile_data/saved_payment/Savedpayment';
import Logout from './components/Profile_data/logout/Logout';
import Bagpage from './container/Bagpage/Bagpage';
import Signinsmall from './components/Signinsmall/Signin';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
  },
  {
    path: 'login',
    element: <Signinsmall />,
  },
  {
    path: 'sigin',
    element: <Signin />,
  },
  {
    path: 'Bag',
    element: <Bagpage />,
  },
  {
    path: '',
    element: <Profile />,
    children: [
      {
        path: 'Myprofile',
        element: <Myprofile />,
      },
      {
        path: 'wallet',
        element: <Wallet />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'whishlist',
        element: <Wishlist />,
      },
      {
        path: 'savedpayment',
        element: <Savedpayment />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
