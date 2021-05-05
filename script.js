                                    // SELECTORS =============================================================================================

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


                                    // EVENT LISTENERS ========================================================================================

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

                                    // FUNCTIONS ==============================================================================================

    function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

    function close(){
        mainMenu.style.top = '-100%';
    }