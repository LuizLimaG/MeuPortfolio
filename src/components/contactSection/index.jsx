import { At, GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { ContactCard } from "./card";

export function ContactSection() {

    const items = [
        {
            icon: <GithubLogo size={26} weight="fill"/>,
            title: 'Github',
            url: 'https://github.com/luizlimag'
        },
        {
            icon: <LinkedinLogo size={26} weight="fill"/>,
            title: 'Linkedin',
            url: 'https://linkedin.com/in/luiz-lima-g'
        },
        {
            icon: <At size={26} weight="fill"/>,
            title: 'Email',
            url: 'mailto: luizzfelipeliima@gmail.com'
        },
        {
            icon: <WhatsappLogo size={26} weight="fill"/>,
            title: 'Whatsapp',
            url: 'https://wa.me/+5531994903455'
        }
    ]

  return (
    <section className="w-full md:px-20 py-16 flex flex-col gap-12">
      <section className="px-5">
        <h1 className="text-darkPurple font-poppins font-semibold text-[30px] text-center md:text-left md:text-[40px]">
          Meus Contatos
        </h1>
      </section>
      <section className="w-4/6 mx-auto flex flex-wrap items-center justify-around gap-y-4">
        {items.map((item, index) => (
            <ContactCard 
                key={index}
                icon={item.icon}
                title={item.title}
                url={item.url}
            />
        ))}
      </section>
    </section>
  );
}
