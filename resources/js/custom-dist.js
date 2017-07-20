jQuery(document).ready(function() {
    jQuery(".header.nav.content.row.box").on("click", function(n) {
        jQuery("#content").toggle("show");
    });
});