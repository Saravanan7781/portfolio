import React, { useEffect, useRef, useState } from 'react';
import nightSkill from '../assets/nightSkillAchievement.jpeg'
import bitHacks from '../assets/bithacksAchievement.jpg'
import DescriptionBox from './DescriptionBox';

const achievements = [
  {
    tag: 'Hackathon',
    title: "BITHACKS'23 Finalist",
    caption: "BITHACKS'23",
    img: bitHacks,
    desc: "Shortlisted to the finale of BITHACKS'23, a 36-hour hackathon at Bannari Amman Institute of Technology, in the Web Development domain.",
    points: [
      'Built an Appointment Booking System: patients book doctor slots, and a booked slot disappears instantly',
      'Led a team of 5 and worked as the front-end developer',
      'Stack: Flask, Python, MySQL, HTML, CSS, JavaScript',
    ],
  },
  {
    tag: 'Teaching',
    title: 'Night Skill Trainer',
    caption: 'Night Skill sessions',
    img: nightSkill,
    desc: 'I teach juniors in the Night Skill sessions, evening hands-on classes in the lab where we learn by building.',
    points: [
      'Trained 60+ students in HTML and CSS over 12 days',
      'Trained 60+ students in Java and OOP fundamentals over 12 days',
      'Teaching it is the fastest way I found to really learn it',
    ],
  },
];

function AboutLayout() {
  const sectionRef = useRef(null);
  const [gone, setGone] = useState(0);

  // number of cards swiped away so far, driven by scroll progress
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const progress = Math.min(Math.max(-top / scrollable, 0), 1);
      setGone(Math.min(achievements.length, Math.floor(progress * (achievements.length + 1))));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // the text follows whichever card is currently on top (the last one stays once all are gone)
  const activeIndex = Math.min(gone, achievements.length - 1);
  const active = achievements[activeIndex];

  return (
    <div
      className="dupContainerForAboutPage"
      ref={sectionRef}
      style={{ height: `${100 + achievements.length * 70}vh` }}
    >
      <div className="MainAboutPage">
        <div className="leftHalfAboutPage">
          <div className="aboutPageDescription">
            <p className="achievementCounter">
              {String(activeIndex + 1).padStart(2, '0')} / {String(achievements.length).padStart(2, '0')}
              <span>{active.tag}</span>
            </p>
            {/* keyed on the index so the text re-mounts and replays its fade-in */}
            <div className="achievementText" key={activeIndex} aria-live="polite">
              <h2>{active.title}</h2>
              <p>{active.desc}</p>
              <ul className="achievementList">
                {active.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
            <div className="achievementDots" aria-hidden="true">
              {achievements.map((a, i) => (
                <span key={a.title} className={i === activeIndex ? 'dotActive' : ''} />
              ))}
            </div>
          </div>
        </div>
        <div className="rightHalfAboutPage">
          <div className="descriptionWithSquareboxes">
            {achievements.map((item, index) => {
              const away = index < gone;
              const angle = -17 * (index - gone);
              return (
                <DescriptionBox
                  description={{ title: item.caption, img: item.img }}
                  key={item.title}
                  style={{
                    transform: away ? 'translateY(-120vh) rotate(45deg)' : `rotate(${angle}deg)`,
                    zIndex: achievements.length - index,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLayout;
