const feedback = $(".feedback__list").bxSlider({
  pager: false,
  controls: false,
  infiniteLoop: true,
  touchEnabled: true,
  hideControlOnEnd: false,
});

$(".button--prev").click((e) => {
  e.preventDefault();
  feedback.goToPrevSlider();
});

$(".button--next").click((e) => {
  e.preventDefault();
  feedback.goToNextSlider();
});

const portfolio = $(".portfolio__list").bxSlider({
  pager: false,
  controls: false,
  infiniteLoop: true,
  touchEnabled: true,
  hideControlOnEnd: false,
});

$(".button--portfolio--prev").click((e) => {
  e.preventDefault();
  portfolio.goToPrevSlider();
});

$(".button--portfolio--next").click((e) => {
  e.preventDefault();
  portfolio.goToNextSlider();
});
