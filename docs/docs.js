var current_page = false;

$(document).ready(function () {

	$.SyntaxHighlighter.init();

    if (window.location.hash) {
        var hash = window.location.hash.replace("#/", "");
        doLoad(hash);
        $(".sidebar ul li.active").removeClass("active");
        $("a[href^='" + hash + "']").parent("li").addClass("active");
    } else {
       doLoad('pages/intro.html');
    }
    $(".sidebar ul li").on("click", "a", function (e) {
        e.preventDefault();
        window.location.hash = "/" + $(this).attr("href");
        if ($(this).attr("href") != current_page) {
            $(".sidebar ul li.active").removeClass("active");
            doLoad($(this).attr('href'));
            $(this).parent("li").addClass("active");
        }
    });
    
    function doLoad(location) {
    	current_page = location;
	    $('#content').load(location, function() {
	    	afterLoad();
	    });
    }
    
    function afterLoad() {
    	$('pre.highlight').each(function() {
    		$(this).html($(this).html().replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;'))
    	});
    	
		$.SyntaxHighlighter.init();
    }
    
})