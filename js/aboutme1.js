var links = document.querySelectorAll('a'),
    check  = false;
Array.prototype.forEach.call(links, function(obj, i) {
  obj.addEventListener('mouseover', function() {
    show(obj);
  });
  obj.addEventListener('mouseout', function() {
    hide(obj);
  });
});

function show(el) {
  var div = document.createElement('div');
  div.innerHTML = '<img src="' + el.href + '">'
  div.className = 'preview';
  document.body.appendChild(div);
}

function hide(el) {
  var el = document.querySelector('.preview');
  el.remove();
}