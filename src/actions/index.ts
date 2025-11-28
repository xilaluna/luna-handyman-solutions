import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    handler: async (formData) => {
      const submission = Object.fromEntries(formData.entries());
      console.log("[contact] form submission received", submission);

      if (!import.meta.env.RESEND_API_KEY) {
        console.error("[contact] missing RESEND_API_KEY");
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Email service misconfigured.",
        });
      }

      try {
        const { data, error } = await resend.emails.send({
          from: "Contact Form <contact@mail.lunasolutions.pro>",
          to: ["delivered@resend.dev"],
          subject: "Hello world",
          html: "<strong>It works!</strong>",
        });

        if (error) {
          console.error("[contact] resend error", error);
          throw new ActionError({
            code: "BAD_REQUEST",
            message: error.message,
          });
        }

        console.log("[contact] resend accepted", data);
        return data;
      } catch (err) {
        console.error("[contact] unexpected send error", err);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send message.",
        });
      }
    },
  }),
};
