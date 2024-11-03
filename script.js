// JavaScript for the scheduling feature
function showTimes(day) {
    const timeSelector = document.getElementById('time-selector');
    const submitBtn = document.getElementById('submitBtn');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Clear previous times
    timeSelector.innerHTML = '';
    confirmationMessage.style.display = 'none';
    submitBtn.style.display = 'none';

    // Array of available times in 30-minute increments
    const times = [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
        '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
    ];

    // Display times for the selected day
    times.forEach(time => {
        const timeSlot = document.createElement('div');
        timeSlot.className = 'time-slot';
        timeSlot.textContent = time;
        timeSlot.onclick = function() {
            // Highlight selected time
            document.querySelectorAll('.time-slot').forEach(slot => slot.style.backgroundColor = 'white');
            timeSlot.style.backgroundColor = '#f8dcdc';

            // Enable the submit button
            submitBtn.style.display = 'inline-block';

            // Store selected day and time
            submitBtn.setAttribute('data-day', day);
            submitBtn.setAttribute('data-time', time);
        };
        timeSelector.appendChild(timeSlot);
    });
}

function submitAppointment() {
    const day = document.getElementById('submitBtn').getAttribute('data-day');
    const time = document.getElementById('submitBtn').getAttribute('data-time');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Show confirmation message
    confirmationMessage.style.display = 'block';
    confirmationMessage.textContent = `Thank you for your response! Your appointment is scheduled on ${day} at ${time}.`;

    // Reset the form
    document.getElementById('time-selector').innerHTML = '';
    document.getElementById('submitBtn').style.display = 'none';
}
