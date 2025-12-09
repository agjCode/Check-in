import type { RouteObject } from 'react-router-dom';

import EventsList from '../pages/EventsList';
import Home from '../pages/Home';
import Layout from '../pages/Layout';




export const routeConfig: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: 
        [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'EventsList',
                element: <EventsList />,
            },
        ],
    },
];