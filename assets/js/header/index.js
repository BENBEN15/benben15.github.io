import $ from "jquery";

const openClass = "open"
const header = $("header")
const links = $(".header-menu-link")

//Menu toggle button actions
$("#toggleHeader").click(function (){
    if(!IsMenuOpen()){
        OpenMenu()
    } else {
        CloseMenu()
    }
})

//Click outside of menu actions
$(document).click(function (event) {
    if((!$.contains(header[0], event.target)) && (!$.contains($("#toggleHeader")[0], event.target))){
        if(IsMenuOpen()) CloseMenu()
    }
})

//Close menu on navigation
links.click(function (){
    CloseMenu()
})

//Press escape actions
$(document).on('keydown', function(event) {
    if (event.key === "Escape") {
        CloseMenu()
    }
});


//Menu functions
function IsMenuOpen(){
    return header.hasClass(openClass)
}

function OpenMenu(){
    header.addClass(openClass)
    links.each(function (){
        $(this).attr("tabindex","0")
    })
}

function CloseMenu(){
    header.removeClass(openClass)
    links.each(function (){
        $(this).attr("tabindex","-1")
    })
}