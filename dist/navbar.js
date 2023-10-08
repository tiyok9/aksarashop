const breakpoint = window.matchMedia('(min-width: 1024px)');
if(breakpoint.matches){
    document.querySelector('#menu .nav-item.active a').classList.remove('bcg-nav');
    const navText = document.querySelector('#menu .nav-item.active ');
    navText.classList.toggle('text-hitam');
    const navHover = document.querySelectorAll('#menu .nav-item');
    navHover.forEach(nav => {
        nav.addEventListener('mouseover', (e) => {
            nav.querySelector('a').classList.toggle('text-hitam');
            nav.querySelector('svg').classList.toggle('text-hitam');
        });
        nav.addEventListener('mouseout', (e) => {
            nav.querySelector('a').classList.remove('text-hitam');
            nav.querySelector('svg').classList.remove('text-hitam');
        });
    })

}
else{
    document.querySelector('#menu .nav-item.active a').classList.add('bcg-nav');
}

function changeBg() {
    const navbar = document.getElementById('navbar');
    const scrollVal = window.scrollY;
    const isScrolled = scrollVal >= 80;

    navbar.classList.toggle('bg-transparent', !isScrolled);
    navbar.classList.toggle('backdrop-blur-xl', isScrolled);
    navbar.classList.toggle('bg-hitam', isScrolled);
   
}

window.addEventListener('scroll',changeBg);

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


  // Function to toggle dropdown visibility
  function toggleDropdown(event) {
    const dropdownId = event.target.closest('.dropdown-container').dataset.dropdownId;
    const dropdownMenu = document.querySelector(`[data-dropdown-id="${dropdownId}"] .dropdown-menu`);
    // Hide all dropdowns
    const allDropdownMenus = document.querySelectorAll('.dropdown-menu');
    allDropdownMenus.forEach(menu => {
        if (menu !== dropdownMenu) {
            menu.classList.add('hidden');
        }
    });

    dropdownMenu.classList.toggle('hidden');
}

// Close the dropdowns when clicking outside of them
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-container')) {
        const dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach((menu) => {
            menu.classList.add('hidden');
        });
    }
   
});

// Attach event listener to each dropdown button
const dropdownButtons = document.querySelectorAll('.dropdown-container a');
dropdownButtons.forEach((button) => {
    button.addEventListener('click', toggleDropdown);
});

// nav active
const navItems = document.querySelectorAll('#menu .nav-item');
    navItems.forEach(item => {
        if(breakpoint.matches){
            item.addEventListener("click", () => {
                // Remove the active class from all items
                navItems.forEach(navItem => {
                    navItem.classList.remove("active");
                    navItem.classList.remove("text-hitam");
                });
                // Add the active class to the clicked item
                item.classList.add("active");
                item.classList.add("text-hitam");
            });
        }else{
            item.addEventListener("click", () => {
                // Remove the active class from all items
                navItems.forEach(navItem => {
                    navItem.classList.remove("active");
                    navItem.querySelector('a').classList.remove("bcg-nav");
    
                });
                // Add the active class to the clicked item
                item.classList.add("active");
                item.querySelector('a').classList.toggle("bcg-nav");
            });
        }
       
    });


    const humberger = document.getElementById('humberger-2');
    const navMenu = document.getElementById('nav-menu');
    humberger.addEventListener('click', () => {
        const hasHiddenClass = navMenu.classList.contains('hidden');
        if(hasHiddenClass){
            navMenu.classList.remove('hidden');
        }else{
            navMenu.classList.add('hidden');

        }

    })

