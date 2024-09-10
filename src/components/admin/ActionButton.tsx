"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import useContextCars from "@/context/cars-context";
import useContextSpinner from "@/context/context-spinner";
import { toast } from "@/hooks/use-toast";
import { Car } from "@prisma/client";
import { useTransition } from "react";

interface ActionButtonProps {
  id: string;
  buttonText: string;
  action: "delete" | "publish";
  publishState?: boolean;
  buttonVariant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "green"
    | "warning";
  deleteCarAction?: (id: string) => Promise<
    | {
        error: string;
        cars?: undefined;
      }
    | {
        cars: Car[];
        error?: undefined;
      }
  >;
  publishCarAction?: (id: string) => Promise<
    | {
        error: string;
        cars?: undefined;
      }
    | {
        cars: Car[];
        error?: undefined;
      }
  >;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  id,
  action,
  buttonText,
  buttonVariant,
  deleteCarAction,
  publishCarAction,
  publishState,
}) => {
  const [isPending, startTransition] = useTransition();
  const { setSearchedCars } = useContextCars();
  const { isPending: isLoading, togglePending } = useContextSpinner();
  const handleOnClick = () => {
    togglePending(true);
    startTransition(async () => {
      let cars;
      cars =
        action === "delete" && deleteCarAction
          ? await deleteCarAction(id)
          : cars;
      cars =
        action === "publish" && publishCarAction
          ? await publishCarAction(id)
          : cars;

      if (cars && cars.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: cars.error,
          duration: 6000,
        });

        togglePending(false);
        return;
      }

      if (action === "delete") {
        toast({
          title: "Carro eliminado",
          description: "El carro ha sido eliminado exitosamente",
          duration: 5000,
        });
      } else if (action === "publish" && publishState) {
        toast({
          title: `Carro ${publishState ? "despublicado" : "publicado"}`,
          description: `El carro ha sido ${
            publishState ? "despublicado" : "publicado"
          } exitosamente`,
          duration: 5000,
        });
      } else {
        toast({
          title: `Carro ${publishState ? "despublicado" : "publicado"}`,
          description: `El carro ha sido ${
            publishState ? "despublicado" : "publicado"
          } exitosamente`,
          duration: 5000,
        });
      }
      setSearchedCars(cars?.cars || []);

      togglePending(false);
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={buttonVariant} disabled={isLoading}>
          {isPending ? "Cargando..." : buttonText}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {action === "delete"
              ? "Estás seguro que deseas eliminar este carro?"
              : publishState === true && action === "publish"
              ? "Estás seguro que deseas despublicar este carro?"
              : "Estás seguro que deseas publicar este carro?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {action === "delete"
              ? "Esta acción no se puede deshacer"
              : publishState === true && action === "publish"
              ? "Al despublicar el carro no aparecerá en la lista de carros publicados"
              : "Al publicar el carro aparecerá en la lista de carros publicados"}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleOnClick}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ActionButton;
