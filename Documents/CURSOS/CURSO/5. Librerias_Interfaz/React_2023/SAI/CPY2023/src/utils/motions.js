export function fadeIn(duration, delay, direction) {
  return {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
    hidden: {
      opacity: 0,
      scale: 1,
      x: direction === 'left' ? 50 : direction === 'right' ? 50 : 0,
      y: direction === 'top' ? 50 : direction === 'bottom' ? 0 : 0,
    },
  };
}
