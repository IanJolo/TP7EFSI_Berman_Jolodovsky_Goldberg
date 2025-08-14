import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import './MainLayout.css';

function MainLayout() {
  return (
    <>
      <div className=''>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
