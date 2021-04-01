$(function() {
    $(".faqHeader").on('click', function() {
        const description = $(this).parent().find(".faqDescription");
        description.slideToggle();

        if (description.is(":visible")) {
            $(this).find(".faqOpen").css({ transform: "rotate(180deg)" });
        } else {
            $(this).find(".faqOpen").css({ transform: "rotate(0deg)" });
        }
    });
});