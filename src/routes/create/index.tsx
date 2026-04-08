import { createFileRoute } from "@tanstack/react-router";
import Create from "#/components/Create/Create";
export const Route = createFileRoute("/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Create />;
}
