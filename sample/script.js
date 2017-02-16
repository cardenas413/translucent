$(document).ready(function(){
    var $c = $('#cw');
    $c.translucent('#bgEl',{
        filterValue : 5,
        cardColor : 'white',
        draggable : true,
        shadow : true
    }).position({
        my: 'center',
        at: 'center',
        of: '#bgEl'
    }).draggable({
        containment: '#bgEl',
        start: function(event, ui) {
                $(this).css({
                    'box-shadow': '0px 40px 30px rgba(0,0,0,0.7)'
                });
        },
        stop: function(event, ui) {
                $(this).css({
                    'box-shadow': '0px 20px 20px rgba(0,0,0,0.5)'
                });
        }
    });
});