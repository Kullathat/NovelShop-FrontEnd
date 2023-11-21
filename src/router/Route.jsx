import Layout from "../layout/layout";
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from "react-router-dom";
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import Cart from "../pages/CartPage";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import PaymentPage from "../pages/PaymentPage";
import ListPage from "../pages/ListPage";
import AddressPage from "../pages/AddressPage"
import Authenticated from "../features/auth/Authenticated";
import AdminCreateForm from "../admin/adminCreate";
import ApproveAdmin from "../admin/adminApprove";
import AdminContextProvider from "../context/AdminContext";
import AdminPage from "../admin/adminEdit";
import EditPage from "../admin/EditPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout />
        ),
        children: [
            { path: '', element: <HomePage /> },
            {
                path: 'Register', element:
                    <RedirectIfAuthenticated>
                        <Register />
                    </RedirectIfAuthenticated>
            },
            {
                path: 'Cart', element:
                    <Authenticated>
                        <Cart />
                    </Authenticated>
            },
            {
                path: 'Payment', element:
                    <Authenticated>
                        <PaymentPage />
                    </Authenticated>
            },
            { path: 'AllBook', element: <ListPage /> },
            {
                path: '/Address', element:
                    <Authenticated>
                        <AddressPage />
                    </Authenticated>
            },
            {

                path: 'Login', element:
                    <RedirectIfAuthenticated>
                        <LoginPage />
                    </RedirectIfAuthenticated>

            }
        ]
    },
    {
        path: 'admin', element: (
            <AdminContextProvider>
                <Layout />,
            </AdminContextProvider>
        ),
        children: [
            {
                path: 'create', element:
                    <AdminCreateForm />
            },
            {
                path: 'confirm', element:
                    <ApproveAdmin />
            },
            {
                path: 'main', element:
                    <AdminPage/>
            },
            {
                path: 'edit', element:
                    <EditPage/>
            }
        ]
    }

])
export default function Router() {
    return <RouterProvider router={router} />;
}