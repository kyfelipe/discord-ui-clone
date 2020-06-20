import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';

// export default function Layout() { // JS
//   return (
//     <div>Oi mundo!</div>
//   );
// }

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
    </Grid>
  );
};

export default Layout;
