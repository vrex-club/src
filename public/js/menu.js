function openCity(evt, cityName) {
    var i, tabstovarcartcontent, tabstovarcartlinks;
    tabstovarcartcontent = document.getElementsByClassName("tabstovarcartcontent");
    for (i = 0; i < tabstovarcartcontent.length; i++) {
        tabstovarcartcontent[i].style.display = "none";
    }
    tabstovarcartlinks = document.getElementsByClassName("tabstovarcartlinks");
    for (i = 0; i < tabstovarcartlinks.length; i++) {
        tabstovarcartlinks[i].className = tabstovarcartlinks[i].className.replace(" active", "");
        tabstovarcartlinks[0].className = tabstovarcartlinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.querySelectorAll('.mobile_menu_container .parent').forEach(parent => {
    parent.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelectorAll(".mobile_menu_container .activity").forEach(cont_act => cont_act.classList.remove('activity'));
        ['loaded', 'activity'].map(class_name => this.parentNode.querySelector('ul').classList.add(class_name))
    })
})
document.querySelectorAll('.mobile_menu_container .back').forEach(back => back.addEventListener('click', e => {
    e.preventDefault()
    document.querySelectorAll('.mobile_menu_container .activity').forEach(cont_act => cont_act.classList.remove('activity'));
    e.target.parentNode.parentNode.classList.remove('loaded')
    e.target.parentNode.parentNode.parentNode.classList.add('activity')
}))
document.querySelector('.mobile_menu').addEventListener('click', e => {
    e.preventDefault()
    document.querySelectorAll('.mobile_menu_container').forEach(mobcont => mobcont.classList.add('loaded'))
    document.querySelectorAll('.mobile_menu_overlay').forEach(overlay => fadeIn(overlay, 300))
})
document.querySelectorAll('.mobile_menu_overlay').forEach(overlay => overlay.addEventListener('click', async e => {
    document.querySelectorAll('.mobile_menu_container').forEach(cont => cont.classList.remove('loaded'))
    await fadeOut(overlay)
    document.querySelectorAll(".mobile_menu_container .loaded").forEach(cont_load => cont_load.classList.remove("loaded"))
    document.querySelectorAll(".mobile_menu_container .activity").forEach(cont_load => cont_load.classList.remove("loaded"))
}))
function fadeIn(el, time = 300) {
    el.style.opacity = 0;
    var last = +new Date();
    var tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        } else {
            el.style.display = 'block'
        }
    };
    tick();
}
function fadeOut(el, time = 300) {
    el.style.opacity = 1;
    var last = +new Date();
    var tick = function () {
        el.style.opacity = +el.style.opacity - (new Date() - last) / time;
        last = +new Date();
        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        } else {
            el.style.display = 'none'
        }
    };
    tick();
}