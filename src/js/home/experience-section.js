const openClass = "open"

$(".time-card").each(function (i){
    const card = $(this)
    const content = card.find(".foldable-content")
    const btn = card.find(".card-btn")

    btn.click(function (){
        // $(".foldable-content").slideUp()
        if (card.hasClass(openClass)){
            card.removeClass(openClass)
            content.slideUp()
        } else {
            card.addClass(openClass)
            content.slideDown()
        }
    })

    card.focusout(function (){
        $(".foldable-content").slideUp()
        $(".time-card").removeClass(openClass)
    })
})