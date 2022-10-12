import MainPage from "../pages/MainPage";
import ShopPage from "../pages/ShopPage";
import WorksPage from "../pages/Works/WorksPage";
import AdminPage from "../pages/Admin/AdminPage";
import WorkByIdPage from "../pages/WorkByIdPage/WorkByIdPage";

export interface IRoute {
    element: JSX.Element;
    path: string;
    name?: string;
}

export const routes: IRoute[] = [
    { path: "/", element: <MainPage/>, name: "Главная" },
    { path: "/shop", element: <ShopPage/>, name: "Купить" },
    { path: "/works", element: <WorksPage/>, name: "Наши работы" },
    { path: "/works/:id", element: <WorkByIdPage/> },
];

export const privateRoutes: IRoute[] = [
    { path: "/admin", element: <AdminPage/>, name: "панель админа" }
]