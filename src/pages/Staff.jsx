import Layout from "../components/Layout";

export default function Staff() {
  return (
    <Layout role="staff">
      <h2 className="text-3xl font-bold mb-6 text-primary">Staff Dashboard</h2>
      <p className="text-gray-700">- Show assigned tasks, deadlines, uploads.</p>
    </Layout>
  );
}