document.addEventListener("DOMContentLoaded", function() {
    fetchAdvice();
  });

  function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then(data => {
        displayAdvice(data.slip.advice);
      })
      .catch(error => {
        console.log("Error fetching advice:", error);
      });
  }

  function displayAdvice(advice) {
    document.getElementById('advice').textContent = advice;
  }