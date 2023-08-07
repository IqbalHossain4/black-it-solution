import Image from "next/image";
import Banner from "@/components/Banner/Banner.jsx";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import MeetUs from "@/components/MeetUs/MeetUs";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Technology from "@/components/Technology/Technology";
import DedicatedTeam from "@/components/DedicatedTeam/DedicatedTeam";
export default function Home() {
  return (
    <main>
      <Banner />
      <AboutCompany />
      <WhoWeAre />
      <MeetUs />
      <CaseStudies />
      <Technology />
      <DedicatedTeam />
    </main>
  );
}
