//change the default color value
$('input[type="color"]').val('#2f9aba');

$('taskSend').click(function(){
    let Value = $('input').val();
    let theColor = $('input[type="color"]').val();

    $('.container-fluid').append('<div style="background-color:' + theColor + '" class="alert alert-dismissible d-flex fade show">' +
    '<button class="btn-close" data-bs-dismiss="alert"></button>' +
    '<h1>' + Value + '</h1>' +
    '</div>');
    $('input').val('');
})

$('#closeModal').click(function(){
    $('.modal').modal('hide');
})