
$(document).ready(function() {
  // Your existing code
  $('input[type="color"]').val('#2f9aba');

  $('#taskSend').click(function() {
    let Value = $('input').val();
    let theColor = $('input[type="color"]').val();
    let Activity = $('#Activity').val();
    let DateTime = $('input[type="datetime-local"]').val();
    var datetime = new Date();
    var now = datetime.toLocaleString();

    // Append the alert to the container
    $('.container-fluid').append('<div style="background-color:' + theColor + '" class="alert alert-dismissible w-75 d-flex fade show">' +
      '<button class="btn-close" data-bs-dismiss="alert"></button>' +
      '<div class="d-flex flex-column">' +
      '<h3>' + Value + '</h3>' +
      '<p class="text-sm text-muted">' + Activity + '</p>' +
      '<p>' + now + '</p>' +
      '</div>' +
      '</div>');

    // Clear the input fields
    $('input').val('');

    // Store the alert data in localStorage
    var alertData = {
      value: Value,
      color: theColor,
      activity: Activity,
      datetime: now
    };
    var alertsJSON = localStorage.getItem('alerts');
    if (alertsJSON) {
      alertsJSON = JSON.parse(alertsJSON);
      alertsJSON.push(alertData);
    } else {
      alertsJSON = [alertData];
    }
    localStorage.setItem('alerts', JSON.stringify(alertsJSON));
  });

  // Retrieve and display stored alerts when the page loads
  function displayStoredAlerts() {
    var alertsJSON = localStorage.getItem('alerts');
    if (alertsJSON) {
      var alertsArray = JSON.parse(alertsJSON);

      // Iterate through the alerts array and display each alert in the container
      alertsArray.forEach(function(alertData) {
        $('.container-fluid').append('<div style="background-color:' + alertData.color + '" class="alert alert-dismissible w-75 d-flex fade show">' +
          '<button class="btn-close" data-bs-dismiss="alert"></button>' +
          '<div class="d-flex flex-column">' +
          '<h3>' + alertData.value + '</h3>' +
          '<p class="text-sm text-muted">' + alertData.activity + '</p>' +
          '<p>' + alertData.datetime + '</p>' +
          '</div>' +
          '</div>');
      });
    }
  }
  displayStoredAlerts();

  // Add click event listener to delete all alerts
  $('#removeAllAlerts').click(function() {
    localStorage.clear();
    $('.container-fluid .alert').remove();
  });
});












$('#closeModal').click(function(){
    $('#modalHelp').modal('hide');
})


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})