export default function useTimer() {
  let d = new Date(),
    hh = d.getHours(),
    mm = d.getMinutes(),
    ss = d.getSeconds();

  const checker = (el: any) => (el < 10 ? `0${el}` : el);

  let date = document.getElementById("date");
  window.requestAnimationFrame(() => {
    (date as HTMLElement).innerText = `${checker(hh)}:${checker(mm)}:${checker(ss)}`;
  });

  setTimeout(useTimer, 1000);
};