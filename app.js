var btn = document.querySelector('.btn');
var menu = document.querySelector('.menu-container');
var menuListItem = document.querySelectorAll('.menu-list-item');
var i = 0;

var TL = new TimelineMax({paused: true});

menuTimeline();

btn.addEventListener('click', displayMenu);

menuListItem.forEach((item) => {
  item.addEventListener('click', hideMenu);
})


// **************************

function displayMenu() {
  if(i == 0) {
    i++;
    openMenu();
    btn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    hideMenu();
  };
};

function menuTimeline() {
  TL
    .to(menu,1,{width: '25%'})
    .staggerTo(menuListItem, 0.3, {opacity: 1, x: 0}, 0.2, '-=0.75')
}

function openMenu() {
  TL.play();
}


function hideMenu() {
  i--;
  TL.reverse();
  btn.innerHTML = '<i class="fas fa-bars"></i>';
};


