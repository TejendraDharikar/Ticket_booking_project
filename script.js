document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const tickets = parseInt(document.getElementById('tickets').value);

    const summary = `You've booked ${tickets} ticket(s) to ${destination} on ${date}.`;
    document.getElementById('booking-summary').textContent = summary;
});
// index.js
document.getElementById('cardNumber').addEventListener('input', function (e) {
    const input = e.target;
    const value = input.value.replace(/\s/g, ''); // Remove spaces
    const formattedValue = value.replace(/(\d{4})/g, '$1 '); // Add space every 4 digits
    input.value = formattedValue.trim();
});