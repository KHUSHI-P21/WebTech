document.getElementById('book_det').addEventListener('submit', async function(event) {
    event.preventDefault();
    const Passengers = document.getElementById('Passengers').value;
    const Depart = document.getElementById('depart').value;
    const Arrive = document.getElementById('arrive').value;
    const Name = document.getElementById('name').value;
    const Phone = document.getElementById('Phone').value;
    const Altph = document.getElementById('altphno').value;
    const Email = document.getElementById('Email').value;
    var Choice=document.getElementById('package').value;
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({Passengers,Depart,Arrive,Name,Phone,Altph,Email,Choice }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert('Hello '+Name+'\nBooking Confirmed '+'\nFrom: '+Depart+' To: '+Arrive+"\nYour total Bill is  "+Number(Choice)*Number(Passengers)+"\nPlease click on 'proceed for payment' to pay");


      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  });
  