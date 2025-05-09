import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import SectionTitle from "@/components/ui/section-title";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // Contact form mutation
  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Сообщение отправлено!",
        description: data.message || "Мы свяжемся с вами в ближайшее время.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка отправки",
        description: error.message || "Пожалуйста, попробуйте снова позже.",
        variant: "destructive",
      });
    }
  });

  // Form submission handler
  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  // Contact information
  const contactInfo = [
    {
      icon: <MapPin className="text-primary text-xl" />,
      title: "Адрес",
      details: ["ул. Примерная, 123, Москва, Россия, 123456"]
    },
    {
      icon: <Phone className="text-primary text-xl" />,
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "+7 (495) 765-43-21"]
    },
    {
      icon: <Mail className="text-primary text-xl" />,
      title: "Email",
      details: ["info@company.com", "support@company.com"]
    },
    {
      icon: <Clock className="text-primary text-xl" />,
      title: "Режим работы",
      details: ["Пн-Пт: 9:00 - 18:00", "Сб-Вс: Выходной"]
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: <Facebook size={18} />, url: "#" },
    { icon: <Twitter size={18} />, url: "#" },
    { icon: <Linkedin size={18} />, url: "#" },
    { icon: <Instagram size={18} />, url: "#" },
    { icon: <Youtube size={18} />, url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Связаться с нами"
          description="Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col lg:flex-row gap-12"
        >
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя</FormLabel>
                          <FormControl>
                            <Input placeholder="Ваше имя" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Тема</FormLabel>
                        <FormControl>
                          <Input placeholder="Тема сообщения" {...field} />
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
                        <FormLabel>Сообщение</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Ваше сообщение" 
                            rows={5} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-white hover:bg-secondary transition duration-300"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Отправка...
                      </>
                    ) : "Отправить сообщение"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'tween', 0.3, 1)}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">Мы в социальных сетях</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center transition duration-300 hover:bg-primary hover:text-white text-primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
