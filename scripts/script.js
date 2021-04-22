const inputCheckboxSpan = document.querySelector('.intro__checkbox-true');
const contentMain = document.querySelector('.intro__main');
const contentForm = document.querySelector('.intro__form');
const subscribeBlock = document.querySelector('.subscribe');

function formSubmit(evt) {
   evt.preventDefault();
   contentMain.style.display = 'none';
   subscribeBlock.style.display = 'block';
}

inputCheckboxSpan.addEventListener('click', ()=> {
   inputCheckboxSpan.classList.toggle('intro__checkbox-true_active');
});

contentForm.addEventListener('submit', formSubmit);




