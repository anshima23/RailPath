import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import About from './pages/About';
import AppFeatyres from './pages/AppFeatyres';
import AppScreenShot from './pages/AppScreenShot';
import Blog1 from './pages/Blog1';
import Category from './pages/Category';
import Color from './pages/Color';
import ContactUs from './pages/ContactUs';
import Desktop14 from './pages/Desktop14';
import DownloadAppNow from './pages/DownloadAppNow';
import Font from './pages/Font';
import Footer from './pages/Footer';
import Frame1 from './pages/Frame1';
import HeroSaction from './pages/HeroSaction';
import HowToUseTheApppPerfectly from './pages/HowToUseTheApppPerfectly';
import LandingPage from './pages/LandingPage';
import OurHappyCustomers from './pages/OurHappyCustomers';
import OurReativeTeam from './pages/OurReativeTeam';
import OurRecentBlog from './pages/OurRecentBlog';
import RecentPost1 from './pages/RecentPost1';
import Tags from './pages/Tags';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/About', element: <About /> },
{ path: '/AppFeatyres', element: <AppFeatyres /> },
{ path: '/AppScreenShot', element: <AppScreenShot /> },
{ path: '/Blog1', element: <Blog1 /> },
{ path: '/Category', element: <Category /> },
{ path: '/Color', element: <Color /> },
{ path: '/ContactUs', element: <ContactUs /> },
{ path: '/Desktop14', element: <Desktop14 /> },
{ path: '/DownloadAppNow', element: <DownloadAppNow /> },
{ path: '/Font', element: <Font /> },
{ path: '/Footer', element: <Footer /> },
{ path: '/Frame1', element: <Frame1 /> },
{ path: '/HeroSaction', element: <HeroSaction /> },
{ path: '/HowToUseTheApppPerfectly', element: <HowToUseTheApppPerfectly /> },
{ path: '/LandingPage', element: <LandingPage /> },
{ path: '/OurHappyCustomers', element: <OurHappyCustomers /> },
{ path: '/OurReativeTeam', element: <OurReativeTeam /> },
{ path: '/OurRecentBlog', element: <OurRecentBlog /> },
{ path: '/RecentPost1', element: <RecentPost1 /> },
{ path: '/Tags', element: <Tags /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}