import React from 'react';
let data: any = {};
const AppContext = React.createContext({
  lunches: data,
});
export default AppContext;
