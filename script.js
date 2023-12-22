document.addEventListener('DOMContentLoaded', function () {
  // Add event listener for the contact form submission
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      handleFormSubmission();
    });
  }

  function handleFormSubmission() {
    // You can add form validation logic here
    // For example, check if required fields are filled

    // Dummy action for demonstration
    alert('Form submitted successfully!');
  }
});
