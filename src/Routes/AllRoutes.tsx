import LandingPage from "@/Pages/Unprotected/LandingPage/LandingPage";
import TemplatePage from "@/Pages/Unprotected/TemplatePage/TemplatePage";
import InputPage from "@/Pages/Unprotected/InputPage/InputPage";


const publicRoutes = [
    {path: "/", element: LandingPage},
    {path: "/TemplatePage", element: TemplatePage},
    {path: "/InputPage", element: InputPage},

]

const authorizedRoutes = []

export {publicRoutes, authorizedRoutes}