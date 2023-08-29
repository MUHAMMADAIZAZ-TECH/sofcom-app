import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import Layout from './layout';

const SignIn = lazy(() => import('./signin'));
function Container() {
  return (
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
       <SignIn/>
      </Suspense>
  );
}

export default Layout(Container);
