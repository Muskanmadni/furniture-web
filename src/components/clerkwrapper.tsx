// pages/_app.tsx
import { ClerkProvider } from '@clerk/clerk-react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider publishableKey="pk_test_b3Blbi1jb3ctMjYuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;