"use client";

import { FormEvent } from "react";
import { sendEmail } from "../action/sendEmail";
import SubmitBtn from "./SubmitBtn";
import { toast } from "sonner";

const Form = () => {
  return (
    <form
      action={async (formData) => {
        const response = await sendEmail(formData);
        const name = formData.get("name");
        if (response) {
          toast(` ${name} your message was sent`);
        } else {
          toast.error(` There was an error`);
        }
      }}
      className="sm:mt-0 mt-7 xl:w-[45rem] md:w-[40rem] sm:w-full   lg:bg-[#ffffff19] lg:px-12 lg:py-10"
    >
      <div className="form-group">
        <label htmlFor="name" className="capitalize form-label">
          your name*
        </label>
        <input
          type="name"
          required
          id="name"
          name="name"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="capitalize form-label">
          your email*
        </label>
        <input
          type="email"
          name="email"
          required
          id="email"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="tel" className="capitalize form-label">
          your number*
        </label>
        <input type="tel" id="tel" name="phoneNumber" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="projectInfo" className="capitalize form-label">
          Tell us something about your project*
        </label>
        <input
          type="text"
          required
          name="message"
          id="projectInfo"
          className="form-input"
        />
      </div>

      <div className="form-btnBox">
        <SubmitBtn />
      </div>
    </form>
  );
};
export default Form;
