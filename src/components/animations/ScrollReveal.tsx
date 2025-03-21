import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
  animation?: 'fade' | 'slide' | 'scale' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
  className?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
  once?: boolean;
}

const getAnimationVariants = (animation: string) => {
  switch (animation) {
    case 'fade':
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    case 'scale':
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };
    case 'slideUp':
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    case 'slideDown':
      return {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      };
    case 'slideLeft':
      return {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      };
    case 'slideRight':
      return {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      };
    default:
      return {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
  }
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  animation = 'fade',
  className = '',
  staggerChildren = false,
  staggerDelay = 0.1,
  once = true,
}) => {
  const variants = getAnimationVariants(animation);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };
  
  const itemVariants = {
    hidden: { ...variants.hidden },
    visible: {
      ...variants.visible,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };
  
  if (staggerChildren && React.Children.count(children) > 1) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: threshold }}
        variants={containerVariants}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={itemVariants}>{child}</motion.div>
        ))}
      </motion.div>
    );
  }
  
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={itemVariants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
