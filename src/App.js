
import './App.css';
import Menubar from './components/menubar/Menubar';
import Navbar from './components/navbar/Navbar';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from './components/sign in/Signin';
import Topbar from './components/topbar/Topbar';
import Body from './container/body/Body';
import Footer from './container/footer/Footer';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
   
  },
  {
    path:'login',
    element:<Signin/>,
  }
]);


function App() {
  return (
    <div className="App">
     
     <RouterProvider router={appRouter} />
     
     <Footer/>
    </div>
  );
}

export default App;
