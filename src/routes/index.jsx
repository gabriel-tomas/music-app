import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Page404 from '../pages/Page404';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
