import TopSection from "../components/topSection/topSection"
import MainSection from "../components/mainSection/mainSection"
import Footer from "../components/footer/footer"

export default function Main(){
    return(
        <div className="flex flex-col min-h-screen p-[15px] bg-theMostLightPurple">
            <TopSection />
            <MainSection />
            <Footer />
        </div>
    )
}