document.addEventListener('DOMContentLoaded', function () {
    const revealButton = document.getElementById('revealButton');
    const message = document.getElementById('message');
    const hearts = document.querySelectorAll('.heart');

    revealButton.addEventListener('click', function () {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.opacity = '1';
            message.style.transform = 'scale(1)'; // Scale up the message
        }, 50); // Small delay to ensure the display change is rendered first
        revealButton.style.opacity = '0';
        setTimeout(() => {
            revealButton.style.display = 'none';
        }, 300); // Match this to the transition duration of opacity for smooth effect

        // Start the heart animations
        hearts.forEach(heart => {
            heart.style.bottom = 'auto'; // Reset to enable animation
            heart.style.right = 'auto'; // Reset to enable animation
        });
    });
});
