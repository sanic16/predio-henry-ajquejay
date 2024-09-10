"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { CarSchema } from "@/schemas/car";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { createCarAction, updateCarAction } from "@/actions";
import { toast } from "@/hooks/use-toast";
import { Car } from "@prisma/client";
import { useRouter } from "next/navigation";
import useContextCars from "@/context/cars-context";

interface CreateCarFormProps {
  car?: Car;
}

const CreateCarForm: React.FC<CreateCarFormProps> = ({ car }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { setSearchedCars } = useContextCars();
  const form = useForm<z.infer<typeof CarSchema>>({
    resolver: zodResolver(CarSchema),
    defaultValues: {
      title: car ? car.title : "",
      modelYear: car ? car.modelYear : 2021,
      modelMake: car ? car.modelMake : "",
      price: car ? car.price : 0,
      condition: car ? car.condition : "USED",
      transmission: car ? car.transmission : "AUTO",
      mileage: car ? car.mileage : 40000,
      engineType: car ? car.engineType : "PETROL",
      engineCapacity: car ? car.engineCapacity : 0,
      // Remove defaults for optional fields:
      color: car && car.color ? car.color : undefined,
      doors: car && car.doors ? car.doors : undefined,
      warranty: car && car.warranty ? car.warranty : false,
      lastServiced: car && car.lastServiced ? car.lastServiced : undefined,
      location: car && car.location ? car.location : undefined,
      description: car && car.description ? car.description : undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof CarSchema>) => {
    !car &&
      startTransition(async () => {
        const response = await createCarAction(values);
        if (response && response.error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: response.error,
            duration: 6000,
          });
          return;
        }
        if (response && response.cars) {
          setSearchedCars(response.cars);
        }
        toast({
          variant: "default",
          title: "Éxito",
          description: "Auto creado",
          duration: 6000,
        });
        router.push("/actualizar");
      });

    car &&
      startTransition(async () => {
        const response = await updateCarAction(car.id, values);
        if (response && response.error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: response.error,
            duration: 6000,
          });
          return;
        }

        if (response && response.cars) {
          setSearchedCars(response.cars);
        }

        toast({
          variant: "default",
          title: "Éxito",
          description: "Auto actualizado",
          duration: 6000,
        });

        router.push("/actualizar");
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4">
        <div className="grid grid-cols-1 space-y-4 lg:space-x-0 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Titulo"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="modelYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Año del modelo*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(parseInt(e.target.value));
                      }}
                      placeholder="Año del modelo"
                      type="number"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="modelMake"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marca del modelo*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Marca del modelo"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(parseInt(e.target.value));
                      }}
                      placeholder="Precio"
                      type="number"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="condition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Condición*</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="NEW">Nuevo</SelectItem>
                      <SelectItem value="USED">Usado</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="transmission"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transmisión*</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AUTO">Automático</SelectItem>
                      <SelectItem value="MANUAL">Manual</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mileage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kilometraje*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(parseInt(e.target.value));
                      }}
                      placeholder="Kilometraje"
                      type="number"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="engineType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de motor*</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="PETROL">Gasolina</SelectItem>
                      <SelectItem value="DIESEL">Diesel</SelectItem>
                      <SelectItem value="ELECTRIC">Eléctrico</SelectItem>
                      <SelectItem value="HYBRID">Híbrido</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="engineCapacity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Capacidad del motor*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(Number(e.target.value));
                      }}
                      placeholder="Capacidad del motor"
                      type="number"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Color"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="doors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Puertas</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(parseInt(e.target.value));
                      }}
                      placeholder="Puertas"
                      type="number"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="warranty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Garantía</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value === "true");
                    }}
                    defaultValue={String(field.value)}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="true">Sí</SelectItem>
                      <SelectItem value="false">No</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastServiced"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Último servicio</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Último servicio"
                      type="date"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ubicación</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Ubicación"
                      type="text"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Descripción"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" disabled={isPending}>
          {car ? "Actualizar" : "Crear"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateCarForm;
