//layout
import { HeaderOnly } from '~/components/Layout';
import routesCongig from '~/config/routes';

// page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//public Route
const publicRoutes = [
    { path: routesCongig.home, component: Home },
    { path: routesCongig.following, component: Following },
    { path: routesCongig.profile, component: Profile },
    { path: routesCongig.upload, component: Upload, layout: HeaderOnly },
    { path: routesCongig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
