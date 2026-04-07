import { createFileRoute } from "@tanstack/react-router";
import { useTheme } from "#/context/theme/theme.tsx";
import Header from "#/components/HomePage/Header";
import Footer from "#/components/HomePage/Footer";
import Hero from "#/components/HomePage/Hero";
import StylePart from "#/components/HomePage/StylePart";
import WorkFlow from "#/components/HomePage/WorkFlow";
import PreFooter from "#/components/HomePage/PreFooter";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const { theme } = useTheme();
  console.log("THEME: ", theme);
  return (
    <>
      <Header />
      <Hero />
      <StylePart />
      <WorkFlow />
      <PreFooter />
      <Footer />
    </>
  );
}
