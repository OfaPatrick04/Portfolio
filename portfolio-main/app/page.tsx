"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  return (
      <div>
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
      </div>
  );
};

export default Home;
