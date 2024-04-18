import type { AppProps } from 'next/app';
import '@/sass/globals.scss';
import { UserProvider } from '@/context/UserLogin';  // Adjust the import path as necessary

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>  {/* Wrap the Component with UserProvider */}
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
