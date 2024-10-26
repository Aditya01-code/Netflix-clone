// Language content object
const languageContent = {
    en: "Welcome! Please select a language.",
    hi: "स्वागत है! कृपया एक भाषा चुनें।",
    es: "¡Bienvenido! Por favor seleccione un idioma.",
    zh: "欢迎！请选择一种语言。"
};

// Function to initialize language buttons
function initLanguageButtons() {
    const menu = document.getElementById('languageMenu');
    
    // Create buttons for each language
    for (const [lang, message] of Object.entries(languageContent)) {
        const button = document.createElement('button');
        button.className = 'btn';
        button.textContent = `${lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi' : lang === 'es' ? 'Spanish' : 'Chinese'} (${lang})`;
        button.onclick = () => changeLanguage(lang);
        menu.appendChild(button);
    }
}

// Function to change the language
function changeLanguage(lang) {
    const contentElement = document.getElementById('content');
    contentElement.textContent = languageContent[lang] || languageContent.en; // Default to English
    document.getElementById('languageMenu').style.display = 'none'; // Close menu
}

// Function to toggle the visibility of the language menu
function toggleLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

// Initialize buttons on page load
window.onload = initLanguageButtons;