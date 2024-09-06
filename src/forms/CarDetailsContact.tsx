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

const CarDetailsContact = () => {
  const form = useForm<z.infer<typeof CarContactSchema>>({
    resolver: zodResolver(CarContactSchema),
  });

  function onsubmit(data: z.infer<typeof CarContactSchema>) {}

  return <div>CarDetailsContact</div>;
};

export default CarDetailsContact;
