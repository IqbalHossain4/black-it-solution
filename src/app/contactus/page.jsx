import ContactUs from "@/components/page/ContactUs/ContactUs";
import Link from "next/link";
export const metadata = {
  title: "Contact Us || IT Solutions",
  description: "Black IT Solution",
};
const page = () => {
  return (
    <div className="mb-24">
      <div className="bg-[#141d38] py-8   text-white">
        <h1 className="font-bold text-center md:text-3xl text-lg mt-4">
          ABOUT US
        </h1>
        <p className="text-center mt-4">
          <Link href="/">Home </Link> : <Link href="contactus">Contact Us</Link>
        </p>
      </div>
      <div className="black__container mt-24">
        <ContactUs />
      </div>
    </div>
  );
};

export default page;
