/* ================================================================
   GUESS THE COUNTRY - PROFESSIONAL GAME LOGIC
   Modern JavaScript with Lives System, Enhanced Features & Audio
================================================================ */

// ==================== EXTENDED COUNTRY DATABASE WITH FUN FACTS ====================

const countries = [
    { 
        name: "indonesia",
        aliases: ["indonesia"],
        flag: "https://flagcdn.com/w320/id.png",
        capital: "Jakarta",
        region: "Asia Tenggara",
        fact: "Indonesia memiliki lebih dari 17,000 pulau, menjadikannya negara dengan kepulauan terbanyak di dunia!"
    },
    { 
        name: "jepang",
        aliases: ["japan", "nippon"],
        flag: "https://flagcdn.com/w320/jp.png",
        capital: "Tokyo",
        region: "Asia Timur",
        fact: "Jepang memiliki 25 gunung berapi aktif dan sering mengalami gempa bumi."
    },
    { 
        name: "amerika",
        aliases: ["usa", "united states", "america"],
        flag: "https://flagcdn.com/w320/us.png",
        capital: "Washington DC",
        region: "Amerika Utara",
        fact: "Amerika Serikat memiliki 50 negara bagian dan adalah negara terbesar ketiga di dunia."
    },
    { 
        name: "inggris",
        aliases: ["england", "united kingdom", "uk"],
        flag: "https://flagcdn.com/w320/gb.png",
        capital: "London",
        region: "Eropa",
        fact: "Inggris mempopulerkan olahraga sepak bola modern pada abad ke-19."
    },
    { 
        name: "prancis",
        aliases: ["france"],
        flag: "https://flagcdn.com/w320/fr.png",
        capital: "Paris",
        region: "Eropa",
        fact: "Paris dikenal sebagai 'Kota Cahaya' dan memiliki Menara Eiffel yang ikonik."
    },
    { 
        name: "jerman",
        aliases: ["germany", "deutschland"],
        flag: "https://flagcdn.com/w320/de.png",
        capital: "Berlin",
        region: "Eropa",
        fact: "Jerman adalah pusat industri otomotif Eropa dengan merek seperti BMW, Mercedes, dan Volkswagen."
    },
    { 
        name: "kanada",
        aliases: ["canada"],
        flag: "https://flagcdn.com/w320/ca.png",
        capital: "Ottawa",
        region: "Amerika Utara",
        fact: "Kanada adalah negara terbesar kedua di dunia berdasarkan luas wilayah."
    },
    { 
        name: "australia",
        aliases: ["australia"],
        flag: "https://flagcdn.com/w320/au.png",
        capital: "Canberra",
        region: "Oseania",
        fact: "Australia adalah satu-satunya negara yang juga merupakan benua."
    },
    { 
        name: "brasil",
        aliases: ["brazil"],
        flag: "https://flagcdn.com/w320/br.png",
        capital: "Brasília",
        region: "Amerika Selatan",
        fact: "Brasil adalah rumah bagi Hutan Hujan Amazon yang memproduksi 20% oksigen dunia."
    },
    { 
        name: "mexico",
        aliases: ["mexico"],
        flag: "https://flagcdn.com/w320/mx.png",
        capital: "Mexico City",
        region: "Amerika Utara",
        fact: "Mexico City adalah ibu kota tertua di Amerika Utara, didirikan pada tahun 1521."
    },
    { 
        name: "india",
        aliases: ["india"],
        flag: "https://flagcdn.com/w320/in.png",
        capital: "New Delhi",
        region: "Asia Selatan",
        fact: "India adalah negara dengan populasi terbesar kedua dan memiliki Taj Mahal yang megah."
    },
    { 
        name: "china",
        aliases: ["china"],
        flag: "https://flagcdn.com/w320/cn.png",
        capital: "Beijing",
        region: "Asia Timur",
        fact: "China membangun Tembok Besar China lebih dari 2.000 tahun yang lalu."
    },
    { 
        name: "korea",
        aliases: ["south korea", "korea selatan"],
        flag: "https://flagcdn.com/w320/kr.png",
        capital: "Seoul",
        region: "Asia Timur",
        fact: "Korea Selatan adalah pemimpin teknologi dan rumah Samsung, LG, dan Hyundai."
    },
    { 
        name: "thailand",
        aliases: ["thailand"],
        flag: "https://flagcdn.com/w320/th.png",
        capital: "Bangkok",
        region: "Asia Tenggara",
        fact: "Thailand adalah satu-satunya negara Asia Tenggara yang tidak pernah dijajah oleh kekuatan Barat."
    },
    { 
        name: "malaysia",
        aliases: ["malaysia"],
        flag: "https://flagcdn.com/w320/my.png",
        capital: "Kuala Lumpur",
        region: "Asia Tenggara",
        fact: "Malaysia terkenal dengan Petronas Twin Towers yang spektakuler di Kuala Lumpur."
    },
    { 
        name: "singapura",
        aliases: ["singapore"],
        flag: "https://flagcdn.com/w320/sg.png",
        capital: "Singapore",
        region: "Asia Tenggara",
        fact: "Singapura adalah negara kota-negara yang maju dan menjadi pusat finansial Asia."
    },
    { 
        name: "vietnam",
        aliases: ["vietnam"],
        flag: "https://flagcdn.com/w320/vn.png",
        capital: "Hanoi",
        region: "Asia Tenggara",
        fact: "Vietnam memiliki Teluk Ha Long yang indah dan termasuk Situs Warisan Dunia UNESCO."
    },
    { 
        name: "spanyol",
        aliases: ["spain"],
        flag: "https://flagcdn.com/w320/es.png",
        capital: "Madrid",
        region: "Eropa",
        fact: "Spanyol terkenal dengan flamenco, paella, dan tapas yang lezat."
    },
    { 
        name: "italia",
        aliases: ["italy"],
        flag: "https://flagcdn.com/w320/it.png",
        capital: "Rome",
        region: "Eropa",
        fact: "Italia adalah rumah Colosseum, Vatikan, dan seni Renaissance yang luar biasa."
    },

{
name: "filipina",
aliases: ["philippines", "pilipina"],
flag: "https://flagcdn.com/w320/ph.png",
capital: "Manila",
region: "Asia Tenggara",
fact: "Filipina adalah negara kepulauan dengan lebih dari 7.000 pulau."
}
];

