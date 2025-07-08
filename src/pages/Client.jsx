import Layout from "../components/Layout";

export default function Client() {
  return (
    <Layout role="client">
      <h2 className="text-3xl font-bold mb-6 text-accent">Client Dashboard</h2>
      <p className="text-gray-700">- Service status, document uploads, reminders.</p>
    </Layout>
  );
}