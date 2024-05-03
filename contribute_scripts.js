function highlightElement(id, color) {
    var element = document.getElementById(id);
    element.style.backgroundColor = color;
}

function unhighlightElement(id, originalColor) {
    var element = document.getElementById(id);
    element.style.backgroundColor = originalColor; // Set it to the color passed as a parameter
}


$(document).ready(function() {
    var lastScrollTop = 0;
    // Select the content blocks by ID
    var $largeContributions = $('#large-contributions');
    $largeContributions.hover(
        function() { // Mouse enters
            $largeContributions.addClass('hover-up');
        },
        function() { // Mouse leaves
            $largeContributions.removeClass('hover-up');
        }
    );


});



$(document).ready(function() {
    var lastScrollTop = 0;

    // Select the content blocks by ID
    var $howContributions = $('#how-contributions');
    

    $howContributions.hover(
        function() { // Mouse enters
            $howContributions.addClass('hover-up');
        },
        function() { // Mouse leaves
            $howContributions.removeClass('hover-up');
        }
    );


});


$(document).ready(function() {
    var lastScrollTop = 0;

    // Select the content blocks by ID
    
    var $whyContributions = $('#why-contributions');


    $whyContributions.hover(
        function() { // Mouse enters
            $whyContributions.addClass('hover-up');
        },
        function() { // Mouse leaves
            $whyContributions.removeClass('hover-up');
        }
    );


});