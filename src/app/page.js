import Image from "next/image";
import Banner from "@/components/Banner/Banner.jsx";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
export default function Home() {
  return (
    <main>
      <Banner />
      <AboutCompany />
    </main>
  );
}