// ==================== GAME STATE ====================
let currentCountry = null;
let score = 0;
let lives = 3;
let timeLeft = 30;
let timerInterval = null;
let gameOver = false;
let hintUsed = false;
let isAnswerSubmitted = false;
let currentStreak = 0;
let bestStreak = 0;
let totalAnswered = 0;
let correctAnswers = 0;
let hintsRemaining = 3;
let musicVolume = 0.5;
let sfxVolume = 0.8;

// ==================== DOM ELEMENTS ====================
const flagElement = document.getElementById("flag");
const answerInput = document.getElementById("answer");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const livesText = document.getElementById("lives");
const hintText = document.getElementById("hint");
const timerText = document.getElementById("timer");
const streakText = document.getElementById("streak");
const hintsLeftText = document.getElementById("hints-left");
const accuracyText = document.getElementById("accuracy");
const feedbackText = document.getElementById("feedback");
const funFactText = document.getElementById("fun-fact");

const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const hintBtn = document.getElementById("hintBtn");
const settingsBtn = document.getElementById("settingsBtn");
const gameCard = document.querySelector(".game-card");
const gameOverModal = document.getElementById("gameOverModal");
const restartBtn = document.getElementById("restartBtn");
const musicToggle = document.getElementById("musicToggle");
const backgroundToggle = document.getElementById("backgroundToggle");
const backgroundElement = document.querySelector(".background");
const starsElement = document.querySelector(".stars");

// Audio Settings
const audioSettingsModal = document.getElementById("audioSettingsModal");
const musicVolumeSlider = document.getElementById("musicVolume");
const sfxVolumeSlider = document.getElementById("sfxVolume");
const musicVolumeValue = document.getElementById("musicVolumeValue");
const sfxVolumeValue = document.getElementById("sfxVolumeValue");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");

