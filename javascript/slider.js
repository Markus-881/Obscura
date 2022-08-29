const slider = $(".feedback__list").bxSlider({
	pager: false,
	controls: false,
	infiniteLoop: true,
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
