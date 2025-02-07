import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function ContactCard({ icon, title, url }) {
  return (
    <div className="group max-w-[700px] w-full h-14 shadow-shadowDefault rounded-sm flex p-2 hover:shadow-shadowDefaultHover transition-all duration-300">
      <div className="h-full grid place-items-center group-hover:text-lightPurple transition-all duration-150">{icon}</div>
      <div className="w-full h-full px-4">
        <Link to={url} className="h-full flex items-center justify-start text-darkPurple font-poppins font-medium text-lg group-hover:text-lightPurple transition-all duration-150">{title}</Link>
      </div>
      <div className="h-full grid place-items-center">
            <CaretRight size={20} className="text-gray-500 group-hover:text-gray-600 transition-all duration-150"/>
      </div>
    </div>
  );
}
