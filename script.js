 // JavaScript for dynamic password generation
 function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    const passwordLength = 12;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").textContent = password;
    document.getElementById("message").textContent = "New password generated!";
}

function copyToClipboard() {
    const password = document.getElementById("password").textContent;
    navigator.clipboard.writeText(password).then(() => {
        document.getElementById("message").textContent = "Password copied to clipboard!";
    });
}

function learnMore() {
    alert("Learn more about creating secure passwords and why they are essential.");
}


 // Optional: Add interactivity or animations if needed.
 const steps = document.querySelectorAll('.step');

 steps.forEach((step) => {
   step.addEventListener('mouseenter', () => {
     step.style.backgroundColor = '#292929';
   });

   step.addEventListener('mouseleave', () => {
     step.style.backgroundColor = '#1e1e1e';
   });
 });

 function toggleContent(id) {
    const content = document.getElementById(id);
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  } function toggleContent(id) {
    const content = document.getElementById(id);
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }

  const similarChars = "Il1O0";

  // Update password length display
  function updateLength() {
      const length = document.getElementById("password-length").value;
      document.getElementById("length-value").textContent = length;
  }

  // Generate password based on user preferences
  function generatePassword() {
      const uppercase = document.getElementById("uppercase").checked;
      const lowercase = document.getElementById("lowercase").checked;
      const numbers = document.getElementById("numbers").checked;
      const symbols = document.getElementById("symbols").checked;
      const excludeSimilar = document.getElementById("exclude-similar").checked;
      const length = document.getElementById("password-length").value;

      if (!uppercase && !lowercase && !numbers && !symbols) {
          document.getElementById("message").textContent = "Please select at least one character type!";
          return;
      }

      let charSet = "";
      if (uppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (lowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
      if (numbers) charSet += "0123456789";
      if (symbols) charSet += "!@#$%^&*()_+[]{}|;:,.<>?";

      if (excludeSimilar) {
          charSet = charSet.split("").filter(char => !similarChars.includes(char)).join("");
      }

      let password = "";
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charSet.length);
          password += charSet[randomIndex];
      }

      document.getElementById("password").textContent = password;
      document.getElementById("message").textContent = "New password generated!";
      updateStrength(password);
      addToHistory(password);
  }

  // Copy password to clipboard
  function copyToClipboard() {
      const password = document.getElementById("password").textContent;
      navigator.clipboard.writeText(password).then(() => {
          document.getElementById("message").textContent = "Password copied to clipboard!";
      });
  }

  // Update password strength
  function updateStrength(password) {
      let strength = "Weak";
      const lengthCriteria = password.length >= 12;
      const upperCriteria = /[A-Z]/.test(password);
      const lowerCriteria = /[a-z]/.test(password);
      const numberCriteria = /[0-9]/.test(password);
      const symbolCriteria = /[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password);

      const fulfilledCriteria = [lengthCriteria, upperCriteria, lowerCriteria, numberCriteria, symbolCriteria].filter(Boolean).length;

      if (fulfilledCriteria >= 4) strength = "Strong";
      else if (fulfilledCriteria >= 2) strength = "Medium";

      document.getElementById("strength").textContent = `Strength: ${strength}`;
  }

  // Add generated password to history
  function addToHistory(password) {
      const historyList = document.getElementById("password-history");
      const listItem = document.createElement("li");
      listItem.textContent = password;
      historyList.appendChild(listItem);
  }

  // Clear password history
  function clearHistory() {
      const historyList = document.getElementById("password-history");
      historyList.innerHTML = "";
  }

  // Toggle dark/light mode
  function toggleTheme() {
      const body = document.body;
      const hero = document.getElementById("hero");
      body.classList.toggle("light-mode");
      hero.classList.toggle("light-mode");
  }

  function learnMore() {
      alert("Learn more about creating secure passwords and why they are essential.");
  }

  const container = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    function showTestimonial(index) {
      const offset = -index * 100; // Slide testimonials horizontally
      container.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
      showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
      showTestimonial(currentIndex);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
      nextButton.click();
    }, 5000);

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');

      question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';

        // Close all open answers
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.faq-icon').forEach(icn => icn.classList.remove('rotate'));

        // Open the clicked item
        if (!isOpen) {
          answer.style.display = 'block';
          icon.classList.add('rotate');
        }
      });
    });

    function subscribeNewsletter() {
      const email = document.getElementById('newsletterEmail').value;
      if (email) {
        alert(`Thank you for subscribing! Updates will be sent to: ${email}`);
      } else {
        alert('Please enter a valid email address.');
      }
    }