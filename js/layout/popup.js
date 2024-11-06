// document.addEventListener('DOMContentLoaded', function() {
//     const project_01 = document.getElementById('project_01');
//     const project_02 = document.getElementById('project_02');
//     const project_03 = document.getElementById('project_03');
//     const project_04 = document.getElementById('project_04');
//     const project_05 = document.getElementById('project_05');
//     const project_06 = document.getElementById('project_06');
    
//     project_01.addEventListener('click', function() {
//       alert("project_01");
//     });

//     project_02.addEventListener('click', function() {
//         alert("project_02");
//     });
    
//     project_03.addEventListener('click', function() {
//         alert("project_03");
//     });

//     project_04.addEventListener('click', function() {
//         alert("project_04");
//     });

//     project_05.addEventListener('click', function() {
//         alert("project_05");
//     });

//     project_06.addEventListener('click', function() {
//         alert("project_06");
//     });
// });

// document.querySelectorAll('div[data-popup]').forEach(div => {
//     div.addEventListener('click', function() {
//         const popupId = this.getAttribute('data-popup');
//         document.querySelectorAll('.popup').forEach(popup => {
//             popup.style.display = 'none';
//         });
//         document.getElementById(popupId).style.display = 'grid';
//         document.getElementById('overlay').style.display = 'block';
//         document.querySelector('body').style.overflow = 'hidden';
//     });
// });

document.querySelectorAll('div[data-popup]').forEach(div => {
    div.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup');
        console.log(popupId);
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.visibility = 'hidden';
            popup.style.opacity = 0;
            popup.style.display = 'none';
        });
        
        const targetPopup = document.getElementById(popupId);
        console.log(targetPopup);
        if (targetPopup) {
            targetPopup.style.display = 'grid';
            targetPopup.offsetHeight;
            targetPopup.style.visibility = 'visible';
            targetPopup.style.opacity = 1;
        }

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        overlay.offsetHeight;
        overlay.style.visibility = 'visible';
        overlay.style.opacity = 1;
        document.documentElement.style.overflow = 'hidden';
    });
});

document.querySelectorAll('.closePopup').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Button clicked');
        const popup = this.closest('.popup');
        if(popup) {
            popup.scroll({ top: 0, behavior: "auto" });
            popup.style.visibility = 'hidden';
            popup.style.opacity = 0;
            popup.offsetHeight;
            popup.style.display = 'none';
        }

        const overlay = document.getElementById('overlay');
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = 0;
        overlay.offsetHeight;
        overlay.style.display = 'none';
        document.documentElement.style.overflow = 'auto';
    });
});

document.getElementById('overlay').addEventListener('click', function() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.scroll({ top: 0, behavior: "auto" });
        popup.style.visibility = 'hidden';
        popup.style.opacity = 0;
        popup.offsetHeight;
        popup.style.display = 'none';
    });

    this.style.visibility = 'hidden';
    this.style.opacity = 0;
    this.offsetHeight;
    this.style.display = 'none';

    document.documentElement.style.overflow = 'auto';
});

// const top_btn = document.getElementById("popup_topBtn");
// top_btn.addEventListener('click', scroll_top);

// const popup_top = document.getElementById("popup_contents_01");

// function scroll_top() {
//     popup_top.scroll({ top: 0, behavior: "smooth" });
// }



const buttons = document.querySelectorAll('.top_btn_popup');

buttons.forEach(button => {
    const popup_id = button.getAttribute('data-popup_top-id');
    console.log(popup_id);
    const popup = document.getElementById(`popup_contents_${popup_id}`);
    console.log(popup);
    button.addEventListener('click', function scroll_top() {
        popup.scroll({ top: 0, behavior: "smooth" });
    });
})


