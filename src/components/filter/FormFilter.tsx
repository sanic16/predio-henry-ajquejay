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
import { useTransition } from "react";

const FormFilter = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CarFilterSearchSchema>>({
    resolver: zodResolver(CarFilterSearchSchema),
    defaultValues: {
      price: 0,
    },
  });

  function onSubmit(data: z.infer<typeof CarFilterSearchSchema>) {
    startTransition(async () => {
      const dataReturned = await search(data);
      console.log(dataReturned);
    });
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="bg-white p-4 rounded-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
                      <SelectItem value="mazda">Mazda</SelectItem>
                      <SelectItem value="ford">Ford</SelectItem>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="chevrolet">Chevrolet</SelectItem>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="nissan">Nissan</SelectItem>
                      <SelectItem value="hyundai">Hyundai</SelectItem>
                      <SelectItem value="kia">Kia</SelectItem>
                      <SelectItem value="volkswagen">Volkswagen</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Seleccione la marca del auto que desea buscar.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transmission"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Modelo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione una transmisión" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="automatic">Automático</SelectItem>
                      <SelectItem value="manual">Manual</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Seleccione el tipo de transmisión del auto que desea buscar.
                  </FormDescription>
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
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                      <SelectItem value="2019">2019</SelectItem>
                      <SelectItem value="2018">2018</SelectItem>
                      <SelectItem value="2017">2017</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    En qué año fue fabricado el auto que desea buscar.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Price - {value}</FormLabel>
                  <FormControl>
                    <Slider
                      min={30000}
                      max={500000}
                      step={10000}
                      defaultValue={[value]}
                      value={[value]}
                      onValueChange={(v) => onChange(v[0])}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormDescription>
                    This is a description for the price.
                  </FormDescription>
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
