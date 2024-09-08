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
import { useTransition } from "react";
import useContextCars from "@/context/cars-context";

interface FormFilterProps {
  transmissions: string[];
  models: string[];
  years: number[];
  minPrice: number;
  maxPrice: number;
}

const FormFilter: React.FC<FormFilterProps> = ({
  models,
  transmissions,
  years,
  minPrice,
  maxPrice,
}) => {
  const { setSearchedCars } = useContextCars();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CarFilterSearchSchema>>({
    resolver: zodResolver(CarFilterSearchSchema),
    defaultValues: {
      price: maxPrice,
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
    });
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
                      min={minPrice}
                      max={maxPrice}
                      step={10000}
                      value={[value]}
                      onValueChange={(v) => onChange(v[0])}
                      disabled={isPending}
                    />
                  </FormControl>
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
