document.getElementById('contributionForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const semester = document.getElementById('semester').value;
  const phone = document.getElementById('phone').value;
  const amount = document.getElementById('amount').value;

  const response = await fetch('/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, semester, phone, amount })
  });

  const result = await response.json();
  const confirmationMessage = document.getElementById('confirmationMessage');
  confirmationMessage.textContent = result.message;
});