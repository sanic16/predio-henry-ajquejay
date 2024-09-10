"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface FormButtonProps {
  buttonText: string;
  loadingText: string;
}

const FormButton: React.FC<FormButtonProps> = ({ buttonText, loadingText }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? loadingText : buttonText}
    </Button>
  );
};

export default FormButton;
