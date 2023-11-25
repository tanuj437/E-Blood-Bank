document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', submitForm);

    const donorData = [];
  
    function submitForm() {
      const form = document.getElementById('bloodDonationForm');
      const formData = new FormData(form);
      const formDataObject = {};
  
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      // Add the form data to the donorData array
      donorData.push(formDataObject);
  
      // Clear the form after submission 
      form.reset();
    }
  });
  