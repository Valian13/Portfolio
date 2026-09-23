/* Lightbox. That's the whole script. */
(function () {
  'use strict';
  var lb  = document.getElementById('lb');
  var img = document.getElementById('lbImg');
  var cap = document.getElementById('lbCap');
  if (!lb) return;

  function close() {
    lb.hidden = true;
    img.removeAttribute('src');
    document.body.style.overflow = '';
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-lb]'), function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      img.src = a.getAttribute('href');
      img.alt = a.dataset.lb || '';
      cap.textContent = a.dataset.lb || '';
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });

  lb.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lb.hidden) close();
  });
})();
