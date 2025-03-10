import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() { // bg-slate-900    |    cyan-900      |         text-cyan-300    | Border: border-4 border-cyan-300     |      Icons from below are from: https://tw-elements.com/docs/standard/components/social-buttons/
  return (
    <div className="bg-gradient-to-b from-slate-900 to-cyan-900 pb-24">
      <div className="size-14"></div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

        <About />
        <Experience />
        <Projects />


      </div>
    </div>
  );
}
