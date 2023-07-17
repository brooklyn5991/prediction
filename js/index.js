const buttonEl = document.querySelector('#button')

    $(document).ready(function() {
      $('form').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        var name = $('#nameInput').val(); // Get the entered name

        // Make an AJAX request to the Genderize API
        $.ajax({
          url: 'https://api.genderize.io',
          data: { name: name },
          success: function(response) {
            var gender = response.gender; // Extract the gender from the API response
            $('#result').text('Your gender: ' + gender);
          }, 
          error: function() {
            $('#result').text('Error occurred while fetching the gender.');
          }
          });
         });
      });

    $(document).ready(function(myCountry) {
        $.getJSON("https://api.country.is", function(data) { 
          const countryEl = document.querySelector('#country');

          if (data.country === 'NG') {
            countryEl.textContent = `Country : Nigeria`
          } else {
            countryEl.textContent = `Country : ${data.country}`
          }
          
          
        });
      });