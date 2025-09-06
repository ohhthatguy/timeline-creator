import LandingPage from "@/Pages/Unprotected/LandingPage/LandingPage";
import TemplatePage from "@/Pages/Unprotected/TemplatePage/TemplatePage";
import InputPage from "@/Pages/Unprotected/InputPage/InputPage";
import Test from "@/Pages/Unprotected/TemplatePage/Test";


const publicRoutes = [
    {path: "/", element: LandingPage},
    {path: "/TemplatePage", element: TemplatePage},
    {path: "/InputPage", element: InputPage},
    {path: "/Test", element: Test},


]

const authorizedRoutes = []

export {publicRoutes, authorizedRoutes}