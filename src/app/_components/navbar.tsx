"use client";

import { useTimerEffect } from "@hooks/useTimerEffect";
import FadeIn from "@ui/fade-in";

export interface NavLink {
  label: string;
  scrollspy: string;
}

interface NavBarProps {
  brandName: string;
  timeFormat: string;
  navLink: NavLink;
}

export default function NavBar({
  brandName,
  timeFormat,
  navLink,
}: NavBarProps) {
  const refTimer = useTimerEffect();

  return (
    <FadeIn>
      <nav>
        <div className="brand">
          <span>{brandName}</span>
        </div>
        <div className="date">
          <span ref={refTimer}>{timeFormat}</span>
        </div>
        <div className="health">
          <span className="nav-link" data-scrollspy={navLink.scrollspy}>
            {navLink.label}
          </span>
        </div>
      </nav>
    </FadeIn>
  );
}
