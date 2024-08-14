let collapsibles = document.querySelectorAll(".collapsible");


collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("collapsible--expanded");
   
    const icon = item.querySelector(".toggleIcon");

    if (item.classList.contains("collapsible--expanded")) {
        icon.textContent = '-'; 
        icon.classList.add('icon-minus');
    } else {
        icon.textContent = '+'; 
        icon.classList.remove('icon-minus');
    }
  })
);


function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function hideSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}


const hamburger = document.getElementById('hamburger');
const slideMenu = document.getElementById('slideMenu');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
    slideMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    slideMenu.classList.remove('show');
});


