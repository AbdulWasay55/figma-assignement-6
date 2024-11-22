import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Logo from "@/components/Logos/Logo";
import Courses from "@/components/Courses/Courses";
import AchivementSection from "@/components/Achivement/Achivement";
import CoursesMain from "@/components/CoursesMain/CoursesMain";
import Team from "@/components/Team/Team";
import Customer from "@/components/Customer/Customer";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
       <div>
        <Header />
        <Hero></Hero>
        <Logo></Logo>
        <Courses></Courses>
        <AchivementSection></AchivementSection>
        <CoursesMain></CoursesMain>
        <Team></Team>
        <Customer></Customer>
        <Footer></Footer>

       </div>
  );
}
