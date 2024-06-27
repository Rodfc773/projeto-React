import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoutes';
import Login from '../pages/Login';
import Student from '../pages/Student';
import Students from '../pages/Students';
import Photos from '../pages/Photos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Students} />
      <MyRoute exact path="/student/:id/edit" component={Student} isClosed />
      <MyRoute exact path="/student/" component={Student} isClosed={false} />
      <MyRoute exact path="/photo/:id" component={Photos} isClosed />
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute exact path="/register" component={Register} isClosed={false} />

      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
