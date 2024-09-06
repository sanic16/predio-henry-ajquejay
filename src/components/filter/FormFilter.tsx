"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CarFilterSearchSchema } from "@/schemas";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { Slider } from "../ui/slider";
import { search } from "@/actions";
import { useState, useTransition } from "react";
import { Car } from "@prisma/client";
import useContextCars from "@/context/cars-context";

interface FormFilterProps {
  transmissions: string[];
  models: string[];
  years: number[];
}

const FormFilter: React.FC<FormFilterProps> = ({
  models,
  transmissions,
  years,
}) => {
  const { setSearchedCars } = useContextCars();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CarFilterSearchSchema>>({
    resolver: zodResolver(CarFilterSearchSchema),
    defaultValues: {
      price: 300000,
    },
  });

  function onSubmit(data: z.infer<typeof CarFilterSearchSchema>) {
    startTransition(() => {
      search(data)
        .then((data) => {
          if (data.length > 0) {
            setSearchedCars(data);
            console.log(data);
          } else {
            toast({
              variant: "destructive",
              title: "Sin resultados",
              description:
                "No se encontraron resultados con los datos ingresados.",
              duration: 2500,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      // search(data)
      //   .then((cars) => {
      //     if ("error" in cars) {
      //       toast({ title: "Error", description: cars.error });
      //     } else {
      //       setCarsData(cars); // Uncomment and use this if needed
      //       console.log(cars);
      //     }
      //   })
      //   .catch((error) => {
      //     // Handle potential errors from the search function
      //     console.error(error);
      //     toast({
      //       title: "Error",
      //       description: "An unexpected error occurred.",
      //     });
      //   });
    });
    // toast({
    //   title: "Buscando con los siguientes datos",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    //   duration: 3000,
    // });
  }

  return (
    <div className="bg-white p-4 rounded-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Precio - {value}</FormLabel>
                  <FormControl>
                    <Slider
                      min={30000}
                      max={500000}
                      step={10000}
                      value={[value]}
                      onValueChange={(v) => onChange(v[0])}
                      disabled={isPending}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is a description for the price.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="make"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marca</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione una marca" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="all">Todas las marcas</SelectItem>
                      {models.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                    Seleccione la marca del auto que desea buscar.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Año</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione un año" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="all">Todos los años</SelectItem>
                      {years.map((year) => (
                        <SelectItem
                          key={year.toString()}
                          value={year.toString()}
                        >
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                    En qué año fue fabricado el auto que desea buscar.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="transmission"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transmisión</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Transmisión" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="all">
                        Todas las transmisiones
                      </SelectItem>
                      {transmissions.map((transmission) => (
                        <SelectItem key={transmission} value={transmission}>
                          {transmission === "AUTO"
                            ? "Automática"
                            : transmission === "MANUAL"
                            ? "Manual"
                            : "Otro"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                    Seleccione el tipo de transmisión del auto que desea buscar.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isPending}>
              Buscar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormFilter;
