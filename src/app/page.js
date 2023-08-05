import Image from "next/image";
import Banner from "@/components/Banner/Banner.jsx";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
export default function Home() {
  return (
    <main>
      <Banner />
      <AboutCompany />
      <WhoWeAre />
    </main>
  );
}
