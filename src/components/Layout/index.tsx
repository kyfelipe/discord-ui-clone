import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';

// export default function Layout() { // JS
//   return (
//     <div>Oi mundo!</div>
//   );
// }

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
    </Grid>
  );
};

export default Layout;
