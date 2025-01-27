import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProjectCards from "../card/projectCards";

const firebaseApp = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

export default function MainSection() {
  const app = initializeApp(firebaseApp);

  const [projects, setProjects] = useState([]);

  const db = getFirestore(app)
  const projectsCollectionRef = collection(db, "Projects")

  useEffect(() => {
      const getProjects = async () => {
        const data = await getDocs(projectsCollectionRef)
        setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
      getProjects()
  });

  return (
    <main className="w-full md:px-20 py-16 flex flex-col gap-12">
      <section className="px-5">
        <h1 className="text-darkPurple font-poppins font-semibold text-[30px] text-center md:text-left md:text-[40px]">
          Meus Trabalhos
        </h1>
      </section>

      <section className="flex flex-wrap items-center justify-around gap-y-4">
        {projects.map((projeto, index) => (
          <ProjectCards
            key={index}
            tag={projeto.tag}
            title={projeto.title}
            description={projeto.description}
            image={projeto.image}
          />
        ))}
      </section>
    </main>
  );
}
