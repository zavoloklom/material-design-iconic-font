/**
 * Created by Kupletsky Sergey on 16.12.14.
 *
 * Add JQuery animation to bootstrap dropdowns
 */

(function($) {
    $("body")
        // Add slidedown animation to dropdown
        .on('show.bs.dropdown', '.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        })
        // Add slideup animation to dropdown
        .on('hide.bs.dropdown', '.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });
})(jQuery);
