import Section1Header from "@/components/Section1Header";
import Section2Main from "@/components/Section2Main";
import Section3SubFooter from "@/components/Section3SubFooter";
import Section4Footer from "@/components/Section4Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Section1Header />
      <Section2Main />
      <Section3SubFooter />
      <Section4Footer />
    </main>
  );
}
