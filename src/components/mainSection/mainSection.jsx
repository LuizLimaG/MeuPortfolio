import { useEffect, useState } from "react";
import ProjectCards from "../card/projectCards";
import { db } from "../../data/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { JobSection } from "../jobSection";
import { ContactSection } from "../contactSection";

export default function MainSection() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsCollectionRef = collection(db, "Projects");
        const data = await getDocs(projectsCollectionRef);
        const projectsData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Erro ao carregar projetos: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  return (
    <main className="">
      <JobSection>
        {loading ? (
          <div className="flex items-center justify-center w-full">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-r-notIsTheMostLightPurple border-justPurple" />
          </div>
        ) : error ? (
          <div className="text-red-400 text-center font-poppins font-semibold">
            Erro ao carregar projetos: {error}
          </div>
        ) : (
          projects.map((projeto, index) => (
            <ProjectCards
              key={index}
              tag={projeto.tag}
              title={projeto.title}
              description={projeto.description}
              image={projeto.image}
              url={projeto.url}
            />
          ))
        )}
      </JobSection>

      <ContactSection />
    </main>
  );
}
