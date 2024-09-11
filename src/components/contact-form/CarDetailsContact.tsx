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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CarContactSchema } from "@/schemas";
import { Textarea } from "@/components/ui/textarea";
import { useState, useTransition, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { contactAction } from "@/actions";

interface CarDetailsContactProps {
  carId?: string;
  title: string;
  messagePlaceholder: string;
}

const CarDetailsContact: React.FC<CarDetailsContactProps> = ({
  title,
  messagePlaceholder,
}) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
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
      contactAction(data, recaptchaToken as string)
        .then((res) => {
          if (res.success) {
            toast({
              title: "Mensaje envíado correctamente",
              description:
                "Gracias por contactarnos, te responderemos lo más pronto posible",
              duration: 10000,
            });
            form.reset();
          } else if (res.error) {
            toast({
              variant: "destructive",
              title: "Error al enviar mensaje",
              description: res.error,
              duration: 10000,
            });
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
          <Button type="submit" className="w-full" disabled={isPending}>
            Enviar
          </Button>
          <ReCAPTCHA
            onChange={(token) => setRecaptchaToken(token)}
            sitekey={
              process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as string
            }
          />
        </form>
      </Form>
    </div>
  );
};

export default CarDetailsContact;
