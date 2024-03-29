const shitLords = ['Sparrow', 'Eliott', 'Gwyenth'];
const stillCleanColor = '#4b9609';
const gettingDirtyColor = '#e2580b';
const shitColor = '	#cc060c';


let timeSinceLastCleansing = 0;
const shitLord = document.getElementById('name');
const button = document.getElementById('reset');
const timer = document.getElementById('timer');

// timeSinceLastCleansing = (3 * 24 * 60 * 60 * 1000) - 10000;

// Set shitLord to the first shitLord in shitLords
shitLord.innerHTML = shitLords[0];

// Once per second, increment the time since last cleansing by 1000ms and update the timer
setInterval(() => {
    timeSinceLastCleansing += 1000;
    // Format the time since last cleansing into days, hours, and minutes
    const days = Math.floor(timeSinceLastCleansing / (24 * 60 * 60 * 1000));
    const daysMs = days * 24 * 60 * 60 * 1000;
    const hours = Math.floor((timeSinceLastCleansing - daysMs) / 3600000);
    const hoursMs = hours * 3600000;
    const minutes = Math.floor((timeSinceLastCleansing - daysMs - hoursMs) / 60000);
    // Update the timer
    timer.innerHTML = `
        <span class="time-value">${days}</span> <span class="time-label">days</span> 
        <span class="time-value">${hours}</span> <span class="time-label">hours</span> 
        <span class="time-value">${minutes}</span> <span id="time-label">minutes</span>`;
}, 1000);

// If the time since last cleansing is less than 2 days, remove all classes from the header
// If the time since last cleansing is greater than or equal to 2 days, add a warning class to the header
// If the time since last cleansing is greater than or equal to 3 days, remove all classes from the header and add a danger class
setInterval(() => {
    if (timeSinceLastCleansing < 172800000) {
        setHeaderBg(stillCleanColor);
    } else if (timeSinceLastCleansing >= 172800000 && timeSinceLastCleansing < 259200000) {
        setHeaderBg(gettingDirtyColor);
    } else {
        setHeaderBg(shitColor);
    }
}, 1000);


// When the button is clicked, reset the time since last cleansing to 0 and update the shitLord to the next shitLord in the list.
// When the end of the list is reached, start over at the beginning.
document.body.addEventListener('click', () => {
    timeSinceLastCleansing = 0;
    if (shitLords.indexOf(shitLord.innerHTML) === shitLords.length - 1) {
        shitLord.innerHTML = shitLords[0];
    } 
    else {
        shitLord.innerHTML = shitLords[shitLords.indexOf(shitLord.innerHTML) + 1];
    }
});


// Function to set the value of the --header-bg CSS variable
function setHeaderBg(color) {
    document.documentElement.style.setProperty('--header-bg', color);
}