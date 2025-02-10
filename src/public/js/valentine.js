//modal
{
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
}

//no logic handle
{
    let element = document.getElementById('noBox');
    var d = document.getElementById('noAns');

    let position = element.getBoundingClientRect();
    let noAnsWidth = d.offsetWidth;
    let noAnsHeight = d.offsetHeight;

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    function placeDiv() {
        x_pos = getRandomInt(position.left, position.right - noAnsWidth);
        y_pos = getRandomInt(position.top, position.bottom - noAnsHeight);
        d.style.position = 'absolute';
        d.style.left = x_pos + 'px';
        d.style.top = y_pos + 'px';
    }
}

//parallax background
(function () {
    // Add event listener
    document.addEventListener('mousemove', parallax);
    const elem = document.querySelector('#parallax');
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.005}%`; // Layer 1 (furthest back - less movement)
        let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`; // Layer 2
        let _depth3 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`; // Layer 3
        let _depth4 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`; // Layer 4
        let _depth5 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.04}%`; // Layer 5
        let _depth6 = `${50 - (_mouseX - _w) * 0.05}% ${50 - (_mouseY - _h) * 0.05}%`; // Layer 6
        let _depth7 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`; // Layer 7
        let _depth8 = `${50 - (_mouseX - _w) * 0.07}% ${50 - (_mouseY - _h) * 0.07}%`;
        let _depth9 = `${50 - (_mouseX - _w) * 0.08}% ${50 - (_mouseY - _h) * 0.08}%`; // Layer 8 (closest - most movement)
        let x = `${_depth9}, ${_depth8}, ${_depth7}, ${_depth6}, ${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})();

//force to rotate in mobile
{
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
        );
    }
    console.log(isMobile());

    function isPortrait() {
        if (screen.orientation && screen.orientation.type) {
            return screen.orientation.type.startsWith('portrait'); // e.g., "portrait-primary", "portrait-secondary"
        } else {
            return window.innerWidth < window.innerHeight; // Fallback for older browsers/environments
        }
    }
    console.log(isPortrait());

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
}

//test