// ==================== AUDIO ELEMENTS ====================
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const bgMusic = document.getElementById("bgMusic");

let musicIsPlaying = false;

// ==================== AUDIO SETUP ====================
function setupAudio(audio) {
    if (audio) {
        audio.volume = 1;
        audio.muted = false;
    }
}

setupAudio(correctSound);
setupAudio(wrongSound);
setupAudio(bgMusic);

// ==================== VOLUME CONTROLS ====================
musicVolumeSlider.addEventListener("input", (e) => {
    musicVolume = e.target.value / 100;
    bgMusic.volume = musicVolume;
    musicVolumeValue.textContent = e.target.value + "%";
});

sfxVolumeSlider.addEventListener("input", (e) => {
    sfxVolume = e.target.value / 100;
    correctSound.volume = sfxVolume;
    wrongSound.volume = sfxVolume;
    sfxVolumeValue.textContent = e.target.value + "%";
});

// ==================== SETTINGS MODAL ====================
settingsBtn.addEventListener("click", () => {
    audioSettingsModal.classList.remove("hidden");
});

closeSettingsBtn.addEventListener("click", () => {
    audioSettingsModal.classList.add("hidden");
});

audioSettingsModal.addEventListener("click", (e) => {
    if (e.target === audioSettingsModal) {
        audioSettingsModal.classList.add("hidden");
    }
});

// ==================== MUSIC TOGGLE ====================
musicToggle.addEventListener("click", () => {
    if (!musicIsPlaying) {
        bgMusic.play().catch(err => {
            console.log("BGM play failed:", err);
        });
        musicToggle.innerText = "🔇 Music Off";
        musicIsPlaying = true;
    } else {
        bgMusic.pause();
        musicToggle.innerText = "🔊 Music On";
        musicIsPlaying = false;
    }
});

// ==================== BACKGROUND TOGGLE ====================
let backgroundIsVisible = true;

backgroundToggle.addEventListener("click", () => {
    if (backgroundIsVisible) {
        backgroundElement.style.opacity = "0.1";
        starsElement.style.opacity = "0.1";
        backgroundToggle.style.background = "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))";
        backgroundToggle.style.borderColor = "rgba(102, 126, 234, 0.2)";
        backgroundToggle.title = "Background Off - Click to enable";
        backgroundIsVisible = false;
    } else {
        backgroundElement.style.opacity = "1";
        starsElement.style.opacity = "1";
        backgroundToggle.style.background = "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))";
        backgroundToggle.style.borderColor = "rgba(102, 126, 234, 0.4)";
        backgroundToggle.title = "Background On - Click to disable";
        backgroundIsVisible = true;
    }
});

// ==================== ENHANCED ANIMATIONS ====================
function animateElement(element, animationClass, duration = 600) {
    if (!element) return;
    element.classList.add(animationClass);
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, duration);
}

function pulseElement(element, times = 2) {
    if (!element) return;
    let count = 0;
    const pulse = setInterval(() => {
        element.style.transform = count % 2 === 0 ? "scale(1.05)" : "scale(1)";
        count++;
        if (count >= times * 2) {
            clearInterval(pulse);
            element.style.transform = "scale(1)";
        }
    }, 150);
}

function floatElement(element, duration = 800) {
    if (!element) return;
    const originalTransform = element.style.transform;
    let startTime = Date.now();
    
    const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.sin((elapsed / duration) * Math.PI);
        element.style.transform = originalTransform + ` translateY(${progress * -8}px)`;
        
        if (elapsed < duration) {
            requestAnimationFrame(animate);
        } else {
            element.style.transform = originalTransform;
        }
    };
    
    animate();
}

// ==================== PLAY AUDIO SAFELY ====================
function playSound(audio) {
    if (audio) {
        audio.currentTime = 0;
        audio.volume = sfxVolume;
        audio.play().catch(err => {
            console.log("Audio play failed:", err);
        });
    }
}

