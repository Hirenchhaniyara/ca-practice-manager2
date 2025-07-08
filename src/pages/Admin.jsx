import Layout from "../components/Layout";

export default function Admin() {
  return (
    <Layout role="admin">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <p className="text-gray-700">
        - Add widgets (clients, staff, tasks, GST, TDS, ITR) here.
      </p>
    </Layout>
  );
}