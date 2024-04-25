//Инициализируем Swiper
new Swiper('.image-slider',{
	//Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},



	//Навигация
	//Буллеты, текущее положение, прогрессбар
	pagination:{
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
		//Динамические буллеты
		dynamicBullets: true,
		/*
		//Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		//Фракция
		type: 'fraction',
		//Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"</span>' +
			' из ' +
			'<span class="' + totalClass + '"></span>'
		},
		*/
	},

	/*
	//Прогрессбар
	type: 'progressbar',
	//Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},
	*/

	// Включение / Отключение перетаскивания на ПК
	simulateTouch: true,
	//Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: true,
	// Переключение при крике на слайд
	slideToClickedSlide: true,


	//Навигация по хешу
	nashNavigation: {
		//Отслеживать состояние
		watchState: true,
	},

	//Управление колесом мыши
	mousewheel:{
		sensetivity: 1,
		//Класс на котором будет срабатывать колесо прокрутки
		eventTarget: ".image-slider"
	},

	//Автовысота
	autoheight: false,

	//Количество слайдов для показа
	slidesPerView: 1,

	// Отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	//Отступ между слайдами
	spaceBetween: 30,

	//Количество пролистываемых слайдов
	slidesPerGroup: 1,

	//Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1, /* Обязательно отключать автовысоту */

	//Бесконечный слайдер
	loop: false,

	//Свободный режим
	freeMode: false,

	//Автопрокрутка
	// autoplay: {
		//Пауза между прокруткой
		// delay: 1000,
		//Закончить на последнем слайде
		// stopOnLastSlide: false,
		//Отключить после ручного переключения
		// disableOnInteraction: true
	// },

	//Скорость прокрутки
	speed: 300,

	//Вертикальный слайдер
	// direction: 'vertical',

	//Эффекты переключения слайдов
	//Листание
	effect: 'slide',

	//Смена прозрачности
	// effect: 'fade',

	//Дополнение к fade
	// fadeEffect: {
		//Параллельная смена прозрачности
		// crossFade: true
	// },
	// effect: 'flip',

	//Дополнение к flip
	// flipEffect: {
		//Тень
		// slideShadows: true,
		//Показ только активного слайда
		// limitRotation: true
	// },
	// effect: 'cube',

	//Дополнение к cube
	// cubeEffect: {
		//Настройка тени
		// slideShadow: true,
		// shadow: true,
		// shadowOffset: 20,
		// shadowScale: 0.94
	// },

	// effect: 'coverflow',

	//Дополнение к coverflow
	// coverflowEffect: {
		//Угол
		// rotate: 20,
		//Наложение
		// strench: 50,
		//Тень
		// slideShadows: true
	// },

	//Брейк поинты (адаптив)
	// Ширина экрана
	// breakpoints: {
		// 320: {
			// slidesPerView: 1,
		// },
		// 480: {
			// slidesPerView: 2,
		// },
		// 992:{
			// slidesPerView: 3,
		// }
	// },

	//Отключить предзагрузку картинок
	// preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	// lazy: {
		// Подгружать на старте
		// Переключения слайда
		// loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинку
		// loadPrevNext: false,
	// },
	//Слежка за видимыми слайдами
	// watchSlidesProgress: true,
	//Добавление класса видимым слайдам
	// watchSlidesVisibility: true,


	//Зум картинки
	// zoom: {
		//Максимальное увеличение
		// maxRatio: 5,
		//Минимальное увеличение
		// minRatio: 1,
	// },

	// Миниатюры (превью)
	thumbs: {
		//Свайпер с миниатюрами
		//и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 6,
		}
	},
});