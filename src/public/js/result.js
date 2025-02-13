function copyToClipboard() {
    const shortUrl = document.getElementById('shortUrl').href;
    navigator.clipboard
        .writeText(shortUrl)
        .then(() => {
            document.getElementById('copyMessage').style.display = 'block';
        })
        .catch((err) => {
            console.error('Failed to copy: ', err);
        });
}
