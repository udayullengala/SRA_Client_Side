import { lazy } from 'react'
import Suplimentary from '../views/Suplimentary'
const EmployeeLogin = lazy(() => import('@views/EmployeeLogin'))
const SignUpPage = lazy(() => import('@views/SignUpPage'))
const Dashboard = lazy(() => import('@views/Dashboard'))
const Projects = lazy(() => import('@views/Projects'))
const Annexure = lazy(() => import('@views/Annexure'))
const AddAnnexure = lazy(() => import('@views/AddAnnexure'))
const AddSuplimentary = lazy(() => import('@views/AddSuplimentary'))

export const FrontBaseRoutes = [
    {
        path: '/',
        element: <></>,
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
        path: '/suplimentary/',
        element: <Suplimentary />,
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/add_suplimentary/',
        element: <AddSuplimentary />,
        meta: {
            layout: 'main'
        }
    }
]