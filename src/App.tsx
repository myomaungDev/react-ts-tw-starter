import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './screens';


export const AppRoot:React.FC =()=>{
  return(
    <React.Fragment>
        <RouterProvider router={AppRouter} />
    </React.Fragment>
  )
}