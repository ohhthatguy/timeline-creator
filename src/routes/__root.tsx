import { Outlet, createRootRoute } from "@tanstack/react-router";
import "../styles.css";
import { ThemeProvider } from "#/context/theme/theme";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <ThemeProvider>
        <div className=" text-text_color transition-colors duration-500">
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
}
