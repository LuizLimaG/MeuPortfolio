import {
  GithubLogo,
  LinkedinLogo,
  At,
  WhatsappLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="w-full h-20 bg-darkPurple shadow-neonPurple flex flex-col-reverse justify-center items-center gap-2 sm:flex-row sm:px-20 sm:gap-0">
      <aside className="w-full flex items-center justify-center sm:justify-start">
        <h1 className="text-justWhite text-[15px] font-poppins">
          Feito por Luiz Lima | © 2025
        </h1>
      </aside>

      <aside className="w-full flex gap-2 items-center justify-center sm:justify-end">
        <a href="https://github.com/LuizLimaG/" target="_blank">
          <GithubLogo
            size={32}
            className="text-justWhite hover:text-lightPurple transition-all duration-200"
            weight="fill"
          />
        </a>

        <div className="w-1 h-7 bg-lightPurple rounded-lg" />

        <a href="https://linkedin.com/in/luiz-lima-g" target="_blank">
          <LinkedinLogo
            size={32}
            className="text-justWhite hover:text-lightPurple transition-all duration-200"
            weight="fill"
          />
        </a>

        <div className="w-1 h-7 bg-lightPurple rounded-lg" />

        <a href="mailto: luizzfelipeliima@gmail.com" target="_blank">
          <At
            size={32}
            className="text-justWhite hover:text-lightPurple transition-all duration-200"
            weight="fill"
          />
        </a>

        <div className="w-1 h-7 bg-lightPurple rounded-lg" />

        <a href="https://wa.me/+5531994903455" target="_blank">
          <WhatsappLogo
            size={32}
            className="text-justWhite hover:text-lightPurple transition-all duration-200"
            weight="fill"
          />
        </a>
      </aside>
    </footer>
  );
}
