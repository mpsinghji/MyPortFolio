import Tilt from "react-parallax-tilt";

export default function EffectCard({ children, className = "" }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="top"
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      transitionSpeed={400}
      className={`relative bg-white border border-gray-700 rounded-lg shadow-2xl transform transition-all duration-300 hover:shadow-3xl ${className}`}
    >
      <div className="relative z-10 flex flex-col items-center p-6">
        {children}
      </div>
    </Tilt>
  );
}