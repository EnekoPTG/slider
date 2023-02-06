/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("sliderImg");
    let secondSlides = document.getElementsByClassName("sliderDot");
    let thirdSlides = document.getElementsByClassName("sliderText");
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    if (n > secondSlides.length) {
        slideIndex = 1
    }
      if (n < 1) {
          slideIndex = secondSlides.length
    }
    if (n > thirdSlides.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = thirdSlides.length
      }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "flex";
    for (let secondSlide of secondSlides) {
        secondSlide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    secondSlides[slideIndex - 1].style.display = "flex";
    for (let thirdSlide of thirdSlides) {
        thirdSlide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    thirdSlides[slideIndex - 1].style.display = "flex";
}
