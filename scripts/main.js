function copyCommand() {
    const curlCommand = "curl https://sidharth.me/sidharth-pubkey.asc | gpg--import";
    navigator.clipboard.writeText(curlCommand);
}

window.setInterval(() => {
    this.toggle()
}, 3500)

const greeting = "Hi, I'm";
const name = 'Sidharth Sudarsan.';
const isMalayalam = false;

function toggle() {
    if (this.name === 'Sidharth Sudarsan.') {
        this.greeting = 'നമസ്കാരം, ഞാൻ'
        this.name = 'സിദ്ധാർഥ് സുദർശൻ.'
        this.isMalayalam = true
    } else {
        this.greeting = "Hi, I'm"
        this.name = 'Sidharth Sudarsan.'
        this.isMalayalam = false
    }
    var greetingDiv = document.getElementById('greeting');
    greetingDiv.innerText = this.greeting;

    var nameDiv = document.getElementById('name');
    nameDiv.innerText = this.name;
}