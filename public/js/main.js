document.addEventListener('DOMContentLoaded', () => {
    function menuMob() {
        const link = document.querySelectorAll('.mobilelink');
        const btn = document.querySelector('.mobile_menu');
        const block = document.querySelector('.header__menu_tel');

        link.forEach((btn) => {
            btn.addEventListener('click', (e) => {

                block.style.display = 'none';
            });
        });

        btn.addEventListener('click', (e) => {

            block.style.display = 'block';
        });

    }
    menuMob();

    function gameBlock() {
        const btnMore1 = document.querySelector('#changebtn__all1');
        const btnList1 = document.querySelector('#changebtn__list1');
        const smalldescription1 = document.querySelector('.change__info_small1');
        const fulldescription1 = document.querySelector('.change__info__more1');
        const btnMore2 = document.querySelector('#changebtn__all2');
        const btnList2 = document.querySelector('#changebtn__list2');
        const smalldescription2 = document.querySelector('.change__info_small2');
        const fulldescription2 = document.querySelector('.change__info__more2');
        const btnMore3 = document.querySelector('#changebtn__all3');
        const btnList3 = document.querySelector('#changebtn__list3');
        const smalldescription3 = document.querySelector('.change__info_small3');
        const fulldescription3 = document.querySelector('.change__info__more3');

        const btnMore4 = document.querySelector('#changebtn__all4');
        const btnList4 = document.querySelector('#changebtn__list4');
        const smalldescription4 = document.querySelector('.change__info_small4');
        const fulldescription4 = document.querySelector('.change__info__more4');
        const btnMore5 = document.querySelector('#changebtn__all5');
        const btnList5 = document.querySelector('#changebtn__list5');
        const smalldescription5 = document.querySelector('.change__info_small5');
        const fulldescription5 = document.querySelector('.change__info__more5');
        const btnMore6 = document.querySelector('#changebtn__all6');
        const btnList6 = document.querySelector('#changebtn__list6');
        const smalldescription6 = document.querySelector('.change__info_small6');
        const fulldescription6 = document.querySelector('.change__info__more6');
        const btnMore7 = document.querySelector('#changebtn__all7');
        const btnList7 = document.querySelector('#changebtn__list7');
        const smalldescription7 = document.querySelector('.change__info_small7');
        const fulldescription7 = document.querySelector('.change__info__more7');
        const btnMore8 = document.querySelector('#changebtn__all8');
        const btnList8 = document.querySelector('#changebtn__list8');
        const smalldescription8 = document.querySelector('.change__info_small8');
        const fulldescription8 = document.querySelector('.change__info__more8');

        btnMore1.addEventListener('click', (e) => {
            e.preventDefault();
            smalldescription1.style.display = 'none';
            fulldescription1.style.display = 'block';
            btnMore1.style.color = '#fff';
            btnList1.style.color = '#5a83e6';
        });

        btnList1.addEventListener('click', (e) => {
            e.preventDefault();
            fulldescription1.style.display = 'none';
            smalldescription1.style.display = 'block';
            btnList1.style.color = '#fff';
            btnMore1.style.color = '#5a83e6';
        });

        btnMore2.addEventListener('click', (e) => {
            e.preventDefault();
            smalldescription2.style.display = 'none';
            fulldescription2.style.display = 'block';
            btnMore2.style.color = '#fff';
            btnList2.style.color = '#5a83e6';
        });

        btnList2.addEventListener('click', (e) => {
            e.preventDefault();
            fulldescription2.style.display = 'none';
            smalldescription2.style.display = 'block';
            btnList2.style.color = '#fff';
            btnMore2.style.color = '#5a83e6';
        });

        btnMore3.addEventListener('click', (e) => {
            e.preventDefault();
            smalldescription3.style.display = 'none';
            fulldescription3.style.display = 'block';
            btnMore3.style.color = '#fff';
            btnList3.style.color = '#5a83e6';
        });

        btnList3.addEventListener('click', (e) => {
            e.preventDefault();
            fulldescription3.style.display = 'none';
            smalldescription3.style.display = 'block';
            btnList3.style.color = '#fff';
            btnMore3.style.color = '#5a83e6';
        });

        btnMore4.addEventListener('click', (e) => {
            e.preventDefault();
            smalldescription4.style.display = 'none';
            fulldescription4.style.display = 'block';
            btnMore4.style.color = '#fff';
            btnList4.style.color = '#5a83e6';
        });

        btnList4.addEventListener('click', (e) => {
            e.preventDefault();
            fulldescription4.style.display = 'none';
            smalldescription4.style.display = 'block';
            btnList4.style.color = '#fff';
            btnMore4.style.color = '#5a83e6';
        });
        btnMore5.addEventListener('click', (e) => {
            e.preventDefault();
            smalldescription5.style.display = 'none';
            fulldescription5.style.display = 'block';
            btnMore5.style.color = '#fff';
            btnList5.style.color = '#5a83e6';
        });

        btnList5.addEventListener('click', (e) => {
            e.preventDefault();
            fulldescription5.style.display = 'none';
            smalldescription5.style.display = 'block';
            btnList5.style.color = '#fff';
            btnMore5.style.color = '#5a83e6';
        });
        btnMore6.addEventListener('click', (e) => {
            e.preventDefault();
            smalldescription6.style.display = 'none';
            fulldescription6.style.display = 'block';
            btnMore6.style.color = '#fff';
            btnList6.style.color = '#5a83e6';
        });

        btnList6.addEventListener('click', (e) => {
            e.preventDefault();
            fulldescription6.style.display = 'none';
            smalldescription6.style.display = 'block';
            btnList6.style.color = '#fff';
            btnMore6.style.color = '#5a83e6';
        });
        btnMore7.addEventListener('click', (e) => {
            e.preventDefault();
            smalldescription7.style.display = 'none';
            fulldescription7.style.display = 'block';
            btnMore7.style.color = '#fff';
            btnList7.style.color = '#5a83e6';
        });

        btnList7.addEventListener('click', (e) => {
            e.preventDefault();
            fulldescription7.style.display = 'none';
            smalldescription7.style.display = 'block';
            btnList7.style.color = '#fff';
            btnMore7.style.color = '#5a83e6';
        });
        btnMore8.addEventListener('click', (e) => {
            e.preventDefault();
            smalldescription8.style.display = 'none';
            fulldescription8.style.display = 'block';
            btnMore8.style.color = '#fff';
            btnList8.style.color = '#5a83e6';
        });

        btnList8.addEventListener('click', (e) => {
            e.preventDefault();
            fulldescription8.style.display = 'none';
            smalldescription8.style.display = 'block';
            btnList8.style.color = '#fff';
            btnMore8.style.color = '#5a83e6';
        });
    }
    gameBlock();


    function hideFormAfterSent() {
        const btnclose = document.querySelector('.btn-closess');
        const block1 = document.querySelector('.modal');
        const block2 = document.querySelector('#overlay');

        btnclose.addEventListener('click', (e) => {
            e.preventDefault();
            const block3 = document.querySelector('.modal-backdrop');
            block1.style.display = 'none';
            block2.style.display = 'none';
            block3.style.display = 'none';
        });
    }
    hideFormAfterSent();

});

