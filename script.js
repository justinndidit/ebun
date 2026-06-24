document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const button = form.querySelector('button[type="submit"]');
  const originalText = button.textContent;
  
  button.textContent = 'Sending...';
  button.disabled = true;

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert('Thank you! Your enquiry has been sent successfully.');
      form.reset();
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    alert('Error sending message. Please try again.');
    console.error(error);
  } finally {
    button.textContent = originalText;
    button.disabled = false;
  }
});
