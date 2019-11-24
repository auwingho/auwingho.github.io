jQuery(function() {
    //Box 1: reveal immediately - on page load
    //NOTE: id does refer to an element id, It is used to
    //      uniquely refer to the element to be revealed.
    var options1 = {
        id: 'box1'
    };
    $('.box1').initReveal(options1);
});