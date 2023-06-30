import React from 'react';
import Hero from '../components/home/Hero.jsx';

export default function Welcome() {
  return (
    <section className={styles.mainContainer}>
      <Hero />
    </section>
  );
}

const styles = {
  mainContainer: 'min-h-screen w-full',
};
