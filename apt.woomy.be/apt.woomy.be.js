// Display "copy code" buttons
const copyCodeButtons = document.querySelectorAll('.code-copy-button');

for (const button of copyCodeButtons) {
    button.style.display = "block";

    button.addEventListener("click", () => {
        // Copy the code (without the #)
        const parentCode = button.parentElement.querySelector("code");
        const commands = parentCode.innerText.replaceAll("# ", "");
        
        // Write to the clipboard and indicate it for 1s
        navigator.clipboard.writeText(commands);
        
        const defaultText = button.innerText;
        button.innerText = "Copied!"

        const defaultColor = button.style.color;
        const defaultBgColor = button.style.backgroundColor;

        button.style.color = "var(--onPrimary)";
        button.style.backgroundColor = "var(--primary)";

        setTimeout(() => {
            button.innerText = defaultText;

            // If the default color wasn't overwritten, reset the style
            button.style.color = (defaultColor && defaultColor != "") ? defaultColor : null;
            button.style.backgroundColor = (defaultBgColor && defaultBgColor != "") ? defaultBgColor : null;
        }, 1000);
    })
}
