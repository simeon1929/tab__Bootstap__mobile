
$(document).ready(function () {
    if($(window).width() < 767 ){
        $('.st-tab-btn').each(function(){
            var ActiveTabName = $(this).find('.nav-link.active').text();
            $('<div class="select-filter">'+ActiveTabName+'</div>').prependTo(this).find('.st-tab-btn');
        });
        $('.select-filter').click(function() {
            $(this).next('ul').slideToggle('600');
        });
        $('.st-tab-btn ul.nav button').click(function() {
            var text = $(this).text();
            $(this).parents('ul').prev('.select-filter').text(text);
            $(".st-tab-btn ul.nav").hide(300);
        });
    }
})

// function jqueryTabs() {
//     if($(window).width() < 767 ){
        
//     }
// }

// jQuery(window).load(function() {
//     jqueryTabs()
// });
// jQuery(window).resize(function(){
//     jqueryTabs();
// });