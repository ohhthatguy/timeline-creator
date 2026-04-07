import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Header from "#/components/HomePage/Header";
import Footer from "#/components/HomePage/Footer";
import Create from "#/components/Create/Create";
export const Route = createFileRoute("/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [alignment, setAlignment] = useState<"vertical" | "horizontal">(
    "vertical",
  );
  return (
    <>
      <Header alignment={alignment} setAlignment={setAlignment} />
      <Create alignment={alignment} />
      <Footer />
    </>
  );
}
