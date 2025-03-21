const telegramMessages = document.querySelector('.telegram-messages');
const messageItems = [
    { sender: 'Berhanu Taye', timestamp: '[21/03/2025 7:50 ጥዋት]', content: 'ልዩ ተሰጥኦው ፣ ተጫዋቹ ፣ ቁምነገረኛው ፣ ተወዳጁ ድምፃዊው (እኛ ኢትዮዺያ ነን) በሚለው ሙዚቃው ሚታወቀው ምስክር ማንደፍሮ እኳን ተወለድክልን። ቀሪው የህይወት ዘመንህ የተባረከ ይሁንልህ ወንድማለም።' },
    { sender: 'Scoch Kacha', timestamp: '[21/03/2025 7:55 ጥዋት]', content: 'ውድ ወንድሜ፣ ዛሬ የልደትህ ቀን በመሆኑ እጅግ ደስ ብሎኛል! ሁል ጊዜ በጎ ጎንህን እንድመለከት ስላደረከኝ አመሰግናለሁ። መልካም ልደት!' },
    { sender: 'Beki Loga', timestamp: '[21/03/2025 8:10 ጥዋት]', content: 'Happy birthday wit' },
    { sender: 'Temu Editor', timestamp: '[21/03/2025 8:10 ጥዋት]', content: 'Happy birthday wita🫶🥰' },
    { sender: 'Melu Loga', timestamp: '[21/03/2025 8:26 ጥዋት]', content: 'መልካም እርጅና ዊታታ😊' },
    { sender: 'Merry🎧🌘🦋', timestamp: '[21/03/2025 8:28 ጥዋት]', content: 'መልካም ልደት አንተ ጥበብ 😁 አንደው ሙዚቃው ላይ ቲኒሽ ስሜታዊነት ይታይ ነበር በተረፈ አፍሪማው የግልህ ነው🤓🤥🎂' },
    { sender: 'Abeኒ', timestamp: '[21/03/2025 8:28 ጥዋት]', content: 'እንኳን ተወለድክ ዊታ (ቆንጆ ስራ ነው ሙዚቃው🇪🇹) ዘመንህ የተባረከ ይሁን' },
    { sender: '💝Ado❤', timestamp: '[21/03/2025 8:28 ጥዋት]', content: 'H.b.d wit' },
    { sender: 'የማታ Loga Kkb', timestamp: '[21/03/2025 8:49 ጥዋት]', content: 'መልካም ልደት ዊታ' },
    { sender: 'Samrawit Tsegay', timestamp: '[21/03/2025 8:53 ጥዋት]', content: 'On this special day, I wish you a birthday filled with love, laughter, and joy, may your year ahead be as wonderful as you are! cheers for the plus one witeye 🥂' },
    { sender: 'Tsiyon', timestamp: '[21/03/2025 9:02 ጥዋት]', content: 'ዊት አበባ ሰው የሁሉ ወዳጅ የሁሉ ወንድም የመስከረም ፀሐይ የአለቃ ምልክት የነፃነት ቦታ እንኳን ተወለድህ። 😍' },
    { sender: 'Melu Loga', timestamp: '[21/03/2025 9:04 ጥዋት]', content: 'አሜን በል እድሜ ፀጋ ነው😎' },
    { sender: 'Helup', timestamp: '[21/03/2025 9:06 ጥዋት]', content: 'Happiness birthday witaye🥰' },
    { sender: 'ብጺTsi', timestamp: '[21/03/2025 9:38 ጥዋት]', content: 'Happy የመወለው ዴይ ዊት መልካም ሰው😍🫂' },
    { sender: 'Temu Editor', timestamp: '[21/03/2025 9:42 ጥዋት]', content: 'ካላስጨፈረን ምን ጥቅም 😆' },
    { sender: 'እሱየ', timestamp: '[21/03/2025 9:55 ጥዋት]', content: 'መልካም የመደመጥ አመት ዊት' },
    { sender: 'Hanamariyam', timestamp: '[21/03/2025 9:59 ጥዋት]', content: 'Melkam ldet shebelawu' },
    { sender: 'Abi Alemayehu', timestamp: '[21/03/2025 10:09 ጥዋት]', content: 'Happy birthday boss🎂🎁' }
];

// Filter out duplicate senders, keeping only the first message
const uniqueSenders = {};
const uniqueMessages = messageItems.filter(message => {
    const sender = message.sender;
    if (!uniqueSenders[sender]) {
        uniqueSenders[sender] = true;
        return true;
    }
    return false;
});

// Append unique messages to the telegram-messages div
uniqueMessages.forEach(message => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message-item');
    messageElement.innerHTML = `
        <span class="sender">${message.sender}</span>
        <span class="timestamp">${message.timestamp}</span>
        <div class="content">${message.content}</div>
    `;
    telegramMessages.appendChild(messageElement);
});

// Slider functionality
let slideIndex = 0;
const slides = document.getElementById("slides");
const dots = document.getElementsByClassName("dot");

function showSlides() {
    slideIndex++;
    if (slideIndex >= 3) slideIndex = 0;
    slides.style.transform = `translateX(-${slideIndex * 33.33}%)`;
    updateDots();
    setTimeout(showSlides, 5000);
}

function currentSlide(index) {
    slideIndex = index;
    slides.style.transform = `translateX(-${slideIndex * 33.33}%)`;
    updateDots();
}

function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}

showSlides();

// Play birthday song
const birthdaySong = document.getElementById("birthdaySong");
function playSong() {
    birthdaySong.play();
}