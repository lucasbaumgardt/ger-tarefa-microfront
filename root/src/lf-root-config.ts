import './index.css';

import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@lf/react-navbar",
  app: () =>
    System.import<LifeCycles>("http://localhost:8501/lf-react-navbar.js"),
  // activeWhen: (location) => location.pathname.includes('/') 
    activeWhen: ['/main', '/login', 'react-single']
});

registerApplication({
  name: "@lf/react-todo",
  app: () =>
    System.import<LifeCycles>("http://localhost:8500/lf-react-todo.js"),
  activeWhen: (location) => location.pathname === '/main',
});

start({
  urlRerouteOnly: true,
});
