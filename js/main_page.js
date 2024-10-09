const top_button = document.getElementById('topBtn');
top_button.addEventListener('click', scroll_top);

function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
};

const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    if(window.scrollY > (documentHeight / 3)){
        top_button.style.opacity = 1;
        top_button.style.visibility = 'visible';
    } else {
        top_button.style.opacity = 0;
        top_button.style.visibility = 'hidden';
    }
  });