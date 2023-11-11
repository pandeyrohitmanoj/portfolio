


const element = document.querySelectorAll('.hidden');
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger when at least 50% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      }else {
        entry.target.classList.remove('show')
      }
    });
}, options);

// Start observing the element
// observer.observe(element);
element.forEach( ele => observer.observe(ele) )

// Initialize EmailJS with your user ID
emailjs.init('jiNZ2YVmdz_LkV5et');

// Function to send the email
function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the form inputs
  
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Parameters for the email template
  const templateParams = {
    reply_to:'rohitpandey20002017@gmail.com',
    email,
    subject:'from portfolio',
    message,
  };

  // Send the email using EmailJS
  emailjs.send('service_rh8ymp9', 'template_91ou5y6', templateParams)
    .then(function(response) {
      console.log('Email sent successfully:', response.status, response.text);
      // You can add any success message or further actions here
    }, function(error) {
      console.log('Error sending email:', error);
      // You can add an error message or handle the error condition here
    });
    const dialog = document.querySelector('dialog')
    dialog.showModal()

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
  // const switchDarkModeButton = document.getElementById('switch-dark-mode-button');
  // switchDarkModeButton.addEventListener('click', toggleDarkMode);
  // const hamburgerIcon = document.getElementsByClassName('hamburger')[0];
  // hamburgerIcon.addEventListener('click', toggleSidebar);
  
  // Run the detectPreferredColorScheme function on page load
  // detectPreferredColorScheme();


  function scrollToClass( className ) {
    const element = document.querySelector(`.${className}`)
    console.log(element)
    if( element ) {
      element.scrollIntoView({behavior:"smooth"})

    }
  }

  function openProject() {
    window.location.href = 'project-1.html';
  }

  function reachSocialMediaForIcon( iconName ){
    switch(iconName){
      case "github":
      window.location.href='https://github.com/pandeyrohitmanoj'
      break
      case "facebook":
      window.location.href='https://www.facebook.com/profile.php?id=100021839953940'
      break
      case "instagram":
      window.location.href='https://www.instagram.com/rohit_red_arcade/'
      break
      case "twitter":
      window.location.href='https://twitter.com/pandeyg42848875'
      break
      case "linkedin":
      window.location.href='https://www.linkedin.com/in/rohit-pandey-3a4354167/'
      break
    }
  }

  
  function handleDialogBox() {
    const dialog = document.querySelector('dialog')
    dialog.close()
  }