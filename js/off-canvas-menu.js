(function(){
    var shadeElement = document.getElementsByClassName("shade")[0];
    var menuIconElement = document.getElementsByTagName("nav")[0];
    var menuElement = menuIconElement.getElementsByTagName("ul")[0];
    var bodyElement = document.getElementsByTagName("body")[0];

    var menuIsOpen = false;

    var toggleMenu = function(){
        toggleShade();
        toggleMenuIconColor();
        //toggleScrolling();
        var displayStatus = menuElement.style.display;
        if (menuIsOpen){
            menuElement.style.display = "none";
            menuIsOpen = false;
        } else {
            menuElement.style.display = "block";
            menuIsOpen = true;
        }
    };
    var toggleShade = function(){
        var displayStatus = shadeElement.style.display;
        if (menuIsOpen){
            shadeElement.style.display = "none";
        } else {
            shadeElement.style.display = "block";
        }
    };
    var toggleMenuIconColor = function(){
        var iconColor = menuIconElement.style.color;
        if (!menuIsOpen){
            menuIconElement.style.color = "white";
        } else {
            menuIconElement.style.color = "black";
        }
    };
    var toggleScrolling = function(){
        if (!menuIsOpen && window.innerHeight > 400){
            bodyElement.style.overflowY = "hidden";
        } else {
            bodyElement.style.overflowY = "auto";
        }
    };
    var resizeHandler = function(){
        if (window.innerWidth >= 1100 && !menuIsOpen){
            toggleMenu();
        }
    }
    shadeElement.addEventListener("click", toggleMenu);
    menuIconElement.addEventListener("click", toggleMenu);
    window.addEventListener("resize", resizeHandler);
})();
