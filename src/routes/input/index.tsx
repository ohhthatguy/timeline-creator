import { createFileRoute } from "@tanstack/react-router";
import InputPage from "#/components/InputPage/InputPage";
// import TimelineComponent from "#/components/InputPage/TimelineComponent";
export const Route = createFileRoute("/input/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <InputPage />
      {/* <TimelineComponent /> */}
    </>
  );
}
