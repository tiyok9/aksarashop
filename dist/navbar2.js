
const breakpoint = window.matchMedia('(min-width: 1024px)');
if(breakpoint.matches){
    document.querySelector('#menu .nav-item.active a').classList.remove('bcg-nav');

    const navHover = document.querySelectorAll('#menu .nav-item');
    navHover.forEach(nav => {
        nav.addEventListener('mouseover', (e) => {
            nav.querySelector('a').classList.toggle('text-white');
            nav.querySelector('svg').classList.toggle('text-white');
        });
        nav.addEventListener('mouseout', (e) => {
            nav.querySelector('a').classList.remove('text-white');
            nav.querySelector('svg').classList.remove('text-white');
        });
    })

}
else{
    document.querySelector('#menu .nav-item.active a').classList.add('bcg-nav');
}
function changeBg() {
    const navbar = document.getElementById('navbar');
    const menu = document.getElementById('menu');
    const humberger = document.getElementById('humberger').querySelector('svg');
    const glider = document.getElementById('glider');
    const navText = document.querySelector('#menu .nav-item.active ');
    const navHover = document.querySelectorAll('#menu .nav-item');
    const scrollVal = window.scrollY;
    const isScrolled = scrollVal >= 80;

    // Toggle classes based on the scroll position
    humberger.classList.toggle('text-black', !isScrolled);
    humberger.classList.toggle('hover:text-black/50', !isScrolled);
    humberger.classList.toggle('text-white', isScrolled);
    humberger.classList.toggle('hover:text-white/50', isScrolled);

    navbar.classList.toggle('bg-transparent', !isScrolled);
    navbar.classList.toggle('backdrop-blur-xl', isScrolled);
    navbar.classList.toggle('bg-hitam', isScrolled);
    navbar.classList.toggle('duration-75', isScrolled);
    navbar.querySelector('div h1').classList.toggle('text-white', isScrolled);
    navbar.querySelector('div h1').classList.toggle('text-black', !isScrolled);
    if(breakpoint.matches){
        menu.classList.toggle('md:text-black', !isScrolled);
        menu.classList.toggle('md:text-white', isScrolled);

        navHover.forEach(nav => {
            nav.addEventListener('mouseover', (e) => {
                nav.querySelector('a').classList.toggle('text-hitam', isScrolled);
                nav.querySelector('a').classList.toggle('text-white', !isScrolled);
                nav.querySelector('svg').classList.toggle('text-hitam', isScrolled);
                nav.querySelector('svg').classList.toggle('text-white', !isScrolled);
            });
            nav.addEventListener('mouseout', (e) => {
                nav.querySelector('a').classList.remove('text-white', isScrolled);
                nav.querySelector('a').classList.remove('text-hitam', !isScrolled);
                nav.querySelector('svg').classList.remove('text-white', isScrolled);
                nav.querySelector('svg').classList.remove('text-hitam', !isScrolled);
            });
        })
        glider.classList.toggle('bg-white', isScrolled);
        glider.classList.toggle('bg-hitam', !isScrolled);
       
        navText.classList.toggle('text-hitam', isScrolled);
        navText.classList.toggle('text-white', !isScrolled);
    
    }
}

window.addEventListener('scroll',changeBg);




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
                    navItem.classList.remove("text-white");
                    navItem.classList.remove("text-hitam");
    
                });
    
                // Add the active class to the clicked item
                item.classList.add("active");
                const scrollVal = window.scrollY;
                const isScrolled = scrollVal >= 80;
                if(isScrolled){
                   item.classList.add("text-hitam");
                }else{
                   item.classList.add("text-white");
                }
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


    const humberger = document.getElementById('humberger');
    const navMenu = document.getElementById('nav-menu');
    humberger.addEventListener('click', () => {
        const hasHiddenClass = navMenu.classList.contains('hidden');
        if(hasHiddenClass){
            navMenu.classList.remove('hidden');
        }else{
            navMenu.classList.add('hidden');

        }

    })
