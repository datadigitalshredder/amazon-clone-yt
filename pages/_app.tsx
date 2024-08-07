import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/styles/globalstyles";
import Header from '@/components/Header/Header';
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import client from "@/lib/graphql/client";
import { ApolloProvider } from "@apollo/client";

const theme: DefaultTheme = {
  colors: {
    black: "#111",
    white: "#fff",
    background: "#EAEDED",
    orange: "orange",
    navBg: "#131921",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
    </>
  );
}
