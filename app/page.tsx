import { Nav } from "@/app/components/nav";
import { Hero } from "@/app/components/hero";
import { Experience } from "@/app/components/experience";
import { Projects } from "@/app/components/projects";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 max-w-4xl mx-auto">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
