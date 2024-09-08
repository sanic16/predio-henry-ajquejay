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
import { useState, useTransition } from "react";

interface CarDetailsContactProps {
  carId?: string;
  title: string;
  messagePlaceholder: string;
}

const CarDetailsContact: React.FC<CarDetailsContactProps> = ({
  title,
  messagePlaceholder,
}) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

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
    setError("");
    setSuccess("");
    startTransition(() => {
      contactAction(data)
        .then((res) => {
          if ("error" in res) {
            setError(res.error);
          }
          if ("success" in res) {
            setSuccess(res.success);
          }
        })
        .catch((error) => {});
    });
  }

  return (
    <div className="bg-white p-2 md:p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Nombre</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Juan Pérez"
                      type="text"
                      disabled={isPending}
                      className="jf"
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
                  <FormLabel className="text-base">
                    Correo Electrónico
                  </FormLabel>
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
                  <FormLabel className="text-base">
                    Número de Teléfono
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="55202455"
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
                  <FormLabel className="text-base">Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={messagePlaceholder}
                      className="resize-none h-32"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CarDetailsContact;
