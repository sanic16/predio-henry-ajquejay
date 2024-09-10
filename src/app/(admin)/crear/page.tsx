import AdminCard from "@/components/admin/AdminCard";
import CreateCarForm from "@/components/admin/CreateCarForm";

export default function page() {
  return (
    <AdminCard title="Crear Carro">
      <CreateCarForm />
    </AdminCard>
  );
}
