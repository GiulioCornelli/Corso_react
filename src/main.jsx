import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import store from "./redux/store"
import { Provider } from 'react-redux'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Contatti from './pages/Contatti.jsx'
import CardsChildren from './pages/CardsChildren.jsx'
import Card from './pages/Card.jsx'
import Cards from './pages/Cards.jsx'
 

// array di oggetti per inserire le rotte
const router = createBrowserRouter([
  {
    path:"/",
    element: <App></App>
  },

  {
    path:"/about",
    element: <About></About>
  },
  {
    path:"/contatti",
    element: <Contatti></Contatti>
  },
  {
    path:"/cards",
    element: <Cards></Cards>
  },
  {
    path:"/cards/:cardID",
    element: <Card></Card>
  },
  {
    path: "cards-children",
    element: <CardsChildren />,
    children: [
      {
        path: ":cardID",       
        element: <Card />, 
      },
    ],
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </StrictMode> 
);


