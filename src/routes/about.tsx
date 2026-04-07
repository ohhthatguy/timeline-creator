import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return <div className="m-9">asdsa</div>;
}
