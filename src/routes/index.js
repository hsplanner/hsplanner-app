import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {useAuthInfoStore} from '../services/stores/auth';

export const screenStyles = {
  headerLeftContainerStyle: {
    marginLeft: 24,
  },

  headerTitleStyle: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  headerStyle: {
    backgroundColor: '#384c54',
    elevation: 0,
    borderWidth: 0,
    shadowColor: 'transparent',
  },
};

const Routes = () => {
  const {user} = useAuthInfoStore();
  const signed = Object.keys(user).length !== 0;
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
