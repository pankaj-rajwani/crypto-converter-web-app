import { Home } from '@/pages';
import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};
