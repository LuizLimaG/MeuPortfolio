export default function TopSection() {
  return (
    <section className="w-full bg-darkPurple rounded-md flex flex-col-reverse md:flex-row pt-10 md:pt-0 md:pr-10 shadow-neonPurple">
      <aside className="w-full flex items-center p-10 sm:gap-0 sm:p-12 md:p-20">
        <div className="flex flex-col gap-2">
          <div className="w-full md:w-4/6">
            <h1 className="font-poppins font-normal text-justWhite text-[23px] text-center sm:text-left sm:text-[30px] md:text-[50px]">
              Olá, seja bem-vindo!
            </h1>
          </div>
          <div>
            <h3 className="font-poppins font-medium text-justWhite text-[15px] text-center sm:text-left md:text-[20px]">
              Me chamo Luiz Felipe Lima Guimarães, tenho  19 anos e sou um desenvolvedor apaixonado por tecnologia.
              Proatividade e dedicação são meus fortes quando se trata de desenvolvimento mobile em Swift (iOS) e Kotlin (Android).
              Tenho experiência prática em desenvolvimento web com ReactJS, HTML, CSS e TailwindCSS.
              Procuro sempre aprimorar e me aprofundar em novas tecnologias e contribuir em projetos inovadores!
              {/* Meu nome é Luiz Felipe. Sou desenvolvedor apaixonado por criar
              interfaces intuitivas e experiências de usuário excepcionais.
              Experiência prática em desenvolvimento web com React.js, HTML, CSS
              e TailwindCSS. Familiaridade com desenvolvimento mobile em Kotlin
              (Android) e Swift (iOS). Proativo e dedicado, com forte interesse
              em aprender novas tecnologias e contribuir para projetos
              inovadores. */}
            </h3>
          </div>
        </div>
      </aside>
      <aside className=" w-full md:w-2/6 flex items-center justify-center">
        <img
          src="../../../public/images/topSectionImage.png"
          alt="Imagem"
          className="rounded-lg w-[200px] md:w-[300px] "
        />
      </aside>
    </section>
  );
}
