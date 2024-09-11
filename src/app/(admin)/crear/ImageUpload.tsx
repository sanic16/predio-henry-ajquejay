"use client";

import { uploadImageAction } from "@/actions";
import FormButton from "@/components/admin/FormButton";
import { useFormState } from "react-dom";

interface ImageUploadProps {
  id: string;
}
const ImageUpload: React.FC<ImageUploadProps> = ({ id }) => {
  const [state, action] = useFormState(uploadImageAction.bind(null, id), {
    errors: {},
  });

  return (
    <div className="my-4">
      <h2>Subir imagen</h2>
      <form action={action}>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="file"
            name="image"
            accept="image/png, image/jpeg, image/jpg"
            className="max-w-full flex-shrink text-sm"
          />
        </div>
        <p className="mb-4 text-red-500">
          {state.errors._form && state.errors._form.join(", ")}
        </p>
        <FormButton buttonText="Subir" loadingText="Subiendo..." />
      </form>
    </div>
  );
};

export default ImageUpload;
