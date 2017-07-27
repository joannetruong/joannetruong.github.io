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

$("#toggle").click(function(event) {
  event.preventDefault();
  if ($(this).hasClass("isDown")) {
    $(".navbar-fixed-top").animate({
      "margin-top": "-62px"
    }, "fast");
    $("#content").animate({
      "margin-top": "5px"
    }, "fast");
    $(this).removeClass("isDown");
  } else {
    $(".navbar-fixed-top").animate({
      "margin-top": "0px"
    }, "fast");
    $("#content").animate({
      "margin-top": "10px"
    }, "fast");
    $(this).addClass("isDown");
  }
  return false;
});