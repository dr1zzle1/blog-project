import { classNames } from "shared/lib/classNames/classNames";
import { Suspense } from "react";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import "./styles/index.scss";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
