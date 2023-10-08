"use server";

import { Resend } from "resend";
import React from "react";
import EmailTemplate from "../components/email/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(process.env.NEXT_PROJECTS_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const number = formData?.get("phoneNumber");
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  try {
    const response = await resend.emails.send({
      from: "Portfolio form <onboarding@resend.dev>",
      to: "Ayamdonmanuel042@gmail.com",
      subject: "message my from portfolio form ",
      reply_to: senderEmail as string,
      react: React.createElement(EmailTemplate, {
        message: message as string,
        senderEmail: senderEmail as string,
        name: name as string,
        number: number as string,
      }),
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
