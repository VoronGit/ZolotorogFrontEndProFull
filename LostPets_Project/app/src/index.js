import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import lostReducers from "./store/reducers/lost"

import './index.css';
import App from "./App";
import MainPage from './pages/MainPage';
import FoundPage from './pages/FoundPage';
import AdvertDetailsPage from './pages/AdvertDetailsPage';
import LostPage from './pages/LostPage';
import SittersPage from './pages/SittersPage';
import SitterDetailsPage from './pages/SitterDetailsPage';
import SignInPage from './pages/SignInPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import ProfileDefaultPage from './pages/ProfileDefaultPage';
import ProfileMessagesPage from './pages/ProfileMessagesPage';
import ProfileChatPage from './pages/ProfileChatPage';
import ProfileAdvertsPage from './pages/ProfileAdvertsPage';
import Page404 from './pages/Page404';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/found",
        element: <FoundPage />,
        children: [
          {
            path: "details",
            element: <AdvertDetailsPage />,
          },
        ]
      },
      {
        path: "/lost",
        element: <LostPage />,
        children: [
          {
            path: "details",
            element: <AdvertDetailsPage />,
          },
        ]
      },
      {
        path: "/sitters",
        element: <SittersPage />,
        children: [
          {
            path: "details",
            element: <SitterDetailsPage />,
          },
        ]
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        children: [
          {
            path: "",
            element: <ProfileDefaultPage />,
          },
          {
            path: "messages",
            element: <ProfileMessagesPage />,
          },
          {
            path: "messages/chat",
            element: <ProfileChatPage />,
          },
          {
            path: "adverts",
            element: <ProfileAdvertsPage />,
            children: [
              {
                path: "details",
                element: <AdvertDetailsPage />,
              },
            ]
          },
        ]
      },
      {
        path: "*",
        element: <Page404 />,
      }
    ]
  }
]);

const reducers = combineReducers({
  lost: lostReducers
});

const store = createStore(reducers, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
