(()=>{"use strict";function a(a){const n=document.createElement("template");return n.innerHTML=a,n.content.firstChild}let n,e;document.addEventListener("DOMContentLoaded",(function(){n=document.querySelector(".page__overlay"),e=document.querySelector(".menu-main")}));const i=window.matchMedia("(min-width: 1120px)");let l;document.addEventListener("DOMContentLoaded",(function(){l=document.querySelector(".page__overlay")}));const t=document.querySelector(".page"),s=document.querySelector(".main");s.prepend((()=>{const i=a('<header class="header"> <div class="container"> <div class="header__inner"> <div class="header__section header__section--left"> <button class="circular-button circular-button--burger" type="button"> <span class="visually-hidden">Открыть меню</span> </button> </div> <div class="header__section header__section--center"> <a class="header__logo-company logo-company"> <span class="visually-hidden">Логотип компании CPS</span> </a> <ul class="header__widget-contact widget-contact"> <li class="widget-contact__item"> <button class="circular-button circular-button--call" type="button"> <span class="visually-hidden">Заказать звонок</span> </button> </li> <li class="widget-contact__item"> <button class="circular-button circular-button--chat" type="button"> <span class="visually-hidden">Оставить обратную связь</span> </button> </li> <li class="widget-contact__item"> <a class="circular-button circular-button--profile" href="#"> <span class="visually-hidden">Перейти к профилю пользователя</span> </a> </li> </ul> </div> <ul class="header__section header__section--right"> <li> <a class="circular-button circular-button--request circular-button--extend" href="#"> Оставить заявку </a> </li> <li> <a class="circular-button circular-button--status circular-button--extend" href="#"> Статус ремонта </a> </li> </ul> </div> </div> </header> ');return i.querySelector(".circular-button--burger").addEventListener("click",(function(){n.classList.add("page__overlay--visible"),e.classList.add("menu-main--is-open")})),i})()),t.prepend((()=>{const n=a('<aside class="menu-main"> <div class="menu-main__inner"> <span class="menu-main__overlay"></span> <header class="menu-main__header"> <button class="menu-main__circular-button circular-button menu-main__circular-button--close circular-button--close" type="button"> <span class="visually-hidden">Закрыть меню</span> </button> <a class="menu-main__logo-company logo-company"> <span class="visually-hidden">Логотип компании CPS</span> </a> <button class="menu-main__circular-button circular-button menu-main__circular-button--search circular-button--search" type="button"> <span class="visually-hidden">Начать поиск</span> </button> </header> <nav class="menu-main__navigation"> <ul class="menu-main__list"> <li class="menu-main__item"> <a href="#" class="menu-main__link">Ремонт техники </a> </li> <li class="menu-main__item"> <a href="#" class="menu-main__link menu-main__link--active">Услуги и сервисы </a> </li> <li class="menu-main__item"> <a href="#" class="menu-main__link">Корпоративным клиентам </a> </li> <li class="menu-main__item"> <a href="#" class="menu-main__link">Продавцам техники </a> </li> <li class="menu-main__item"> <a href="#" class="menu-main__link">Партнерам </a> </li> <li class="menu-main__item"> <a href="#" class="menu-main__link">Производителям </a> </li> <li class="menu-main__item"> <a href="#" class="menu-main__link">Наши сервисные центры </a> </li> <li class="menu-main__item"> <a href="#" class="menu-main__link">Контакты </a> </li> </ul> </nav> <footer class="menu-main__footer"> <ul class="menu-main__widget-contact widget-contact"> <li class="widget-contact__item"> <button class="circular-button circular-button--call" type="button"> <span class="visually-hidden">Заказать звонок</span> </button> </li> <li class="widget-contact__item"> <button class="circular-button circular-button--chat" type="button"> <span class="visually-hidden">Оставить обратную связь</span> </button> </li> <li class="widget-contact__item"> <a class="circular-button circular-button--profile" href="#"> <span class="visually-hidden">Перейти к профилю пользователя</span> </a> </li> </ul> <ul class="widget-communication"> <li class="widget-communication__item"> <a class="widget-communication__link widget-communication__link--mail" href="mailto:mail@cps.com">mail@cps.com</a> </li> <li class="widget-communication__item"> <a class="widget-communication__link widget-communication__link--tel" href="tel:88008908900">8 800 890 8900</a> </li> </ul> <ul class="menu-main__lang-switcher lang-switcher"> <li class="lang-switcher__item"> <input class="lang-switcher__radio-button visually-hidden" type="radio" name="lang-switcher" id="lang-ru" checked="checked"> <label class="lang-switcher__label" for="lang-ru">RU</label> </li> <li class="lang-switcher__item"> <input class="lang-switcher__radio-button visually-hidden" type="radio" name="lang-switcher" id="lang-en"> <label class="lang-switcher__label" for="lang-en">EN</label> </li> <li class="lang-switcher__item"> <input class="lang-switcher__radio-button visually-hidden" type="radio" name="lang-switcher" id="lang-ch"> <label class="lang-switcher__label" for="lang-ch">CH</label> </li> </ul> </footer> </div> </aside> ');return n.querySelector(".menu-main__circular-button--close").addEventListener("click",(function(){n.classList.remove("menu-main--is-open"),l.classList.remove("page__overlay--visible")})),i.addEventListener("change",(()=>{n.classList.remove("menu-main--is-open"),l.classList.remove("page__overlay--visible")})),n})()),s.append(a('<section class="hero"> <div class="hero__inner"> <div class="container"> <h1 class="hero__title">Услуги и сервисы</h1> </div> </div> </section> '))})();
//# sourceMappingURL=main.538d5a923fe1feeabf5f.js.map