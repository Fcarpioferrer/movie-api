import '../styles/globals.scss'
import type {AppProps} from 'next/app';
import {wrapper} from "../store/store";
import {Provider} from "react-redux";
import MainLayout from "../layouts/MainLayout";
import LoadingLayout from "../layouts/LoadingLayout";

function MyApp({Component, ...pageProps}: AppProps) {

  const Layout = (Component as any).layout ?? MainLayout;

  const {store, props} = wrapper.useWrappedStore(pageProps)

  return (
    <Provider store={store}>
      <LoadingLayout>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </LoadingLayout>
    </Provider>
  );
}

export default MyApp;
