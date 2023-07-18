(() => {
  'use strict';
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? document.body.classList.add('_touch')
    : document.body.classList.add('_pc'),
    window.addEventListener('DOMContentLoaded', function () {
      if (
        ((function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              !(function (e) {
                let t = !0 === e ? 'webp' : 'no-webp';
                document.documentElement.classList.add(t);
              })(2 == t.height);
            }),
            (t.src =
              'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA');
        })(),
        this.window.innerWidth < 492)
      ) {
        const y = this.document.querySelector('.registration__title'),
          h = this.document.querySelector('.registration__item');
        y &&
          (h.prepend(y),
          (y.style.cssText =
            'display: block; text-align: center; margin-bottom: 14px; font-size: 24px;'));
      }
      if (this.window.innerWidth < 767) {
        const m = document.querySelectorAll('.contacts__button');
        if (m.length > 0) {
          const g = document.querySelector('.dropdown-contacts__list');
          m.forEach((e) => {
            g.append(e), e.classList.add('dropdown__list-item');
          });
        }
      }
      const e = this.document.querySelectorAll('.calculator-item-switcher__button');
      e.forEach((t) => {
        t.addEventListener('click', (o) => {
          e.forEach((e) => {
            e.classList.remove('_active');
          }),
            t.classList.add('_active');
        });
      });
      const o = document.querySelectorAll('[data-spollers]');
      if (o.length > 0) {
        const v = Array.from(o).filter(function (e, t, o) {
          return !e.dataset.spollers.split(',')[0];
        });
        v.length > 0 && _(v);
        const f = Array.from(o).filter(function (e, t, o) {
          return e.dataset.spollers.split(',')[0];
        });
        if (f.length > 0) {
          const A = [];
          f.forEach((e) => {
            const t = {},
              o = e.dataset.spollers.split(',');
            (t.value = o[0]), (t.type = o[1] ? o[1].trim() : 'max'), (t.item = e), A.push(t);
          });
          let L = A.map(function (e) {
            return '(' + e.type + '-width:' + e.value + 'px),' + e.value + ',' + e.type;
          });
          (L = L.filter(function (e, t, o) {
            return o.indexOf(e) === t;
          })),
            L.forEach((e) => {
              const t = e.split(','),
                o = t[1],
                i = t[2],
                n = window.matchMedia(t[0]),
                s = A.filter(function (e) {
                  if (e.value === o && e.type === i) return !0;
                });
              n.addListener(function () {
                _(s, n);
              }),
                _(s, n);
            });
        }
        function _(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add('_init'), w(e), e.addEventListener('click', b))
                : (e.classList.remove('_init'), w(e, !1), e.removeEventListener('click', b));
          });
        }
        function w(e, t = !0) {
          const o = e.querySelectorAll('[data-spoller]');
          o.length > 0 &&
            o.forEach((e) => {
              t
                ? (e.removeAttribute('tabindex'),
                  e.classList.contains('_active') || (e.nextElementSibling.hidden = !0))
                : (e.setAttribute('tabindex', '-1'), (e.nextElementSibling.hidden = !1));
            });
        }
        function b(e) {
          const t = e.target;
          if (t.hasAttribute('data-spoller') || t.closest('[data-spoller]')) {
            const o = t.hasAttribute('data-spoller') ? t : t.closest('[data-spoller]'),
              i = o.closest('[data-spollers]'),
              s = !!i.hasAttribute('data-one-spoller');
            i.querySelectorAll('._slide').length ||
              (s && !o.classList.contains('_active') && S(i),
              o.classList.toggle('_active'),
              n(o.nextElementSibling, 500)),
              e.preventDefault();
          }
        }
        function S(e) {
          const t = e.querySelector('[data-spoller]._active');
          t && (t.classList.remove('_active'), i(t.nextElementSibling, 500));
        }
      }
      let i = (e, t = 500) => {
          e.classList.contains('_slide') ||
            (e.classList.add('_slide'),
            (e.style.transitionProperty = 'height, margin, padding'),
            (e.style.transitionDuration = t + 'ms'),
            (e.style.height = e.offsetHeight + 'px'),
            e.offsetHeight,
            (e.style.overflow = 'hidden'),
            (e.style.height = 0),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
              (e.hidden = !0),
                e.style.removeProperty('height'),
                e.style.removeProperty('padding-top'),
                e.style.removeProperty('padding-bottom'),
                e.style.removeProperty('mragin-top'),
                e.style.removeProperty('margin-bottom'),
                e.style.removeProperty('overflow'),
                e.style.removeProperty('transition-duration'),
                e.style.removeProperty('transition-property'),
                e.classList.remove('_slide');
            }, t));
        },
        n = (e, t = 500) =>
          e.hidden
            ? ((e, t = 500) => {
                if (!e.classList.contains('_slide')) {
                  e.classList.add('_slide'), e.hidden && (e.hidden = !1);
                  let o = e.offsetHeight;
                  (e.style.overflow = 'hidden'),
                    (e.style.height = 0),
                    (e.style.paddingTop = 0),
                    (e.style.paddingBottom = 0),
                    (e.style.marginTop = 0),
                    (e.style.marginBottom = 0),
                    e.offsetHeight,
                    (e.style.transitionProperty = 'height, margin, padding'),
                    (e.style.transitionDuration = t + 'ms'),
                    (e.style.height = o + 'px'),
                    e.style.removeProperty('padding-top'),
                    e.style.removeProperty('padding-bottom'),
                    e.style.removeProperty('margin-top'),
                    e.style.removeProperty('margin-bottom'),
                    window.setTimeout(() => {
                      e.style.removeProperty('height'),
                        e.style.removeProperty('overflow'),
                        e.style.removeProperty('transition-duration'),
                        e.style.removeProperty('transition-property'),
                        e.classList.remove('_slide');
                    }, t);
                }
              })(e, t)
            : i(e, t);
      const s = document.querySelectorAll('.tab-section');
      s.length > 0 &&
        s.forEach((e) => {
          const t = Array.from(e.querySelectorAll('.tab__btn')),
            o = Array.from(e.querySelectorAll('.tab__slide'));
          if ((t.length, t.length > 0)) {
            t[0].classList.add('_active'), o[0].classList.add('_active');
            let i = t[0],
              n = o[0];
            function s(e) {
              var t;
              e.preventDefault(),
                (t = e.target.closest('.tab__btn')).classList.contains('_active') ||
                  (i.classList.remove('_active'), t.classList.add('_active'), (i = t), r(t));
            }
            function r(e) {
              var i;
              (i = t.indexOf(e)),
                n.classList.remove('_active'),
                o[i].classList.add('_active'),
                (n = o[i]);
            }
            t.forEach((e) => {
              e.addEventListener('click', s);
            });
          }
        });
      const r = document.querySelectorAll('[data-goto]');
      if (r.length > 0) {
        function E(e) {
          const t = e.target;
          if (t.dataset.goto && document.querySelector(t.dataset.goto)) {
            const o =
              document.querySelector(t.dataset.goto).getBoundingClientRect().top + pageYOffset;
            window.scrollTo({ top: o, behavior: 'smooth' }),
              e.preventDefault(),
              l.classList.contains('_active') && (p(document.body), p(l), p(a));
          }
        }
        r.forEach((e) => {
          e.addEventListener('click', E);
        });
      }
      const l = this.document.querySelector('#menuIcon'),
        a = this.document.querySelector('#menuBody');
      a &&
        l.addEventListener('click', () => {
          u(l), u(a), u(document.body);
        });
      const c = new Swiper('.reviews__slider', {
          sumulateTouch: !1,
          touchRatio: 1,
          touchAngel: 45,
          grabCursor: !0,
          slideToClickedSlide: !1,
          hashNavigation: { watchState: !1 },
          navigation: { nextEl: '.reviews__button-next', prevEl: '.reviews__button-prev' },
          spaceBetween: 20,
          keyboard: { enabled: !0, onlyInViewport: !0, pageUpDown: !0 },
          pagination: { el: '.reviews__pagination', clickable: !0 },
          breakpoints: {
            100: { slidesPerView: 1, centeredSlides: !1, spaceBetween: 20 },
            767: { slidesPerView: 2, centeredSlides: !1, spaceBetween: 20 },
          },
          slidesPerView: 2,
          watchoverflow: !1,
          centeredSlides: !1,
          loopedSlides: 0,
          freeMode: !1,
          speed: 600,
          effect: 'slide',
          watchSlidesProgress: !0,
          watchSlidesVisibility: !0,
          observer: !0,
          observeParents: !0,
          observeSlideChildren: !0,
        }),
        d = this.document.querySelectorAll('.gallery__slider');
      function u(e) {
        e.classList.toggle('_active'), e.parentElement.classList.toggle('_active');
      }
      function p(e) {
        e.classList.remove('_active'), e.parentElement.classList.remove('_active');
      }
      d.length > 0 &&
        d.forEach((e) => {
          new Swiper(e, {
            sumulateTouch: !1,
            touchRatio: 1,
            touchAngel: 45,
            grabCursor: !0,
            slideToClickedSlide: !1,
            hashNavigation: { watchState: !1 },
            navigation: { nextEl: '.gallery__button-next', prevEl: '.gallery__button-prev' },
            spaceBetween: 20,
            keyboard: { enabled: !0, onlyInViewport: !0, pageUpDown: !0 },
            pagination: { el: '.gallery__pagination', clickable: !0 },
            breakpoints: {
              100: { slidesPerView: 1, centeredSlides: !1, spaceBetween: 20 },
              767: { slidesPerView: 1, centeredSlides: !1, spaceBetween: 20 },
            },
            slidesPerView: 1,
            watchoverflow: !1,
            centeredSlides: !1,
            loopedSlides: 0,
            freeMode: !1,
            speed: 600,
            effect: 'slide',
            watchSlidesProgress: !0,
            watchSlidesVisibility: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
          });
        }),
        c &&
          (function (e) {
            const t = e;
            if (t) {
              let e = t.clientHeight;
              (e = e.toString()),
                t.querySelectorAll('.swiper-slide').forEach((t) => {
                  t.style.cssText = 'height: ' + e + 'px';
                });
            }
          })(this.document.querySelector('.reviews__slider'));
    });
})();

document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('#datepicker');

  flatpickr('#datepicker', {
    dateFormat: 'd.m.Y',
    onReady: function (selectedDates, dateStr, instance) {
      if (!instance.input.value) {
        instance.setDate(new Date(), false, 'd.m.Y');
        instance.redraw();
      }
    },
  });
});
