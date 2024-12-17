const scriptURL = 'https://script.google.com/macros/s/AKfycbxLQXq8RnJTyEXU9nAbdln3rbpJWadsJpiwXGhvwZcbsfi0O18TvAfe9ohmbhM1hOl1/exec'

const form = document.forms['HealthData']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Data successfully submitted." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})