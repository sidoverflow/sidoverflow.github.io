function copyCommand() {
    const curlCommand = "curl https://sidharth.me/sidharth-pubkey.asc | gpg--import";
    navigator.clipboard.writeText(curlCommand);
}