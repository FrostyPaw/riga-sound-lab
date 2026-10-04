'use strict';

// Effect 1: change the theme when the user clicks the button.
const themeButton = document.getElementById('themeButton');

themeButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    themeButton.textContent = isDark ? 'Light theme' : 'Dark theme';
    themeButton.setAttribute('aria-pressed', String(isDark));
});

// Effect 2: show or hide the extra paragraph after a click.
const readMoreButton = document.getElementById('readMoreButton');
const moreInfo = document.getElementById('moreInfo');

readMoreButton.addEventListener('click', () => {
    moreInfo.hidden = !moreInfo.hidden;
    readMoreButton.textContent = moreInfo.hidden ? 'Read more' : 'Show less';
    readMoreButton.setAttribute('aria-expanded', String(!moreInfo.hidden));
});

// Effect 3: recalculate the total whenever the quantity changes.
const ticketQuantity = document.getElementById('ticketQuantity');
const ticketTotal = document.getElementById('ticketTotal');
const ticketPrice = 15;

function updateTicketTotal() {
    const quantity = Number(ticketQuantity.value);

    // Event condition: calculate only for whole numbers from 1 to 20.
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
        ticketTotal.textContent = 'Enter a whole number from 1 to 20.';
        return;
    }

    ticketTotal.textContent = `Total: $${quantity * ticketPrice}`;
}

ticketQuantity.addEventListener('input', updateTicketTotal);
updateTicketTotal();

// Task 7: handle the contact form locally instead of requesting a missing PHP file.
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('contactStatus').textContent =
        'Thank you! This is a demo form. No message was sent.';
});
