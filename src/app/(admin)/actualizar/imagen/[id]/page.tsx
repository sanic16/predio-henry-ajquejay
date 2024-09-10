import AdminCard from "@/components/admin/AdminCard";
import BackButton from "@/components/buttons/BackButton";
import ImageUpload from "../../../crear/ImageUpload";
import { Suspense } from "react";
import ListImages from "@/components/admin/ListImages";

interface UploadImagePageProps {
  params: {
    id: string;
  };
}

export default function UploadImagePage({
  params: { id },
}: UploadImagePageProps) {
  return (
    <AdminCard title="Subir Imagenes">
      <BackButton />
      <ImageUpload id={id} />
      <Suspense fallback={<div>Cargando...</div>}>
        <ListImages id={id} />
      </Suspense>
    </AdminCard>
  );
}
