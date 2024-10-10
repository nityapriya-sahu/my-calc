import requireUser from "../utils/hooks";

export default async function DashboardPage() {
  const session = await requireUser();
  return (
    <div>
      <h1>Hello Dashboard page</h1>
    </div>
  );
}
