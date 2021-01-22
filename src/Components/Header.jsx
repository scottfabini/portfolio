import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export function HeaderLink({ page, selected }) {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  let className = selected ? 'headerlink-no-link ' : '';
  className += 'headerlink-title';

  return (
    <Link to={`/${page}`} className={className}>
      {title}
      <div className={selected ? 'headerlink-dot-active' : 'headerlink-dot'}>•</div>
    </Link>
  );
}

export default function Header() {
  const page = useParams().page || 'home';

  return (
    <div className="header">
      <HeaderLink page="about" selected={page === 'about'} />
      <HeaderLink page="projects" selected={page === 'projects'} />
      <HeaderLink page="contact" selected={page === 'contact'} />
    </div>
  );
}
