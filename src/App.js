
import './App.css';
import Body from './container/body/Body';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from './components/sign in/Signin';
import Profile from './container/profile/Profile';
import Myprofile from './components/Profile_data/my_profile/Myprofile';
import Wishlist from './components/Profile_data/wishlist/Wishlist';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
   
  },
  {
    path:'login',
    element:<Signin/>,
  },
  {
    path: "Profile",
    element: <Profile/>,
    children: [
      {
        path: 'Myprofile',
        element: <Myprofile/>
      },
      {
        path:'wishlist',
        element:< Wishlist/>,
      }
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
