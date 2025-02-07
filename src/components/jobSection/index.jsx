export function JobSection({children}) {
  return (
    <section className="w-full md:px-20 py-16 flex flex-col gap-12">
      <section className="px-5">
        <h1 className="text-darkPurple font-poppins font-semibold text-[30px] text-center md:text-left md:text-[40px]">
          Meus Trabalhos
        </h1>
      </section>
      <section className="flex flex-wrap items-center justify-around gap-y-4">
        {children}
      </section>
    </section>
  );
}
