import React from 'react';

import { Admin, Resource } from 'react-admin';

import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

import theme from './theme';
import { dataProvider, authProvider } from './service';

import { Home } from './Home';
import { NotFound } from './NotFound';

import { UsersList } from './modules/users/UsersList';

const Dashboard: React.FC = () => {
  return (
    <Admin
      theme={theme}
      dataProvider={dataProvider}
      authProvider={authProvider}
      catchAll={NotFound}
      dashboard={Home}
      disableTelemetry >
      <Resource
        name="users"
        list={UsersList}
        // show={ShowUser}
        // create={CreateUser}
        // edit={EditUser}
        // icon={EmojiTransportationIcon}
      />
      {/* <Resource name="users" list={UsersList} show={ShowUser} create={CreateUser} edit={EditUser} /> */}
    </Admin>
  );
};

export default Dashboard;
