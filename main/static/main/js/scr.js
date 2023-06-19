function toggleMenu() {
    fetch('/toggle_menu/')
        .then(response => response.json())
        .then(data => {
            var menu = document.querySelector("nav");
            menu.classList.toggle("showing");
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function home() {
    fetch('/home/')
        .then(response => response.json())
        .then(data => {
            const nav = document.querySelector('nav');
            if (nav.classList.contains('showing')) {
              nav.classList.remove('showing');
            }
            var home = document.getElementById("home");
            var zd = document.getElementById("zd");
            var gw = document.getElementById("gw");
            home.style.display = "block";
            zd.style.display = "block";
            gw.style.display = "none";
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function gw() {
    fetch('/gw/')
        .then(response => response.json())
        .then(data => {
            const nav = document.querySelector('nav');
            if (nav.classList.contains('showing')) {
              nav.classList.remove('showing');
            }
            var zd = document.getElementById("zd");
            var gw = document.getElementById("gw");
            zd.style.display = "none";
            gw.style.display = "block";
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function zd() {
    const nav = document.querySelector('nav');
    if (nav.classList.contains('showing')) {
        nav.classList.remove('showing');
    }
    var home = document.getElementById("home");
    var zd = document.getElementById("zd");
    var gw = document.getElementById("gw");
    home.style.display = "block";
    zd.style.display = "block";
    gw.style.display = "none";
}

function button() {
    var accept = document.getElementById("accept");
    accept.style.display = "none";
}