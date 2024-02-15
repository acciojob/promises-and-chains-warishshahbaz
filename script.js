//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', (event) => {
  event.preventDefault();
  
  const age = parseInt(document.getElementById('age').value);
  const name = document.getElementById('name').value;
  
  if (!age || !name) {
    alert('Please fill in all fields');
    return;
  }
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
  
  promise.then((message) => {
    alert(message);
  }).catch((error) => {
    alert(error);
  });
});