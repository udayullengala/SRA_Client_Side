import { lazy } from 'react'
import Supplimentary from '../views/Supplimentary'
import Home from '../views/Home'
const EmployeeLogin = lazy(() => import('@views/EmployeeLogin'))
const SignUpPage = lazy(() => import('@views/SignUpPage'))
const Dashboard = lazy(() => import('@views/Dashboard'))
const Projects = lazy(() => import('@views/Projects'))
const Annexure = lazy(() => import('@views/Annexure'))
const AddAnnexure = lazy(() => import('@views/AddAnnexure'))
const AddSupplimentary = lazy(() => import('@views/AddSupplimentary'))

export const FrontBaseRoutes = [
    {
        path: '/',
        element: <Home />,
        meta: {
            layout: 'blank'
        }
    },
    {
        path: '/emp-login/',
        element: <EmployeeLogin />,
        meta: {
            layout: 'blank'
        }
    },
    {
        path: '/sign-up/',
        element: <SignUpPage />,
        meta: {
            layout: 'blank'
        }
    },
    {
        path: '/dashboard/',
        element: <Dashboard />,
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/projects/',
        element: <Projects />,
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/add_annexure/',
        element: <AddAnnexure />,
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/annexure/',
        element: <Annexure />,
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/supplimentary/',
        element: <Supplimentary />,
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/add_supplimentary/',
        element: <AddSupplimentary />,
        meta: {
            layout: 'main'
        }
    }
]