function playCorrectSound() {
    playSound(correctSound);
}

function playWrongSound() {
    playSound(wrongSound);
}

// ==================== UPDATE ACCURACY ====================
function updateAccuracy() {
    if (totalAnswered === 0) {
        accuracyText.textContent = "0%";
        return;
    }
    const accuracy = Math.round((correctAnswers / totalAnswered) * 100);
    accuracyText.textContent = accuracy + "%";
}

// ==================== UPDATE TIMER COLOR ====================
function updateTimerColor() {
    const timerDisplay = document.querySelector(".timer-display");
    if (timerDisplay) {
        if (timeLeft <= 5) {
            timerDisplay.classList.remove("warning");
            timerDisplay.classList.add("danger");
        } else if (timeLeft <= 10) {
            timerDisplay.classList.remove("danger");
            timerDisplay.classList.add("warning");
        } else {
            timerDisplay.classList.remove("warning", "danger");
        }
    }
}

// ==================== GENERATE QUESTION ====================
function generateQuestion() {
    if (gameOver) return;
    
    // Fade out animation
    gameCard.style.opacity = "0.7";
    gameCard.style.transform = "translateY(10px)";
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * countries.length);
        currentCountry = countries[randomIndex];
        
        // Reset UI
        flagElement.src = currentCountry.flag;
        resultText.innerText = "";
        resultText.className = "result-text";
        hintText.innerText = "";
        feedbackText.innerText = "";
        funFactText.innerText = "";
        answerInput.value = "";
        answerInput.focus();
        
        // Reset hint
        hintUsed = false;
        hintBtn.style.opacity = hintsRemaining > 0 ? "1" : "0.5";
        hintBtn.disabled = hintsRemaining === 0;
        
        // Reset button states
        isAnswerSubmitted = false;
        nextBtn.style.display = "none";
        submitBtn.style.display = "flex";
        
        // Reset timer
        resetTimer();
        
        // Trigger flag animation with smooth fade in
        flagElement.style.animation = "none";
        gameCard.style.opacity = "1";
        gameCard.style.transform = "translateY(0)";
        setTimeout(() => {
            flagElement.style.animation = "flag-appear 0.6s ease-out";
        }, 10);
    }, 150);
}

// ==================== RESET TIMER ====================
function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    timerText.innerText = timeLeft;
    updateTimerColor();
    startTimer();
}

