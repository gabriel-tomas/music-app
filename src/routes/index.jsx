import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Album from '../pages/Album';
import Playlist from '../pages/Playlist';
import Search from '../pages/Search';
import Category from '../pages/Category';
import Page404 from '../pages/Page404';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/playlist/:id" element={<Playlist />} />
      <Route path="/search" element={<Search />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
