// static/scripts/1-hbnb.js

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
});
