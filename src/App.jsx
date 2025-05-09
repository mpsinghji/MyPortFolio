import { Suspense } from "react";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <div className="container mx-auto px-4 ">
      <Suspense fallback={<LoadingSpinner />}>
        <section id="home">
          <Hero />
        </section>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <section id="about">
          <About />
        </section>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <section id="skills">
          <Skills />
        </section>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default App;
