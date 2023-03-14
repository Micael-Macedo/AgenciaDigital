function openDropdownMenu(option) {
    let selected;
    if($(option).parents("div").hasClass("mobileOption")){
        selected = $(option).parents("div.navMenu").children("ul");
        console.log("Mobile")
    }
    else{
        selected = $(option).parents("li").children("ul");
        console.log("Desktop", selected)
    }
    $(".dropdown-menu").removeClass("open");
    if($(option).hasClass("selected")){
        $(".desktop").find("a").removeClass("selected");
        $(".mobile").find("a").removeClass("selected");
        $(option).removeClass("selected");
        $(selected).removeClass("open");
    }else{
        $(".desktop").find("a").removeClass("selected");
        console.log($(".mobile").find("a"))
        $(".mobileOption").find("a").removeClass("selected");
        $(option).addClass("selected");
        $(selected).addClass("open");
    }
}
function navMobile() {
    $(".mobileOption").toggleClass("open");
}