import Home from "./Home";
import Map from "./Map";

const routes = {
    'home': { component: <Home />, breadcrumbs: ['home'] },
    'map': { component: <Map />, breadcrumbs: ['home', 'map'] },
};

export default routes;
