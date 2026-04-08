import { createFileRoute } from "@tanstack/react-router";

import Hero from "#/components/HomePage/Hero";
import StylePart from "#/components/HomePage/StylePart";
import WorkFlow from "#/components/HomePage/WorkFlow";
import PreFooter from "#/components/HomePage/PreFooter";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <Hero />
      <StylePart />
      <WorkFlow />
      <PreFooter />
    </>
  );
}
