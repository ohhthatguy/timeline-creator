import { Outlet, createRootRoute } from "@tanstack/react-router";
import "../styles.css";
import { ThemeProvider } from "#/context/theme/theme";
import { AlignmentProvider } from "#/context/theme/theme";
import Header from "#/components/HomePage/Header";
import Footer from "#/components/HomePage/Footer";
import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Toaster />
      <ThemeProvider>
        <AlignmentProvider>
          <div className=" text-text_color transition-colors duration-500">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </AlignmentProvider>
      </ThemeProvider>
    </>
  );
}
