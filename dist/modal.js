// modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('fixed')) {
        const modalId = e.target.closest('.modal-container').dataset.modalShowId;
        const modalHide = document.querySelector(`[data-modal-show-id="${modalId}"]`);
        const allDropdownMenus = document.querySelectorAll('.modal-container');
        const background = document.querySelector('.background-modal');
        allDropdownMenus.forEach(menu => {
            if (menu == modalHide) {
                menu.classList.add('hidden');
                background.remove();

            }

        });       
    }
  });
const openModalButtons = document.querySelectorAll('.openModal');
const closeModalButtonsDetail = document.querySelectorAll('.closeModalDetail');
const closeModalButtons = document.querySelectorAll('.closeModal');
const modalDetailProduk = document.querySelectorAll('.detailProduk');
const newDiv = document.createElement("div");
newDiv.classList.add("background-modal"); 

function modalShow(event) {
    const modalId = event.target.closest('.openModal').dataset.modalId;
    
    const modalShow = document.querySelector(`[data-modal-show-id="${modalId}"]`);
    // Hide all dropdowns
    const allDropdownMenus = document.querySelectorAll('.modal-container');
    allDropdownMenus.forEach(menu => {
        if (menu == modalShow) {
            document.body.appendChild(newDiv);
            menu.classList.remove('hidden');
        }
    });
}

function modalCloseDetail(event){
    const modalId = event.target.closest('.closeModalDetail').dataset.bsDismiss;
    const modalHide = document.querySelector(`[data-modal-show-id="${modalId}"]`);
    const modalData = document.querySelector(`[data-modal-show-id="${modalId}"] .modal-body .detail-content`);
    const allDropdownMenus = document.querySelectorAll('.modal-container');
    const background = document.querySelector('.background-modal');
    allDropdownMenus.forEach(menu => {
        if (menu == modalHide) {
            menu.classList.add('hidden');
            modalData.classList.remove('showdetail');
            modalData.classList.add('hidden');
            background.remove();

        }

    });       
}
function modalClose(event){
    const modalId = event.target.closest('.closeModal').dataset.bsDismiss;
    const modalHide = document.querySelector(`[data-modal-show-id="${modalId}"]`);
    const allDropdownMenus = document.querySelectorAll('.modal-container');
    const background = document.querySelector('.background-modal');
    allDropdownMenus.forEach(menu => {
        if (menu == modalHide) {
            menu.classList.add('hidden');
            background.remove();
        }

    });       
}

function detailModal(event){
    const modalId = event.target.closest('.detailProduk').dataset.bsDetails;
    const modalData = document.querySelector(`[data-modal-show-id="${modalId}"] .modal-body `);
    const modalBody = modalData.querySelector(`.detail-img`);
    const detailContent = modalData.querySelector('.detail-content');
    const detailsContainer = document.querySelectorAll('.detail-content');
    detailsContainer.forEach(menu => {
        const hasActiveClass = menu.classList.contains('hidden');
        if (menu == detailContent) {
            if(hasActiveClass){
                menu.classList.remove('hidden');
                menu.classList.add('showdetail');
                modalBody.classList.remove('rounded-xl');
                modalBody.classList.add('rounded-l-xl');
            }else{
                menu.classList.add('hidden');
                menu.classList.remove('showdetail');
                modalBody.classList.add('rounded-xl');
                 modalBody.classList.remove('rounded-l-xl');
            }
          
           
        }
    });       
}

closeModalButtonsDetail.forEach((button) => {
    button.addEventListener('click', modalCloseDetail);
});

closeModalButtons.forEach((button) => {
    button.addEventListener('click', modalClose);
});

modalDetailProduk.forEach((button) => {
    button.addEventListener('click', detailModal);
});

openModalButtons.forEach((button) => {
    button.addEventListener('click', modalShow);
});

// minus plus counter
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');
const counter = document.getElementById('counter');

let value = 0;

const updateCounter = () => {
    counter.value = value;
};

plusBtn.addEventListener('click', () => {
    value += 1;
    updateCounter();
});

minusBtn.addEventListener('click', () => {
    if (value > 0) {
        value -= 1;
        updateCounter();
    }
});

updateCounter();
    