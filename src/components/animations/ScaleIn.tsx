import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  viewport?: { once?: boolean; amount?: number };
  initialScale?: number;
}

const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  viewport = { once: true, amount: 0.3 },
  initialScale = 0.9,
}) => {
  // Define variants for animations
  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: initialScale
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Smooth ease
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
