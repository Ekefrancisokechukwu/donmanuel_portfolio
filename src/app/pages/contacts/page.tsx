import Form from "@/app/components/Form";
import ContactLinks from "./ContactLinks";
import { Toaster, toast } from "sonner";

const Contact = () => {
  return (
    <section className="xl:flex gap-12 items-start bg-[#ffffff19] lg:bg-transparent lg:p-0 p-4">
      <ContactLinks />
      <Form />
      <Toaster />
    </section>
  );
};
export default Contact;
