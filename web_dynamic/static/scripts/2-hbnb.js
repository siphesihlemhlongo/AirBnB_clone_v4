$(document).ready(function() {
  let amenitiesChecked = {};

  $('input[type="checkbox"]').change(function() {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).prop('checked')) {
      amenitiesChecked[amenityId] = amenityName;
    } else {
      delete amenitiesChecked[amenityId];
    }

    updateAmenitiesList();
  });

  function updateAmenitiesList() {
    const amenitiesList = Object.values(amenitiesChecked).join(', ');
    $('div.Amenities h4').text('Amenities: ' + amenitiesList);
  }

  // New code for checking API status
  function checkAPIStatus() {
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
  }

  // Check API status initially
  checkAPIStatus();

  // Set up periodic API status checks (every 10 seconds in this example)
  setInterval(checkAPIStatus, 10000);
});