// ==================== TIMER LOGIC ====================
function startTimer() {
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.innerText = timeLeft;
        updateTimerColor();
        
        // Add pulse effect for dramatic seconds
        if (timeLeft <= 5 && timeLeft > 0) {
            pulseElement(timerText, 1);
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft = 0;
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    if (isAnswerSubmitted || gameOver) return;
    
    clearInterval(timerInterval);
    isAnswerSubmitted = true;
    
    resultText.innerText = "⏰ Waktu habis!";
    resultText.className = "result-text incorrect";
    playWrongSound();
    
    // Reset streak on timeout
    currentStreak = 0;
    streakText.innerText = currentStreak;
    
    // Lose a life
    lives--;
    livesText.innerText = lives;
    pulseElement(livesText, 2);
    totalAnswered++;
    updateAccuracy();
    
    // Feedback
    const randomMessage = ["⏰ Waktu habis!", "⏱️ Terlambat!", "🚀 Lebih cepat lagi!", "⚡ Cepat-cepat!", "🎯 Tantangan berikutnya!"][Math.floor(Math.random() * 5)];
    feedbackText.innerText = randomMessage;
    
    // Animation
    gameCard.classList.add("wrong-animation", "shake");
    setTimeout(() => {
        gameCard.classList.remove("wrong-animation", "shake");
    }, 600);
    
    // Check game over
    if (lives <= 0) {
        endGame();
    } else {
        nextBtn.style.display = "flex";
        submitBtn.style.display = "none";
    }
}

// ==================== CHECK ANSWER ====================
function isAnswerCorrect(userAnswer, country) {
    const allAnswers = [country.name, ...(country.aliases || [])];

    const fuse = new Fuse(allAnswers, {
        includeScore: true,
        threshold: 0.4
    });

    const result = fuse.search(userAnswer);

    return result.length > 0;
}
function checkAnswer() {
    if (gameOver || isAnswerSubmitted) return;
    
    clearInterval(timerInterval);
    isAnswerSubmitted = true;
    
    const userAnswer = answerInput.value.toLowerCase().trim();
    
    // Validation
    if (userAnswer === "") {
        resultText.innerText = "⚠️ Masukkan jawaban dulu!";
        resultText.className = "result-text";
        return;
    }
    
    totalAnswered++;
    
    // Check answer
    if (isAnswerCorrect(userAnswer, currentCountry)) {
        // CORRECT ANSWER
        resultText.innerText = "✅ Benar!";
        resultText.className = "result-text correct";
        
        score++;
        scoreText.innerText = score;
        pulseElement(scoreText, 1);
        
        correctAnswers++;
        currentStreak++;
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
        }
        streakText.innerText = currentStreak;
        pulseElement(streakText, 1);
        
        updateAccuracy();
        pulseElement(accuracyText, 1);
        
        playCorrectSound();
        
        const correctMessages = ["🎉 Luar biasa!", "✨ Sempurna!", "🌟 Bagus sekali!", "👏 Benar banget!", "🏆 Mantap!", "🚀 Luar biasa!", "💯 Sempurna banget!", "⭐ Fantastis!"];
        const randomMessage = correctMessages[Math.floor(Math.random() * correctMessages.length)];
        feedbackText.innerText = randomMessage;
        pulseElement(feedbackText, 1);
        
        // Show fun fact with animation
        funFactText.innerText = "💡 " + currentCountry.fact;
        floatElement(funFactText);
        
        // Animation
        gameCard.classList.add("correct-animation");
        setTimeout(() => {
            gameCard.classList.remove("correct-animation");
        }, 800);
    } else {
        // WRONG ANSWER
        resultText.innerHTML = `❌ Salah! Jawabannya: <strong>${currentCountry.name.toUpperCase()}</strong>`;
        resultText.className = "result-text incorrect";
        
        lives--;
        livesText.innerText = lives;
        pulseElement(livesText, 2);
        
        // Reset streak on wrong answer
        currentStreak = 0;
        streakText.innerText = currentStreak;
        
        updateAccuracy();
        
        playWrongSound();
        
        const wrongMessages = ["💪 Coba lagi!", "📚 Perluas wawasan!", "🔍 Perbanyak pengetahuan!", "⚡ Lanjut ke berikutnya!", "🌍 Semangat terus!", "🎯 Hampir tepat!", "📖 Belajar lebih dalam!"];
        const randomMessage = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
        feedbackText.innerText = randomMessage;
        
        // Animation
        gameCard.classList.add("wrong-animation", "shake");
        setTimeout(() => {
            gameCard.classList.remove("wrong-animation", "shake");
        }, 600);
        
        // Check game over
        if (lives <= 0) {
            endGame();
            return;
        }
    }
    
    // Show next button
    nextBtn.style.display = "flex";
    submitBtn.style.display = "none";
}

// ==================== SHOW HINT ====================
function showHint() {
    if (hintsRemaining <= 0 || hintUsed || isAnswerSubmitted) return;
    
    hintUsed = true;
    hintsRemaining--;
    hintsLeftText.innerText = hintsRemaining;
    pulseElement(hintsLeftText, 1);
    hintBtn.style.opacity = hintsRemaining > 0 ? "1" : "0.5";
    hintBtn.disabled = hintsRemaining === 0;
    
    // Smooth animation for hint display
    hintText.style.opacity = "0";
    hintText.innerText = `💡 Hint: Ibu kota: ${currentCountry.capital} | Region: ${currentCountry.region}`;
    
    setTimeout(() => {
        hintText.style.opacity = "1";
        hintText.style.transition = "opacity 0.4s ease-out";
    }, 10);
}

