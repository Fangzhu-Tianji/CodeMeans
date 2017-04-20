define("common/nav.js", [], function (require) {
    function heightNav(navId) {
        if (navId) {
            var object = document.getElementById("nav-" + navId);
            if (object) object.className += " select";
        }
    }
    return heightNav;
});