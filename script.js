//change the default color value
$('input[type="color"]').val('#2f9aba');

$('#taskSend').click(function(){
    let Value = $('input').val();
    let theColor = $('input[type="color"]').val();
    let selectUser =  $('select').val();

    $('.container-fluid').append('<div style="background-color:' + theColor + '" class="alert alert-dismissible w-75 d-flex fade show">' +
    '<button class="btn-close" data-bs-dismiss="alert"></button>' +
    '<div class="d-flex flex-column">'+
    '<h1>' + Value + '</h1>' +
    '<p class="text-sm text-muted"> '+ selectUser + '</p>'+
    '</div>'+
    '</div>');
    $('input').val('');
})

$('#closeModal').click(function(){
    $('#modalHelp').modal('hide');
})