const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the last form submission time from localStorage
  const lastSubmissionTime = localStorage.getItem('lastFormSubmissionTime');

  // Check if the form has been submitted within the last 24 hours
  if (lastSubmissionTime && (Date.now() - lastSubmissionTime) < 24 * 60 * 60 * 1000) {
    // Redirect the user to a different website
    window.location.href = 'https://www.stickergenius.com/wp-content/uploads/2020/09/back2school-covid-RED-08.jpg';
  } else {
    // Update the last submission time in localStorage
    localStorage.setItem('lastFormSubmissionTime', Date.now());

    // Submit the form
    form.submit();
  }
});