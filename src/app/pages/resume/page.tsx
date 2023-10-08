import Link from "next/link";

const page = () => {
  return (
    <div>
      <object
        data="/images/CV.pdf"
        type="application/pdf"
        width="900"
        height="600"
        className="xl:w-[65rem] xl:h-[1801px] h-[40rem] lg:w-[50rem] sm:w-[40rem] w-full"
      >
        <p>
          PDF viewer not available. You can{" "}
          <Link download={true} className="border p-1" href="/images/CV.pdf">
            download the PDF
          </Link>{" "}
          instead.
        </p>
      </object>
    </div>
  );
};
export default page;
