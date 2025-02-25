import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./components/hero/Hero"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Portfolio = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <div className="container mx-auto px-4 ">
      <Suspense fallback={<LoadingSpinner />}>
        <LazyLoad height="100vh" offset={-100}>
          <section id="home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyLoad height="100vh" offset={-100}>
          <section id="skills">
            <Skills />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyLoad height="100vh" offset={-100}>
          <Portfolio />
        </LazyLoad>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyLoad height="100vh" offset={-100}>
          <section id="contact">
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;