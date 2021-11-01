export const togglePasswordVisibility = (event) => {
    const input = event.target.parentElement.previousElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        event.target.src="./source/img/eye.png"
    } else {
        input.type = 'password';
        event.target.src="./source/img/eye-slash.png"
    }
}