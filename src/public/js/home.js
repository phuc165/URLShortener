function validateForm() {
    const input = document.getElementById('exampleInputEmail1').value;
    if (!input) {
        alert('URL cannot be blank');
        return false;
    }
    return true;
}
