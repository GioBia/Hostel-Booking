const form = document.getElementById('bookingForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName'),
        email: document.getElementById('email').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        room: document.getElementById('room').value
    };

    try {
        // <-- Replace with your Power Automate HTTP endpoint -->
        const response = await fetch('https://YOUR-FLOW-URL-HERE', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            message.textContent = "Reservation submitted successfully!";
            message.className = "success";
            form.reset();
        } else {
            message.textContent = "Error submitting reservation. Try again.";
            message.className = "error";
        }


    } catch (err) {
        console.error(err);
        message.textContent = "Network error.";
        message.className = "error";
    }
});