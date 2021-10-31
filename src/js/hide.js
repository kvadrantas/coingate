function hide(e) {
    let navMenuDom = document.getElementById('nav-menu');

    navMenuDom.classList.toggle('hide');

    console.log(navMenuDom.style.display)
    console.log('clicked');
}

export default hide;