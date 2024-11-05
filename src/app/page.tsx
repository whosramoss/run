"use client"
import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import useTimer from "@hooks/useTimer";
import useTextEffect from "@hooks/useTextEffect";
import useScrollHover from "@hooks/useScrollHover";
import { SCROLL_CONTENT_ID } from "@shared/utils";
import NavBar from "@components/NavBar";
import Hero from "@components/Hero";
import Motivation from "@components/Motivation";
import Health from "@components/Health";
import Footer from "@components/Footer";

export default function HomePage() {

  useEffect(() => {
    useTextEffect();
    if (isMobile) return;
    useScrollHover()
    useTimer();
  });

  return (
    <div className="scroll-wrapper">
      <NavBar />
      <div id={SCROLL_CONTENT_ID}>
        <Hero
          title={['RUNNING', 'FREES THE', 'MIND']}
          subtitle={[
            "Running is more than",
            "just a physical activity; it's a",
            "powerful tool for mental and",
            "emotional liberation. When you run,",
            "you leave behind the clutter of",
            "everyday life As your feet hit the",
            "ground, there's a unique sensation",
            "of release, a letting go of stress,",
            "worries, and anxieties",
          ]}
          description={[
            "The rhythmic motion of your legs,",
            "the steady beat of your heart,",
            "and the flow of breath synchronize,",
            "creating a sense of freedom that",
            "can be hard to find in other",
            "areas of life.",
          ]}
        />
        <Motivation
          title="MOTIVATION"
          lst={[{
            src: "/assets/photo1.jpg",
            title: 'Time',
            subtitle: "Running is not just about speed; it's about how you use your time. Every run, whether a quick sprint or a long jog, offers a moment to focus solely on yourself and your surroundings."
          }, {
            src: "/assets/photo2.jpg",
            title: 'Goal',
            subtitle: "Every run has a purpose, a goal that pushes you forward. Whether it's finishing a race, improving your pace, or simply achieving a personal milestone, setting goals in running helps foster a sense of accomplishment."
          }, {
            src: "/assets/photo3.jpg",
            title: 'Health',
            subtitle: "The value of running extends far beyond physical fitness. It is an investment in your health, your peace of mind, and your resilience."
          }
          ]} />
        <Health
          title={"HEALTH"}
          content={[
            [
              'Running also strengthens the body',
              'in ways that are both empowering',
              'and liberating. Every stride you take',
              'builds physical resilience, not just',
              'in muscles, but in endurance, determination,',
              'and self-belief. As you push yourself to',
              'go further, faster, or longer, you learn',
              'to trust your own abilities, breaking',
              'through mental and physical barriers',
              'you once thought impossible.',
            ], [
              'Beyond the personal benefits,',
              'running connects you to the world',
              'around you. Whether it’s the crisp',
              'air of an early morning jog or the',
              'feeling of solidarity among fellow',
              'runners, the sport creates a sense',
              'of unity with nature and others.',
              'It reminds us that we are all',
              'capable of growth, of movement,',
              'and of pushing our limits.',
            ], [
              'In this way, running is a form of',
              'liberation—freeing both mind and body',
              'from the weight of daily challenges,',
              'and offering a space where personal',
              'boundaries can be redefined. Every run',
              'is a journey, a celebration of',
              'the body’s potential, and a reminder that,',
              'no matter the obstacles, we have the power',
              'to keep moving forward.'
            ]
          ]} />
        <Footer
          name={"RUN"}
          mission={"The rhythmic motion of your legs, the steady beat of your heart, and the flow of breath synchronize, creating a sense of freedom that can be hard to find in other areas of life."}
          links={[
            'https://www.youtube.com/watch?v=VEfDcyDFybM',
            'https://www.youtube.com/watch?v=1q57u0Q9DN4',
            'https://www.youtube.com/watch?v=RvaV7PX-Amg',
            'https://www.youtube.com/watch?v=8yIrHe5geRE',
            'https://www.youtube.com/watch?v=OzPVMvDyjWY',
            'https://www.youtube.com/watch?v=4Gah3eTAndo'
          ]} />
      </div>
    </div>
  );
};
