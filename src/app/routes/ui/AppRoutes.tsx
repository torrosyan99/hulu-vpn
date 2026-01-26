import {Route, Routes} from 'react-router-dom';
import {routerConfig} from "@/shared/config/routerConfig/routerConfig.tsx";

export const AppRoutes = () => {
  return <Routes>
    {routerConfig.map(({path, element}) => <Route path={path} element={element} />)}
  </Routes>;
};
