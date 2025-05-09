import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      res.status(201).json({ success: true, message: "Сообщение успешно отправлено", data: message });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Ошибка валидации формы", 
          errors: validationError.details 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Произошла ошибка при отправке сообщения" 
        });
      }
    }
  });

  // Get all contact messages (admin route)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json({ success: true, data: messages });
    } catch (error) {
      res.status(500).json({ success: false, message: "Ошибка при получении сообщений" });
    }
  });

  // Get a specific contact message by ID (admin route)
  app.get("/api/contact/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "Неверный формат ID" });
      }
      
      const message = await storage.getContactMessage(id);
      if (!message) {
        return res.status(404).json({ success: false, message: "Сообщение не найдено" });
      }
      
      res.status(200).json({ success: true, data: message });
    } catch (error) {
      res.status(500).json({ success: false, message: "Ошибка при получении сообщения" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
