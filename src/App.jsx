import { Suspense, lazy } from "react";
const Hero = lazy(() => import("./components/hero/Hero"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Portfolio = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));
const About = lazy(() => import("./components/about/About"));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

import useOnePageScroll from "./hooks/useOnePageScroll";

const App = () => {
  useOnePageScroll();

  return (
    <div className="relative w-full overflow-hidden">
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
