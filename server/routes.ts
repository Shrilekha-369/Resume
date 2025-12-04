import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ success: true, message: "Message sent successfully", id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        console.error("Error creating contact message:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  app.get("/api/resume/download", async (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "Mudunuri_Shrilekha_Resume_1764867241323.pdf");
      
      if (!fs.existsSync(resumePath)) {
        res.status(404).json({ success: false, message: "Resume file not found" });
        return;
      }
      
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=Mudunuri_Shrilekha_Resume.pdf");
      
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } catch (error) {
      console.error("Error downloading resume:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  return httpServer;
}
