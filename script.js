function openDropdownMenu(option) {
    let selected = $(option).parents("li").children("ul");
    $(".desktop").find("a").removeClass("selected");
    $(".mobile").find("a").removeClass("selected");
    $(option).toggleClass("selected");
    $(".dropdown-menu").removeClass("open");
    $(selected).toggleClass("open");

}
$(document).ready(function () {
});
function navMobile() {
    $(".mobileOption").toggleClass("open");
}