import type { RouteObject } from 'react-router-dom';

import YourEvents from '../pages/YourEvents';
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
                path: 'YourEvents',
                element: <YourEvents />,
            },
        ],
    },
];