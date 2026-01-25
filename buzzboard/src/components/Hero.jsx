import "./Hero.css";

const Hero = ({ title, subtitle, cta }) => {
  return (
    <section className="hero">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button>{cta}</button>
    </section>
  );
};

export default Hero;
