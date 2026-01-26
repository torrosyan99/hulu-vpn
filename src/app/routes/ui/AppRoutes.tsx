import {AnimatePresence, cubicBezier, motion} from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import { routerConfig } from '@/shared/config/routerConfig/routerConfig.tsx';

const pageVariants = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 16, opacity: 0 }, // чуть вниз при уходе
};
const pageTransition = {
  duration: 0.28,
  ease: cubicBezier(0.22, 1, 0.36, 1),
};

export const AppRoutes = () => {
  const location = useLocation();
  return <AnimatePresence mode="wait">
    <motion.div
      className="app"
      key={location.pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <Routes>
        {routerConfig.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </motion.div>
  </AnimatePresence>;
};
