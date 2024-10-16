'use client';

import React from 'react';
import App from '../components/app/app';
import ReduxProvider from '../store/redux-provider';

export default function Home() {
  return (
    <ReduxProvider>
      <main>
        <App />
      </main>
    </ReduxProvider>
  );
}
