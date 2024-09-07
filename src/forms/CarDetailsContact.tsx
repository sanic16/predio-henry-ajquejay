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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CarContactSchema } from "@/schemas";
import { Textarea } from "@/components/ui/textarea";
import FormError from "@/components/messages/FormError";
import FormSuccess from "@/components/messages/FormSuccess";
import { contactAction } from "@/actions/contact";
import { useTransition } from "react";

const CarDetailsContact = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CarContactSchema>>({
    resolver: zodResolver(CarContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onsubmit(data: z.infer<typeof CarContactSchema>) {
    startTransition(() => {
      contactAction(data)
        .then((res) => {
          if ("error" in res) {
            console.log(res.error);
          }
          if ("success" in res) {
            console.log(res.success);
          }
        })
        .catch((error) => {});
    });
  }

  return (
    <div className="bg-white p-4 rounded-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nombre"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="juan@email.com"
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de Teléfono</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="12345678"
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
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Estoy interesado en este vehículo..."
                      className="resize-none"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            Contactar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CarDetailsContact;
