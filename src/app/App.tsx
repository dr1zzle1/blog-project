import { classNames } from "shared/lib/classNames/classNames";
import { Suspense, useState } from "react";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";
import { Modal } from "shared/ui/Modal/Modal";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

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
