import { Globe } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function ProjectCards({ tag, title, description, image, url }) {
  return (
    <div className="w-[300px] md:w-[420px] rounded-sm bg-justWhite shadow-shadowDefault duration-100">
      <section className="w-full h-4/6 flex flex-col gap-5 justify-between p-5">
        <div>
          <div>
            <h1 className="font-poppins font-semibold text-[20px] md:text-[25px]">{title}</h1>
          </div>

          <div className="font-poppins font-normal text-[17px] md:text-[20px]">
            {description}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="bg-lightPurple w-fit py-1 px-3 rounded-md font-poppins font-medium text-justWhite text-[13px] md:text-[15px]">
            {tag}
          </div>
          <div className="w-full h-12 flex items-center">
            <Link
              to={url}
              target="_blank"
              className="group w-full flex h-10 items-center justify-center gap-2 rounded-lg bg-theMostLightPurple py-6 px-4 transition-all duration-300 ease-in-out hover:bg-lightPurple hover:pl-2 hover:text-white active:bg-neutral-700"
            >
              <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span className="font-poppins font-medium text-[16px]">
                Acessar Projeto
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
