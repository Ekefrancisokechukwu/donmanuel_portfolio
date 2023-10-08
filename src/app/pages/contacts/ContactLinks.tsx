import Image from "next/image";
import vector from "../../../../public/images/headvector.png";

const ContactLinks = () => {
  return (
    <div className="xl:mb-0 lg:mb-6">
      <h1 className="text-[36px] relative leading-[45px] sm:w-[294px] w-full">
        Let’s Discuss your project
        <span className="absolute -top-2 -left-3 ">
          <Image src={vector} alt="vector" />
        </span>
      </h1>
      <ul className="">
        <li className="mt-6">
          <a
            href="mailto:Ayamdonmanuel042@gmail.com"
            className="flex gap-5  sm:flex-nowrap  flex-wrap items-center"
          >
            <span className="md:w-[46px] md:h-[46px] w-[30.51px] h-[30.51px] border border-gray-100 rounded-full grid place-items-center">
              <svg
                className=" h-[19.898px] w-[19.898px]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M27.1875 8.4375V21.5625C27.1875 22.3084 26.8912 23.0238 26.3637 23.5512C25.8363 24.0787 25.1209 24.375 24.375 24.375H5.625C4.87908 24.375 4.16371 24.0787 3.63626 23.5512C3.10882 23.0238 2.8125 22.3084 2.8125 21.5625V8.4375M27.1875 8.4375C27.1875 7.69158 26.8912 6.97621 26.3637 6.44876C25.8363 5.92132 25.1209 5.625 24.375 5.625H5.625C4.87908 5.625 4.16371 5.92132 3.63626 6.44876C3.10882 6.97621 2.8125 7.69158 2.8125 8.4375M27.1875 8.4375V8.74125C27.1876 9.22143 27.0647 9.69363 26.8305 10.1129C26.5964 10.5321 26.2588 10.8844 25.85 11.1363L16.475 16.905C16.0315 17.1782 15.5209 17.3228 15 17.3228C14.4791 17.3228 13.9685 17.1782 13.525 16.905L4.15 11.1375C3.74115 10.8857 3.40359 10.5334 3.16946 10.1141C2.93534 9.69488 2.81245 9.22268 2.8125 8.7425V8.4375"
                  stroke="white"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <p className="text-[#E5E7EB80]">Ayamdonmanuel042@gmail.com</p>
          </a>
        </li>
        <li className="mt-6">
          <a className="flex gap-5 items-center">
            <span className="md:w-[46px] md:h-[46px] w-[30.51px] h-[30.51px] border border-gray-100 rounded-full grid place-items-center">
              <svg
                className="md:w-[] md:h-[] h-[19.898px] w-[19.898px]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M18.75 13.125C18.75 14.1196 18.3549 15.0734 17.6517 15.7767C16.9484 16.4799 15.9946 16.875 15 16.875C14.0054 16.875 13.0516 16.4799 12.3483 15.7767C11.6451 15.0734 11.25 14.1196 11.25 13.125C11.25 12.1304 11.6451 11.1766 12.3483 10.4733C13.0516 9.77009 14.0054 9.375 15 9.375C15.9946 9.375 16.9484 9.77009 17.6517 10.4733C18.3549 11.1766 18.75 12.1304 18.75 13.125V13.125Z"
                  stroke="white"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.375 13.125C24.375 22.0525 15 27.1875 15 27.1875C15 27.1875 5.625 22.0525 5.625 13.125C5.625 10.6386 6.61272 8.25403 8.37087 6.49587C10.129 4.73772 12.5136 3.75 15 3.75C17.4864 3.75 19.871 4.73772 21.6291 6.49587C23.3873 8.25403 24.375 10.6386 24.375 13.125V13.125Z"
                  stroke="white"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <p className="text-[#E5E7EB80]">Enugu, Nigeria</p>
          </a>
        </li>
        <li className="mt-6">
          <a className="flex gap-5 items-center">
            <span className="md:w-[46px] md:h-[46px] w-[30.51px] h-[30.51px] border border-gray-100 rounded-full grid place-items-center">
              <svg
                className="md:w-[] md:h-[] h-[19.898px] w-[19.898px]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M2.8125 8.4375C2.8125 18.7925 11.2075 27.1875 21.5625 27.1875H24.375C25.1209 27.1875 25.8363 26.8912 26.3637 26.3637C26.8912 25.8363 27.1875 25.1209 27.1875 24.375V22.66C27.1875 22.015 26.7488 21.4525 26.1225 21.2963L20.5938 19.9137C20.0438 19.7762 19.4663 19.9825 19.1275 20.435L17.915 22.0513C17.5625 22.5213 16.9537 22.7287 16.4025 22.5262C14.3561 21.7739 12.4977 20.5857 10.956 19.044C9.41426 17.5023 8.22609 15.6439 7.47375 13.5975C7.27125 13.0463 7.47875 12.4375 7.94875 12.085L9.565 10.8725C10.0187 10.5337 10.2238 9.955 10.0863 9.40625L8.70375 3.8775C8.62767 3.57337 8.45215 3.30338 8.20507 3.11042C7.95798 2.91746 7.6535 2.8126 7.34 2.8125H5.625C4.87908 2.8125 4.16371 3.10882 3.63626 3.63626C3.10882 4.16371 2.8125 4.87908 2.8125 5.625V8.4375Z"
                  stroke="white"
                  strokeWidth="1.96429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <p className="text-[#E5E7EB80]">+2348160413673</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default ContactLinks;
