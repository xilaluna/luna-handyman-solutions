import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().trim().min(2).max(100),
      email: z.string().trim().email().max(254),
      phone: z
        .string()
        .trim()
        .min(7)
        .max(20)
        .regex(/^[+\d()\s.-]+$/, "Enter a valid phone number"),
      location: z.string().trim().min(2).max(120),
      message: z.string().trim().min(5).max(2000),
      projectNotes: z.string().optional(),
    }),
    handler: async (formData) => {
      if (formData.projectNotes && formData.projectNotes.trim().length > 0) {
        return {
          id: "honeypot-blocked",
        } satisfies Awaited<ReturnType<typeof resend.emails.send>>["data"];
      }

      try {
        const { data, error } = await resend.emails.send({
          from: "Luna Handyman Solutions <contact@mail.lunasolutions.pro>",
          to: ["jorge.luna@lunasolutions.pro"],
          subject: `New Contact Request from: ${formData.name}`,
          replyTo: formData.email,
          html: `<h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Location:</strong> ${formData.location}</p>
          <p><strong>Message:</strong>${formData.message}</p>`,
        });

        if (error) {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: error.message,
          });
        }

        return data;
      } catch (err) {
        // Bubble up known ActionErrors; wrap all else to avoid leaking details.
        if (err instanceof ActionError) {
          throw err;
        }

        console.error("Failed to send contact email", err);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "Unable to send your message right now. Please try again shortly.",
        });
      }
    },
  }),
};
