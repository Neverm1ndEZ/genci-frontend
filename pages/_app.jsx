import '../assets/base.css';
import 'tailwindcss/tailwind.css';
import { Layout } from '@/components/Layout';
import { Toaster } from 'react-hot-toast';
import Provider from './Provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextUIProvider } from '@nextui-org/react';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return (
        <QueryClientProvider client={queryClient}>
          <Provider>
            <NextUIProvider>
              <Layout>
                {page}
                <Toaster />
              </Layout>
            </NextUIProvider>
          </Provider>
        </QueryClientProvider>
      );
    };

  return renderWithLayout(<Component {...pageProps} />);
}
