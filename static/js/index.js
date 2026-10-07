(function () {
  var N = 12, i = 1;
  var img = document.getElementById('slide-img');
  var count = document.getElementById('slide-count');
  function show(k) {
    i = (k + N - 1) % N + 1;
    var n = String(i).padStart(2, '0');
    img.src = 'static/images/slides/slide-' + n + '.jpg';
    img.alt = 'Slide ' + i;
    count.textContent = i + ' / ' + N;
  }
  document.getElementById('slide-prev').onclick = function () { show(i - 1); };
  document.getElementById('slide-next').onclick = function () { show(i + 1); };
  img.onclick = function () { show(i + 1); };
  document.querySelector('.slide-viewer').addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
  // Preload remaining slides
  for (var k = 2; k <= N; k++) new Image().src = 'static/images/slides/slide-' + String(k).padStart(2, '0') + '.jpg';

  var btn = document.getElementById('copy-bib');
  btn.onclick = function () {
    navigator.clipboard.writeText(document.getElementById('bib').textContent).then(function () {
      btn.lastChild.textContent = 'Copied';
      setTimeout(function () { btn.lastChild.textContent = 'Copy'; }, 1500);
    });
  };
})();
