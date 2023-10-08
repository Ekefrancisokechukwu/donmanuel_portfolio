"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border w-[8rem] grid grid-cols-2 place-items-center form-btn group"
      aria-disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        "Submit"
      )}
      <span className="group-hover:translate-x-1 transition-transform ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <rect y="0.5" width="18" height="17" fill="#D9D9D9" />
          <path
            d="M4 8C3.72386 8 3.5 8.22386 3.5 8.5C3.5 8.77614 3.72386 9 4 9V8ZM12.3536 8.85355C12.5488 8.65829 12.5488 8.34171 12.3536 8.14645L9.17157 4.96447C8.97631 4.7692 8.65973 4.7692 8.46447 4.96447C8.2692 5.15973 8.2692 5.47631 8.46447 5.67157L11.2929 8.5L8.46447 11.3284C8.2692 11.5237 8.2692 11.8403 8.46447 12.0355C8.65973 12.2308 8.97631 12.2308 9.17157 12.0355L12.3536 8.85355ZM4 9L12 9V8L4 8V9Z"
            fill="black"
          />
        </svg>
      </span>
    </button>
  );
};
export default SubmitBtn;
