// 비쥬얼 슬라이드
(function () {
  new Swiper(".main-visual", {
    slidesPerView: 9,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".main-slide-next", // 다음 버튼 클래스명
      prevEl: ".main-slide-prev", // 이번 버튼 클래스명
    },
  });

  // 메인 슬라이드
  new Swiper(".best-slide", {
    slidesPerView: 4,
    spaceBetween: 19,
    loop: true,
    navigation: {
      nextEl: ".best-slide-next", // 다음 버튼 클래스명
      prevEl: ".best-slide-prev", // 이번 버튼 클래스명
    },
  });
})();
