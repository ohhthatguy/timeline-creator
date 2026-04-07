import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/input/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/input/"!</div>
}
