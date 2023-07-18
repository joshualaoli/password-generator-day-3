const lengthSlider = document.querySelector ('.pass-length input');
const option = document.querySelectorAll('.option input');
const copyIcon = document.querySelector('.input-box span');
const passwordInput = document.querySelector ('.input-box label');
const passIndicator = document.querySelector('.pass-indicator');
const generateButton = document.querySelector('.generate-btn');

const characters = {
    lowercase : "abcdefghijklmnopqrstuvwxyx" ;
    uppercase : " ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    numbers: "1234567890" ;
    symbol: "!@#$%^&*()_+-=<>?:[];,./"
}

const generatePassword = () => {
    let staticPassword = "";
    randomPassword = "";
    excludeDuplicate = false;
    passLength = lengthSlider.value;

    option.forEach(option => {
        if(option.checked){
            if(option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id];
            } else if (option.id === "spaces") {
                staticPassword += `${staticPassword}`
            } else {
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword [Math.floor(Math.random() * staticPassword.length)];
        
    };
}