// ==================== END GAME ====================
function endGame() {
    gameOver = true;
    clearInterval(timerInterval);
    
    // Smooth fade out
    gameCard.style.opacity = "0.5";
    gameCard.style.transform = "scale(0.98)";
    submitBtn.disabled = true;
    nextBtn.disabled = true;
    hintBtn.disabled = true;
    answerInput.disabled = true;
    settingsBtn.disabled = true;
    
    setTimeout(() => {
        showGameOverModal();
    }, 300);
}

function showGameOverModal() {
    const finalScoreText = document.getElementById("finalScore");
    const finalAccuracyText = document.getElementById("finalAccuracy");
    const bestStreakText = document.getElementById("bestStreak");
    const totalAnsweredText = document.getElementById("totalAnswered");
    
    finalScoreText.innerText = score;
    finalAccuracyText.innerText = totalAnswered === 0 ? "0%" : Math.round((correctAnswers / totalAnswered) * 100) + "%";
    bestStreakText.innerText = bestStreak;
    totalAnsweredText.innerText = totalAnswered;
    
    gameOverModal.classList.remove("hidden");
    
    // Animate stat boxes
    setTimeout(() => {
        const statBoxes = document.querySelectorAll(".stat-box");
        statBoxes.forEach((box, index) => {
            box.style.animation = `bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${100 + index * 100}ms backwards`;
        });
    }, 200);
}

function hideGameOverModal() {
    gameOverModal.classList.add("hidden");
}

// ==================== RESTART GAME ====================
function restartGame() {
    hideGameOverModal();
    
    // Reset all variables
    score = 0;
    lives = 3;
    gameOver = false;
    isAnswerSubmitted = false;
    hintUsed = false;
    currentStreak = 0;
    bestStreak = 0;
    totalAnswered = 0;
    correctAnswers = 0;
    hintsRemaining = 3;
    
    // Update UI
    scoreText.innerText = score;
    livesText.innerText = lives;
    streakText.innerText = currentStreak;
    hintsLeftText.innerText = hintsRemaining;
    accuracyText.innerText = "0%";
    gameCard.style.opacity = "1";
    submitBtn.disabled = false;
    nextBtn.disabled = false;
    hintBtn.disabled = false;
    answerInput.disabled = false;
    settingsBtn.disabled = false;
    
    // Start new game
    generateQuestion();
}

// ==================== NEXT QUESTION ====================
function nextQuestion() {
    if (gameOver) return;
    generateQuestion();
}

// ==================== EVENT LISTENERS ====================
submitBtn.addEventListener("click", () => {
    if (!isAnswerSubmitted && !gameOver) {
        pulseElement(submitBtn, 1);
        setTimeout(() => checkAnswer(), 100);
    }
});

nextBtn.addEventListener("click", () => {
    pulseElement(nextBtn, 1);
    setTimeout(() => nextQuestion(), 100);
});

hintBtn.addEventListener("click", () => {
    pulseElement(hintBtn, 1);
    setTimeout(() => showHint(), 100);
});

restartBtn.addEventListener("click", () => {
    pulseElement(restartBtn, 1);
    setTimeout(() => restartGame(), 150);
});

// Enter key to submit
answerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !isAnswerSubmitted && !gameOver) {
        pulseElement(submitBtn, 1);
        setTimeout(() => checkAnswer(), 100);
    }
});

// Smooth focus animations for input
answerInput.addEventListener("focus", () => {
    answerInput.parentElement.style.transform = "scale(1.02)";
});

answerInput.addEventListener("blur", () => {
    answerInput.parentElement.style.transform = "scale(1)";
});

// Auto-start music on first interaction
document.addEventListener("click", () => {
    if (!musicIsPlaying) {
        bgMusic.volume = musicVolume;
        bgMusic.play().catch(err => {
            console.log("BGM autoplay blocked:", err);
        });
        musicIsPlaying = true;
    }
}, { once: true });

// ==================== START GAME ====================
generateQuestion();
