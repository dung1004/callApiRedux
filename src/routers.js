import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductAddPage from './pages/ProductAddPage/ProductAddPage';

const routes = [
   {
        path: '/',
        exact: true,
        main: () => <HomePage />
   },
   {
       path: '/product-list',
       exact: false,
       main: () => <ProductListPage />
   },
   {
       path: '/product/add',
       exact: false,
       main: ({history}) => <ProductAddPage history={history} />
   },
   {
        path: "/product/:id/edit",
        exact: false,
        main: ({match, history}) => <ProductAddPage match={match} history={history} />
   },
   {
       path: '',
       exact: false,
       main: () => <NotFound />
   }
]

export default routes;