    function openModal(text) {
      document.getElementById('modalText').innerText = text;
      document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }

    window.onclick = function(event) {
      const modal = document.getElementById('modal');
      if (event.target === modal) {
        closeModal();
      }
    }
    
    function validateForm() {
      let isValid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      document.getElementById('nameError').style.display = name.value ? 'none' : 'inline';
      document.getElementById('emailError').style.display = email.value.includes('@') ? 'none' : 'inline';
      document.getElementById('messageError').style.display = message.value ? 'none' : 'inline';

      if (!name.value || !email.value.includes('@') || !message.value) {
        isValid = false;
      }

      return isValid;
    }
