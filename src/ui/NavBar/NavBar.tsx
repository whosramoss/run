import useTimerEffect from "@hooks/useTimerEffect";

export function NavBar() {

  const refTimer = useTimerEffect();

  return (
    <nav>
      <div className="brand">
        <span>RUN</span>
      </div>
      <div className="date">
        <span id="date" ref={refTimer}>00:00:00</span>
      </div>
      <div className="health">
        <span className="nav-link" data-scrollspy="health">
          HEALTH
        </span>
      </div>
    </nav>
  )
}