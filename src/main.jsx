import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import FAQ from './pages/FAQ.jsx'
import ContactUs from './pages/ContactUs.jsx'
import HomeContent from './pages/HomeContent.jsx'
import DetailsPage from './pages/DetailsPage.jsx'
import ReadBooks from './pages/ReadBooks.jsx'
import WishList from './pages/WishList.jsx'
import PageToRead from './pages/PageToRead.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomeContent/>
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks/>,
            
          },
          {
            path: "/listedbooks/wishlist",
            element: <WishList/>
          }
        ]
      },
      {
        path: "/faq",
        element: <FAQ/>
      },
      {
        path: "/pagetoread",
        element: <PageToRead/>
      },
      {
        path: "/contactus",
        element: <ContactUs/>
      },
      {
        path: "/details/:id",
        element: <DetailsPage/>
      },
      {
        path: "*",
        element: <NotFoundPage/>
      }
    ]
  }  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    
  </React.StrictMode>,
)
