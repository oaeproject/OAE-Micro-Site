(function casestudies() {

    var switchCaseStudy = function(caseStudy) {
        $('.cs_case_container').hide();
        $('.cs_case_container.' + caseStudy).show();
    };

    var init = function() {
        $('#cs_carousel_container ul li').click(function() {
            $('#cs_carousel_container ul li').removeClass('active');
            $(this).addClass('active');
            switchCaseStudy($(this).attr('data-case'));
        });
    };

    $(document).ready(init);
})();