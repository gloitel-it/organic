import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-28d86685/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-28d86685/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json(
        { error: "Missing required fields: name, email, and message are required" },
        400
      );
    }

    // Generate unique ID for the contact submission
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store contact data in KV store
    const contactData = {
      id: contactId,
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
      submittedAt: new Date().toISOString(),
      type: 'contact'
    };

    await kv.set(contactId, contactData);

    console.log(`Contact form submission saved: ${contactId}`);
    
    return c.json({ 
      success: true, 
      message: "Contact form submitted successfully",
      contactId 
    });
  } catch (error) {
    console.error(`Error saving contact form submission: ${error}`);
    return c.json(
      { error: "Failed to submit contact form", details: error.message },
      500
    );
  }
});

// Booking form submission endpoint
app.post("/make-server-28d86685/bookings", async (c) => {
  try {
    const body = await c.req.json();
    const { 
      name, 
      email, 
      phone, 
      address, 
      plotSize, 
      duration, 
      crops, 
      additionalRequirements 
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !plotSize || !duration) {
      return c.json(
        { 
          error: "Missing required fields: name, email, phone, plotSize, and duration are required" 
        },
        400
      );
    }

    // Generate unique ID for the booking
    const bookingId = `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store booking data in KV store
    const bookingData = {
      id: bookingId,
      name,
      email,
      phone,
      address: address || null,
      plotSize,
      duration,
      crops: crops || [],
      additionalRequirements: additionalRequirements || null,
      submittedAt: new Date().toISOString(),
      status: 'pending',
      type: 'booking'
    };

    await kv.set(bookingId, bookingData);

    console.log(`Booking submission saved: ${bookingId}`);
    
    return c.json({ 
      success: true, 
      message: "Booking submitted successfully",
      bookingId 
    });
  } catch (error) {
    console.error(`Error saving booking submission: ${error}`);
    return c.json(
      { error: "Failed to submit booking", details: error.message },
      500
    );
  }
});

// Get all contact submissions
app.get("/make-server-28d86685/contacts", async (c) => {
  try {
    const contacts = await kv.getByPrefix("contact_");
    return c.json({ success: true, contacts });
  } catch (error) {
    console.error(`Error retrieving contacts: ${error}`);
    return c.json(
      { error: "Failed to retrieve contacts", details: error.message },
      500
    );
  }
});

// Get all bookings
app.get("/make-server-28d86685/bookings", async (c) => {
  try {
    const bookings = await kv.getByPrefix("booking_");
    return c.json({ success: true, bookings });
  } catch (error) {
    console.error(`Error retrieving bookings: ${error}`);
    return c.json(
      { error: "Failed to retrieve bookings", details: error.message },
      500
    );
  }
});

Deno.serve(app.fetch);