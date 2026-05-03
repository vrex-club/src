function allGame(query) {
    const btn = document.querySelector(`.${query}`);
    const blockGame = document.querySelector(`.${query}__block`);
    btn.addEventListener("mouseover", () => {
        blockGame.style.display = 'block';
    });
    btn.addEventListener('mouseleave', () => {
        blockGame.style.display = 'none';
    });

}
allGame('linckgame');
allGame('addresslink')

function hideButtonCall() {
    const btn = document.querySelector('.mobile_menu_container ul li a.parent');
    const btnTwo = document.querySelector('.mobile_menu_container ul li a.back');
    const block = document.querySelector('.mobile_menu_content .btn');
    btn.addEventListener('click', () => {
        block.style.display = 'none';
    });
    btnTwo.addEventListener('click', () => {
        block.style.display = 'block';
    });

}
//hideButtonCall();
