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

document.querySelectorAll('div[data-popup]').forEach(div => {
    div.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup');
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
        document.getElementById(popupId).style.display = 'grid';
        document.getElementById('overlay').style.display = 'grid';
    });
});

document.querySelectorAll('.closePopup').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    });
});

document.getElementById('overlay').addEventListener('click', function() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });
    this.style.display = 'none';
});