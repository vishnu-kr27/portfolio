
emailjs.init("7T0ymTq_e8ExA6v6h"); 


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    
});
emailjs.send('service_bnjallm', 'template_g9unqoo', formData)
        .then(function(response) {
            
            console.location.href = 'successpge.html';
          
            
        }, function(error) {
            console.error('Failed to send email:', error);
           
        });


