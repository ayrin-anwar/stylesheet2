body {
  padding: 0;
  margin: 0;
  background: #f2f6e9;
}
/*--- navigation bar ---*/
.navbar {
  background:#6ab446;
}
.nav-link,
.navbar-brand {
  color: #fff;
  cursor: pointer;
}
.nav-link {
  margin-right: 1em !important;
}
.nav-link:hover {
  color: #000;
}
.navbar-collapse {
  justify-content: flex-end;
}
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
checkFontSize();


function checkFontSize() {
  var elems = document.querySelectorAll("div");
  
  [].forEach.call(elems, function(el) {
    scaleFontSize(el);
  });  

}

function scaleFontSize(element) {
 
    // We only want to scale down long text, so first we reset
    // font-size to 100%
    element.style.fontSize = "100%";
  
    // Now we chceck if the content is wider than parent
    // If so, then reduce letter spacing a tiny bit, maybe it's enough
    if (element.scrollWidth > element.clientWidth) {
        element.style.letterSpacing = "-0.05em";
    }
  
    // We check the content width oncemore and if it still doesn't fit
    // then we reduce font size by 80%, but also reset letter spacing to 0 for legibility.
    if (element.scrollWidth > element.clientWidth) {
        element.style.letterSpacing = "0";
        element.style.fontSize = "80%";
    }
  
    // Text which is still longer will get truncated by the CSS rule ellipsis
  
}