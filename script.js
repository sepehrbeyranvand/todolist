// //change the default color value
// $('input[type="color"]').val('#2f9aba');


// $('#taskSend').click(function(){
//     let Value = $('input').val();
//     let theColor = $('input[type="color"]').val();
//     let Activity =  $('#Activity').val();
//     let DateTime = $('input[type="datetime-local"]').val();
//     var datetime = new Date();
//     var now = datetime.toLocaleString();

//     $('.container-fluid').append('<div style="background-color:' + theColor + '" class="alert alert-dismissible w-75 d-flex fade show">' +
//     '<button class="btn-close" data-bs-dismiss="alert"></button>' +
//     '<div class="d-flex flex-column">'+
//     '<h3>' + Value + '</h3>' +
//     '<p class="text-sm text-muted"> '+ Activity + '</p>'+
//     '<p>' + now +'</p>'+
//     '</div>'+
//     '</div>');
//     $('input').val('');
// })

// $('#closeModal').click(function(){
//     $('#modalHelp').modal('hide');
// })



$(document).ready(function() {
    // Save the alert in local storage
    $('#taskSend').on('click', function(){
        let Value = $('input').val();
        let theColor = $('input[type="color"]').val();
        let Activity =  $('#Activity').val();
        let DateTime = $('input[type="datetime-local"]').val();
        var datetime = new Date();
        var now = datetime.toLocaleString();

        var alertId = localStorage.length;
        $('.container-fluid').append('<div id="alert' + alertId + '" style="background-color:' + theColor + '" class="alert alert-dismissible w-75 d-flex fade show" role="alert">' +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
        '<div class="d-flex flex-column">'+
        '<h3>' + Value + '</h3>' +
        '<p class="text-sm text-muted"> '+ Activity + '</p>'+
        '<p>' + now +'</p>'+
        '</div>'+
        '</div>');
        $('input').val('');

        // Save the alert data in local storage
        var alertData = {
            value: Value,
            color: theColor,
            activity: Activity,
            datetime: DateTime
        };
        localStorage.setItem('alert' + alertId, JSON.stringify(alertData));
    });

    // Retrieve and display saved alerts
    for(var i = 1; i <= localStorage.length; i++) {
        var storedAlert = JSON.parse(localStorage.getItem('alert' + i));
        $('.container-fluid').append('<div id="alert' + i + '" style="background-color:' + storedAlert.color + '" class="alert alert-dismissible w-75 d-flex fade show" role="alert">' +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
        '<div class="d-flex flex-column">'+
        '<h3>' + storedAlert.value + '</h3>' +
        '<p class="text-sm text-muted"> '+ storedAlert.activity + '</p>'+
        '<p>' + storedAlert.datetime +'</p>'+
        '</div>'+
        '</div>');
    }

    $('#closeModal').click(function(){
        $('#modalHelp').modal('hide');
    });

    // Save the close button click event in local storage
    $(document).on('click', '.alert .btn-close', function(){
        var alertId = $(this).parents('.alert').attr('id').replace("alert", "");
        localStorage.removeItem('alert' + alertId);
        $(this).parents('.alert').remove();
    });

    // Remove closed alerts from localStorage
    $('.container-fluid .alert').each(function() {
        var alertId = $(this).attr('id').replace("alert", "");
        localStorage.removeItem('alert' + alertId);
    });

    // Remove alerts from DOM when they are removed from localStorage
    for(var i = 1; i <= localStorage.length; i++) {
        var storedAlert = JSON.parse(localStorage.getItem('alert' + i));
        if ($('#alert' + i).length) {
            $('#alert' + i).remove();
        }
    }
});