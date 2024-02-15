import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Album from '../pages/Album';
import Page404 from '../pages/Page404';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
