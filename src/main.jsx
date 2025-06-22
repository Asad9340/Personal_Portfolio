import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import AnimatedCursor from 'react-animated-cursor';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AnimatedCursor
        innerSize={16}
        outerSize={0}
        color="220, 20, 60"
        outerAlpha={0}
        innerScale={1}
        outerScale={1}
        showSystemCursor={false}
        trailingSpeed={6}
        clickables={[
          'a',
          'button',
          '.link',
          '.cursor-pointer',
          'input',
          'textarea',
          'select',
          '[role="button"]',
          '.card',
          '.input',
          '.textarea',
        ]}
        outerStyle={{}}
        innerStyle={{
          backgroundColor: '#DC143C',
          mixBlendMode: 'difference',
        }}
      />

      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </StrictMode>
);
