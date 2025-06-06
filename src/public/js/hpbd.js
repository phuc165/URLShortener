//modal

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

//no logic handle

let element = document.getElementById('noBox');
var d = document.getElementById('noAns');

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
    );
}

function isPortrait() {
    if (screen.orientation && screen.orientation.type) {
        return screen.orientation.type.startsWith('portrait'); // e.g., "portrait-primary", "portrait-secondary"
    } else {
        return window.innerWidth < window.innerHeight; // Fallback for older browsers/environments
    }
}

function showRotationOverlay() {
    // Create or show your overlay/modal element (HTML for this is needed)
    const overlay = document.getElementById('rotationOverlay'); // Get your overlay element
    if (overlay) {
        overlay.style.display = 'block'; // Or 'block', depending on your overlay's CSS
    }
}

function hideRotationOverlay() {
    const overlay = document.getElementById('rotationOverlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Wait for page to load

    if (isMobile() && isPortrait()) {
        showRotationOverlay(); // Show overlay on initial load if mobile and portrait
    }

    window.addEventListener('orientationchange', () => {
        // Listen for orientation changes
        if (isMobile()) {
            // Double check mobile (less critical here but good practice)
            if (!isPortrait()) {
                // If now landscape
                hideRotationOverlay(); // Hide the overlay if it was showing
            } else {
                showRotationOverlay(); // Re-show if rotated back to portrait
            }
        }
    });
});

//debug
