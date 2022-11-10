import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import AllServices from "../../Pages/AllServices/AllServices";
import EditReview from "../../Pages/EditReview/EditReview";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/myreviews/:id',
                element: <EditReview></EditReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/myreviews/${params.id}`)
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
]);

export default router;