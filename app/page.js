import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OpenSourceSection from "@/components/OpenSourceSection";
import ProcessSection from "@/components/ProcessSection";
import ProductSection from "@/components/ProductSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";



export default async function Home() {
  // const response = await fetch('http://localhost:8080/jsonapi/node/landing_page_section')
  // const data = await response.json()

 
  // const sections = data.data.reduce((acc, section) => {
   
  //   const simpleKey = section.attributes.title
  //     .toLowerCase()
  //     .split(' ')[0]; 
    
  //   acc[simpleKey] = {
  //     heading: section.attributes.field_section_heading,
  //     body: section.attributes.field_section_body?.value,
  //     category: section.attributes.field_section_category
  //   };
  //   return acc;
  // }, {});
  
  // console.log('Sections mapping:', sections);
  
  return (
    <>
      <Header />
      <Hero />
      <ProductSection />
      <TeamSection />
      <ProcessSection />
      <OpenSourceSection />
      <StatsSection />
      <ContactSection />
      <ClientsSection />
      <Footer />
    </>
  );
}