const modalOpen = document.querySelector('.modal__open'), //button that opens the modal window
      root = document.querySelector('.root');   //area where will place modal window

//Separate creation of buttons so that event handlers can be hung on them:
const modalCancel = document.createElement('BUTTON');
modalCancel.classList.add('btn', 'modal__cancel');
modalCancel.innerHTML = 'Cancel';
const modalSubmit = document.createElement('BUTTON');
modalSubmit.classList.add('btn', 'modal__submit');
modalSubmit.innerHTML = 'Submit';

let modal, //variable for accessing the modal window
    modalFooter; //variable for accessing the place where the buttons of the modal window should be inserted

const modalHtml = `
    <div class="modal">
    <h2 class="modal__title">Modal title</h2>
    <div class="modal__body">
        <h3 class="modal__subtitle">Subtitle</h3>
        <div class="modal__text">Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Velit enim est corrupti facere earum ipsam libero exercitationem dolorum animi, voluptates iusto.</div>
        <h3 class="modal__subtitle">Subtitle</h3>
        <div class="modal__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, accusamus!</div>
        <h3 class="modal__subtitle">Subtitle</h3>
        <div class="modal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus, consequatur, a ullam magnam explicabo repudiandae consequuntur dignissimos, maxime molestias doloribus maiores odio optio soluta!</div>

    </div>
    <div class="modal__footer">

    </div>
    </div>
`;

modalOpen.addEventListener('click', () => {
    if (modal) { //if modal window allreay added to DOM 
        modal.style.display = 'block';
    } else { //first show, added to DOM
        root.insertAdjacentHTML("beforeend", modalHtml);
        modal = document.querySelector('.modal');
        modalFooter = document.querySelector('.modal__footer');
        modalFooter.append(modalCancel, modalSubmit);
    }
});

modalCancel.addEventListener('click', () => { //cancel modal window
    modal.style.display = 'none';
});

modalSubmit.addEventListener('click', () => { //submit modal window
    modal.style.display = 'none';
    setTimeout(showStatus, 1000);
});

function showStatus() {
    const submit = document.createElement('DIV');
    submit.classList.add('submit');
    submit.innerHTML = 'Your request has been confirmed';
    root.append(submit);
    setTimeout(() => {
        submit.remove();
    }, 4000);
}