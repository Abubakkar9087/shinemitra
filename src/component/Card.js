import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollEffect = () => {
  return (
    <div style={{ position: "relative", overflowX: "hidden", padding: "50px 0" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto", position: "sticky",top: "10px" }}>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </div>
  );
};

const SectionOne = () => (
  <div>
    <ZoomingSection color="#FF5733" text="Section 1">
      <p>Content for Section 1</p>
    </ZoomingSection>
  </div>
);

const SectionTwo = () => (
  <div>
    <ZoomingSection color="#33FF57" text="Section 2">
      <p>Content for Section 2</p>
    </ZoomingSection>
  </div>
);

const SectionThree = () => (
  <div>
    <ZoomingSection color="#3357FF" text="Section 3">
      <p>Content for Section 3</p>
    </ZoomingSection>
  </div>
);

const SectionFour = () => (
  <div>
    <ZoomingSection color="#F3FF33" text="Section 4">
      <p>Content for Section 4</p>
    </ZoomingSection>
  </div>
);

const ZoomingSection = ({ color, text, children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1, width: "100%" });
    } else {
      controls.start({ scale: 0.1, opacity: 0, width: "100%" });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ scale: 0.5, opacity: 0, width: "100%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#fff",
        padding: "20px",
        flexDirection: "column",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <h2>{text}</h2>
      </div>
      <div style={{ fontSize: "1.2rem", textAlign: "center" }}>{children}</div>
    </motion.div>
  );
};

export default ScrollEffect;
