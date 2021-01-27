import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import OldWebsite from './OldWebsite';
import { useRoutes } from 'hookrouter';
import Routes from './Router';
import NotFound from './NotFound';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function NavBarRouter() {
  const routeResult = useRoutes(Routes);
  return <>{routeResult || <NotFound />}</>;
}
