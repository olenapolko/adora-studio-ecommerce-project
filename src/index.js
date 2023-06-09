import React from 'react';
import ReactDOM from 'react-dom/client';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';


import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
    {
      path: "/*",
      element: <App />,
    }
]);  
  
root.render(
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            authorizationParams={{ redirect_uri: process.env.REACT_APP_AUTH0_REDIRECT_URI}}
        >
            <UserProvider>
                <ProductsProvider>   
                    <FilterProvider>
                        <CartProvider>
                            <RouterProvider router={router}></RouterProvider>
                        </CartProvider>
                    </FilterProvider>
                </ProductsProvider>
            </UserProvider>
        </Auth0Provider>
);
