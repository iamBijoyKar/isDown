import { ThemeProvider } from "./material-ui";

export default function Providers({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
