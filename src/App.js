import React from "react";
import "./App.css";
import { Routes } from "./routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CookieConsent from "react-cookie-consent";

const queryClient = new QueryClient({});

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

function App() {
  const [showDevtools, setShowDevtools] = React.useState(false);

  React.useEffect(() => {
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
      <div className="App">
        <Routes />
      </div>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </QueryClientProvider>
  );
}

export default App;
