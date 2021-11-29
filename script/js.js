
window.addEventListener('scroll', function (e) {
  const s = this.scrollY;
  const w = this.outerWidth;
  const h = document.getElementsByClassName('paralax')[0].clientWidth;
  const h_b = document.getElementsByClassName('home')[0].clientWidth;
  const p = s / h * 100;
  const p_b = s / h_b * 100;
  const opas = 1 - 1 / 100 * p_b;
  const z_1 = 1 + (w / 10000 * p_b);
  const item4 = document.getElementsByClassName('p-item4')[0].style = `transform: scale(${z_1});opacity: ${opas}`;
  const z_2 = 1 + (w / 5000000 * p);
  const item1 = document.getElementsByClassName('p-item1')[0].style = `transform: scale(${z_2})`;
  const hr = w / 2000 * p_b;
  const z_3 = 1 + (w * 0.000005 * p_b);
  const item2 = document.getElementsByClassName('p-item2')[0].style = `transform: translate3d(${hr}px,0,0) scale(${z_3})`;
  const hr_2 = w / 1500 * p_b;
  const z_4 = 1 + (w * 0.00001 * p_b);
  const item3 = document.getElementsByClassName('p-item3')[0].style = `transform: translate3d(${hr_2}px,0,0) scale(${z_4})`;
})


