import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Weather from './components/Weather/Weather.tsx';
import Todo from './components/Todo/Todo.tsx';
import { store } from '@repo/store'
import { Provider } from 'react-redux'
import Home from './components/Home/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "weather",
        element: <Weather />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
