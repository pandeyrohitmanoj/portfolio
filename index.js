
// Initialize EmailJS with your user ID
emailjs.init('jiNZ2YVmdz_LkV5et');

// Function to send the email
function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the form inputs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Parameters for the email template
  const templateParams = {
    name,
    email,
    message,
  };

  // Send the email using EmailJS
  emailjs.send('template_91ou5y6', 'service_rh8ymp9', templateParams)
    .then(function(response) {
      console.log('Email sent successfully:', response.status, response.text);
      // You can add any success message or further actions here
    }, function(error) {
      console.log('Error sending email:', error);
      // You can add an error message or handle the error condition here
    });

  // Clear the form inputs
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

// Attach the sendEmail function to the form's submit event
document.getElementById('myForm').addEventListener('submit', sendEmail);
// Check the browser's preferred color scheme
function detectPreferredColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Toggle dark mode on button click
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Toggle sidebar on hamburger icon click
  function toggleSidebar() {
    const hamburegerIcon = document.getElementsByClassName('hamburger')[0]
    const element = document.getElementById('sidebar')
    hamburegerIcon.classList.toggle('open')
    const isOpen = hamburegerIcon.classList[1]
    if(!isOpen){
        element.style.display='none'
    }else{
        element.style.display='block'
 
    }
  }
  
  // Add event listeners
  const switchDarkModeButton = document.getElementById('switch-dark-mode-button');
  switchDarkModeButton.addEventListener('click', toggleDarkMode);
  const hamburgerIcon = document.getElementsByClassName('hamburger')[0];
  hamburgerIcon.addEventListener('click', toggleSidebar);
  
  // Run the detectPreferredColorScheme function on page load
  detectPreferredColorScheme();


  function scrollToClass( className ) {
    const element = document.querySelector(`.${className}`)
    //console.log(element)
    if( element ) {
      element.scrollIntoView({behavior:"smooth"})
    }
  }

  function openProject() {
    window.location.href = 'project-1.html';
  }