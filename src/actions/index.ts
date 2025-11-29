import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().min(7),
      location: z.string().min(2),
      message: z.string().min(5),
      projectNotes: z.string().optional(),
    }),
    handler: async (formData) => {
      if (formData.projectNotes && formData.projectNotes.trim().length > 0) {
        return {
          id: "honeypot-blocked",
        } satisfies Awaited<ReturnType<typeof resend.emails.send>>["data"];
      }

      const { data, error } = await resend.emails.send({
        from: "Luna Handyman Solutions <contact@mail.lunasolutions.pro>",
        to: ["delivered@resend.dev"],
        subject: `New Contact Request from: ${formData.name}`,
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
    },
  }),
};
