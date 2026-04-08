import { createFileRoute } from "@tanstack/react-router";
import InputPage from "#/components/InputPage/InputPage";
export const Route = createFileRoute("/input/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <InputPage />;
}
