var clicks = [],
$('.clickable').bind('click', function (ev) {
    var $div = $(ev.target);
    
    var offset = $div.offset();
    var x = ev.clientX - offset.left;
    var y = ev.clientY - offset.top;

});