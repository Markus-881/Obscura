const slider = $(".feedback__list").bxslider({
	pager: false,
	controls: false,
	infifiteLoop: true,
	touchEnabled: true,
	hideControlOnEnd: false,
});
$(".button--prev").click((e) => {
	e.preventDefault();
	slider.goToPrevSlider();
});
$(".button--next").click((e) => {
	e.preventDefault();
	slider.goToNextSlider();
});
const portfolio = $(".portfolio__list").bxslider({
	pager: false,
	controls: false,
	infifiteLoop: true,
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