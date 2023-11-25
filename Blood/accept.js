document.addEventListener('DOMContentLoaded', function () {
  const displayButton = document.getElementById('displayButton');
  displayButton.addEventListener('click', displayDonorData);

  function displayDonorData() {
    // Retrieve donor data from localStorage
    const donorData = JSON.parse(localStorage.getItem('donorData'));

    if (donorData && donorData.length > 0) {
      // Display donor data on the page
      const dataContainer = document.getElementById('dataContainer');
      dataContainer.innerHTML = ''; // Clear previous data

      donorData.forEach((donor, index) => {
        const donorInfo = document.createElement('div');
        donorInfo.innerHTML = `<strong>Donor #${index + 1}:</strong> ${JSON.stringify(donor)}`;
        dataContainer.appendChild(donorInfo);
      });
    } else {
      alert('No donor data found.');
    }
  }
});
