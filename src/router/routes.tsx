import MainPage from "../pages/MainPage";
import ShopPage from "../pages/ShopPage";
import WorksPage from "../pages/Works/WorksPage";
import AdminPage from "../pages/Admin/AdminPage";
import WorkByIdPage from "../pages/WorkByIdPage/WorkByIdPage";

export interface IRoute {
    element: JSX.Element;
    path: RoutesPathEnum | `${RoutesPathEnum}:id`;
    name?: string;
}

export enum RoutesPathEnum  {
    worksItem = "/works/item/",
    shop = "/shop",
    works = "/works",
    main = "/",
    admin = "/admin",
}

export const routes: IRoute[] = [
    { path: RoutesPathEnum.main, element: <MainPage/>, name: "Главная" },
    { path: RoutesPathEnum.shop, element: <ShopPage/>, name: "Купить" },
    { path: RoutesPathEnum.works, element: <WorksPage/>, name: "Наши работы" },
    { path:`${RoutesPathEnum.worksItem}:id`, element: <WorkByIdPage/> },
];

export const privateRoutes: IRoute[] = [
    { path: RoutesPathEnum.admin, element: <h1/>, name: "панель админа" }
]