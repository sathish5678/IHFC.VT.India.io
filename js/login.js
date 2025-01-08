
const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Selected Image" style="width: 100%; height: auto; border-radius: 5px;">`;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = 'No image selected';
    }
});



function togglePassword() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}