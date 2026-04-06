import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './router/Root.jsx';
import Home from './router/Home.jsx';
import Mobile from './router/Mobile.jsx';
import Laptop from './router/Laptop.jsx';
import User from './router/User.jsx';
import User2 from './router/User2.jsx';
import UserDetails from './router/UserDetails.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: 
    [
      {index: true, Component: Home},
      {path: 'mobile', Component: Mobile},
      {path: 'laptop', Component: Laptop},
      {
        path: 'user',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component: User
      },
      {
        path: 'user2',
        element: <Suspense fallback={<span>Loading...</span>}>
            <User2 userPromise={userPromise}/>
        </Suspense>
      },
      {
        path: 'user2/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,

      }
    ]
  },
  {
    path: "/app",
    Component: App,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
