import { useRouter } from 'next/router';
import Head from 'next/head';
import Nav from './Nav';
import DashboardNavbar from '../Dashboard-Components/DashboardNavbar';
import Topbar from '../Dashboard-Components/Topbar';
import DashboardMobileNavbar from '../Dashboard-Components/DashboardMobileNavbar';
import { useState } from 'react';
import SmallNav from '../SmallNav/SmallNav';
const Layout = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const router = useRouter();
  const shouldRenderNav = router.pathname == '/';
  const excludedRoutesNav = [
    '/',
    '/login',
    '/enrollment',
    '/forgot-password',
    '/payment',
    '/profile',
    '/courses/courseplaying',
    '/verify-email/emailverifiedpage',
    ,
    '/community',
    '/*',
  ];
  const excludedRoutesTop = [
    '/',
    '/login',
    '/enrollment',
    '/forgot-password',
    '/community',
    '/*',
    '/verify-email/emailverifiedpage',
  ];
  // Excluded Routes for TopBar and SideNavbar

  const includedRoutesSmallNav = [
    '/payment',
    '/profile',
    '/courses/courseplaying',
  ];
  //Routes in which we want to include the small nav

  // Check if the current route is in the excludedRoutes array
  const renderWithNav = !excludedRoutesNav.includes(router.pathname);
  const renderWithTop = !excludedRoutesTop.includes(router.pathname);

  // Check if the current route is in the includedRoute array
  const renderWithSmallNav = includedRoutesSmallNav.includes(router.pathname);

  return (
    <>
      <Head>
        <title>Welcome to Genci University!</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="nextjs-mongodb-app is a continuously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta property="og:title" content="Next.js + MongoDB App" />
        <meta
          property="og:description"
          content="nextjs-mongodb-app is a continuously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/201392697/5d392300-eef3-11e9-8e20-53310193fbfd"
        />
      </Head>
      {shouldRenderNav && <Nav />}
      {renderWithNav && <DashboardNavbar />}
      <DashboardMobileNavbar
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={setIsNavbarOpen}
      />
      {renderWithSmallNav && <SmallNav />}
      {renderWithTop && <Topbar handleMenuToggle={handleMenuToggle} />}
      <main
        className={`bg-darkBackgroundPrimary min-h-screen ${
          renderWithTop && 'pt-24'
        } ${renderWithNav ? 'lg:pl-52 ' : ''} px-3 ${
          renderWithSmallNav && 'lg:pl-28'
        }`}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
