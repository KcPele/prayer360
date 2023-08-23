// Mobile Navigation
$(function () {
  const btnNavEl = document.querySelector('.btn_mobile_nav');
  const sidebarEl = document.querySelector('.side_bar_container');
  const headerEl = document.querySelector('.header');

  btnNavEl.addEventListener('click', function () {
    sidebarEl.classList.toggle('nav-open');
    headerEl.classList.toggle('nav-open');
  });

  // const uploadForm = document.querySelector('#upload_form'),
  //   fileInput = uploadForm.querySelector('.file_input');

  // uploadForm.addEventListener('click', () => {
  //   fileInput.click();
  // });
});