import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { Experiences } from './components/Experiences';
import { FeaturedExperience } from './components/FeaturedExperience';
import { TripInspiration } from './components/TripInspiration';
import { KenyaMap } from './components/KenyaMap';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { TravelGuide } from './components/TravelGuide';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen w-full bg-sand-50 font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Experiences />
        <FeaturedExperience />
        <TripInspiration />
        <KenyaMap />
        <Stats />
        <Testimonials />
        <TravelGuide />
        <Newsletter />
      </main>
      <Footer />
    </div>);

}