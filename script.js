const confettiRoot = document.querySelector('.confetti');

if (confettiRoot) {
  const colors = ['#f6a9c5', '#f5c765', '#a9d9d1', '#d9a5e5', '#ffffff'];
  const totalPieces = 34;

  for (let index = 0; index < totalPieces; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.setProperty('--x', `${(index * 29 + 3) % 100}%`);
    piece.style.setProperty('--w', `${4 + (index % 4)}px`);
    piece.style.setProperty('--h', `${7 + (index % 6)}px`);
    piece.style.setProperty('--r', `${(index * 37) % 160 - 80}deg`);
    piece.style.setProperty('--drift', `${(index % 2 ? 1 : -1) * (20 + (index % 5) * 12)}px`);
    piece.style.setProperty('--duration', `${8 + (index % 7) * 1.15}s`);
    piece.style.setProperty('--delay', `${-(index % 12) * .8}s`);
    piece.style.setProperty('--color', colors[index % colors.length]);
    confettiRoot.appendChild(piece);
  }
}

const celebrateButton = document.querySelector('#celebrate-button');
const entryScreen = document.querySelector('#entry-screen');
const doorbellButton = document.querySelector('#doorbell-button');
const entryStatus = document.querySelector('#entry-status');
const landingScreen = document.querySelector('#landing-screen');
const questionScreen = document.querySelector('#question-screen');
const noButton = document.querySelector('[data-answer="no"]');
const yesButton = document.querySelector('[data-answer="yes"]');
const response = document.querySelector('#question-response');
const proveButton = document.querySelector('#prove-button');
const romanceJourney = document.querySelector('#romance-journey');
const romanceStages = romanceJourney ? [...romanceJourney.querySelectorAll('[data-romance-stage]')] : [];
const romanceProgressDots = document.querySelector('#romance-progress-dots');
const romanceDistanceValue = document.querySelector('#romance-distance-value');
const romanceLastDate = document.querySelector('#romance-last-date');
const romanceDaysCount = document.querySelector('#romance-days-count');
const bucketList = document.querySelector('#bucket-list');
const romanceMemoryImage = document.querySelector('#romance-memory-image');
const romanceMemoryCaption = document.querySelector('#romance-memory-caption');
const romancePolaroid = document.querySelector('#romance-polaroid');
const romanceEnvelope = document.querySelector('#romance-envelope');
const romanceLetter = document.querySelector('#romance-letter');
const romanceLetterCopy = document.querySelector('#romance-letter-copy');
const romanceLetterNext = document.querySelector('.romance-letter-next');
const romanceBackToWorld = document.querySelector('#romance-back-to-world');
const musicPage = document.querySelector('#music-page');
const openMusicButton = document.querySelector('#open-music-button');
const musicBackButton = document.querySelector('#music-back-button');
const musicNextButton = document.querySelector('#music-next-button');
const musicTrackList = document.querySelector('#music-track-list');
const musicRankingForm = document.querySelector('#music-ranking-form');
const musicRankingMessage = document.querySelector('#music-ranking-message');
const musicRankingResults = document.querySelector('#music-ranking-results');
const studyPage = document.querySelector('#study-page');
const studyBackButton = document.querySelector('#study-back-button');
const studyStartQuizButton = document.querySelector('#study-start-quiz-button');
const quizPage = document.querySelector('#quiz-page');
const quizBackButton = document.querySelector('#quiz-back-button');
const quizIntroScreen = document.querySelector('#quiz-intro-screen');
const quizStartButton = document.querySelector('#quiz-start-button');
const quizGame = document.querySelector('#quiz-game');
const quizResults = document.querySelector('#quiz-results');
const quizProgress = document.querySelector('#quiz-progress');
const quizTimer = document.querySelector('#quiz-timer');
const quizProgressBar = document.querySelector('#quiz-progress-bar');
const quizQuestionCard = document.querySelector('#quiz-question-card');
const quizQuestionNumber = document.querySelector('#quiz-question-number');
const quizQuestionText = document.querySelector('#quiz-question-text');
const quizQuestionDetail = document.querySelector('#quiz-question-detail');
const quizOptions = document.querySelector('#quiz-options');
const quizScore = document.querySelector('#quiz-score');
const quizScoreMessage = document.querySelector('#quiz-score-message');
const quizPercentage = document.querySelector('#quiz-percentage');
const quizCorrect = document.querySelector('#quiz-correct');
const quizIncorrect = document.querySelector('#quiz-incorrect');
const quizTimeTaken = document.querySelector('#quiz-time-taken');
const quizReview = document.querySelector('#quiz-review');
const quizRestartButton = document.querySelector('#quiz-restart-button');
const quizUniverseButton = document.querySelector('#quiz-universe-button');
const universePage = document.querySelector('#universe-page');
const universeBackButton = document.querySelector('#universe-back-button');
const universeDiscoveryCount = document.querySelector('#universe-discovery-count');
const universeReveal = document.querySelector('#universe-reveal');
const universeRevealClose = document.querySelector('#universe-reveal-close');
const universeRevealCategory = document.querySelector('#universe-reveal-category');
const universeRevealArt = document.querySelector('#universe-reveal-art');
const universeRevealTitle = document.querySelector('#universe-reveal-title');
const universeRevealDescription = document.querySelector('#universe-reveal-description');
const universeFinalDiscovery = document.querySelector('#universe-final-discovery');
const universeFinalButton = document.querySelector('#universe-final-button');
const universeFinalMessage = document.querySelector('#universe-final-message');
const universeCakeButton = document.querySelector('#universe-cake-button');
const cakePage = document.querySelector('#cake-page');
const blowCandlesButton = document.querySelector('#blow-candles-button');
const cakeStatus = document.querySelector('#cake-status');
const cakeConfetti = document.querySelector('#cake-confetti');
const cakeLetterPopup = document.querySelector('#cake-letter-popup');
const cakeLetterButton = document.querySelector('#cake-letter-button');
const letterPage = document.querySelector('#letter-page');
let cakePopupTimer = null;
let cakeHasBeenBlown = false;
const hideMusicPage = () => {
  document.body.classList.remove('study-active');
  document.body.classList.remove('quiz-active');
  document.body.classList.remove('universe-active');
  document.body.classList.remove('cake-active');
  document.body.classList.remove('letter-active');
  if (musicPage) {
    musicPage.hidden = true;
    musicPage.classList.remove('is-visible');
    musicPage.setAttribute('aria-hidden', 'true');
  }
  if (studyPage) {
    studyPage.hidden = true;
    studyPage.classList.remove('is-visible');
    studyPage.setAttribute('aria-hidden', 'true');
  }
  if (quizPage) {
    quizPage.hidden = true;
    quizPage.classList.remove('is-visible');
    quizPage.setAttribute('aria-hidden', 'true');
  }
  if (universePage) {
    universePage.hidden = true;
    universePage.classList.remove('is-visible');
    universePage.setAttribute('aria-hidden', 'true');
  }
  if (cakePage) {
    cakePage.hidden = true;
    cakePage.classList.remove('is-visible');
    cakePage.setAttribute('aria-hidden', 'true');
  }
  if (letterPage) {
    letterPage.hidden = true;
    letterPage.classList.remove('is-visible');
    letterPage.setAttribute('aria-hidden', 'true');
  }
};
let lastNoButtonRect = null;

const lofiMusic = {
  context: null,
  master: null,
  timer: null,
  bar: 0,
};

const lofiChords = [
  [261.63, 329.63, 392, 493.88],
  [220, 261.63, 329.63, 392],
  [174.61, 220, 261.63, 329.63],
  [196, 246.94, 293.66, 392],
];

const playLofiTone = (frequency, start, duration, volume, type = 'triangle') => {
  if (!lofiMusic.context || !lofiMusic.master) return;

  const oscillator = lofiMusic.context.createOscillator();
  const toneGain = lofiMusic.context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  toneGain.gain.setValueAtTime(0.0001, start);
  toneGain.gain.exponentialRampToValueAtTime(volume, start + 0.035);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(toneGain).connect(lofiMusic.master);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.06);
};

const scheduleLofiBar = () => {
  if (!lofiMusic.context) return;

  const barStart = lofiMusic.context.currentTime + 0.08;
  const chord = lofiChords[lofiMusic.bar % lofiChords.length];
  const melody = [
    chord[2] * 2, chord[1] * 2, chord[3], chord[2] * 2,
    chord[1] * 2, chord[0] * 2, chord[2] * 2, chord[1] * 2,
  ];

  chord.forEach((frequency, index) => {
    playLofiTone(frequency / 2, barStart, 3.35, 0.055, 'sine');
    playLofiTone(frequency, barStart + index * 0.035, 2.9, 0.022, 'triangle');
  });

  melody.forEach((frequency, index) => {
    const noteStart = barStart + index * 0.42;
    playLofiTone(frequency, noteStart, 0.28, index % 3 === 0 ? 0.045 : 0.032, 'sine');
  });

  lofiMusic.bar += 1;
  lofiMusic.timer = window.setTimeout(scheduleLofiBar, 3400);
};

const startLofiMusic = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  if (!lofiMusic.context) {
    lofiMusic.context = new AudioContext();
  }

  if (!lofiMusic.master) {
    const filter = lofiMusic.context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2200;
    filter.Q.value = 0.35;
    lofiMusic.master = lofiMusic.context.createGain();
    lofiMusic.master.gain.value = 0.18;
    lofiMusic.master.connect(filter).connect(lofiMusic.context.destination);
    scheduleLofiBar();
  }

  if (lofiMusic.context.state === 'suspended') lofiMusic.context.resume();
};

const playDoorbellSound = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  if (!lofiMusic.context) lofiMusic.context = new AudioContext();
  const context = lofiMusic.context;
  if (context.state === 'suspended') context.resume();

  const now = context.currentTime;
  const output = context.createGain();
  output.gain.setValueAtTime(0.0001, now);
  output.gain.exponentialRampToValueAtTime(0.24, now + 0.015);
  output.gain.exponentialRampToValueAtTime(0.0001, now + 1.45);
  output.connect(context.destination);

  [
    { frequency: 659.25, start: 0, duration: 0.82 },
    { frequency: 523.25, start: 0.42, duration: 1.02 },
  ].forEach(({ frequency, start, duration }) => {
    const oscillator = context.createOscillator();
    const toneGain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, now + start);
    toneGain.gain.setValueAtTime(0.0001, now + start);
    toneGain.gain.exponentialRampToValueAtTime(0.7, now + start + 0.02);
    toneGain.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);
    oscillator.connect(toneGain).connect(output);
    oscillator.start(now + start);
    oscillator.stop(now + start + duration + 0.06);
  });
};

const playButtonClick = () => {
  if (!lofiMusic.context || !lofiMusic.master) return;

  const now = lofiMusic.context.currentTime;
  const clickTone = lofiMusic.context.createOscillator();
  const clickGain = lofiMusic.context.createGain();
  clickTone.type = 'triangle';
  clickTone.frequency.setValueAtTime(760, now);
  clickTone.frequency.exponentialRampToValueAtTime(320, now + 0.065);
  clickGain.gain.setValueAtTime(0.0001, now);
  clickGain.gain.exponentialRampToValueAtTime(0.32, now + 0.008);
  clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);
  clickTone.connect(clickGain).connect(lofiMusic.master);
  clickTone.start(now);
  clickTone.stop(now + 0.09);
};

const revealLanding = () => {
  if (!landingScreen) return;

  landingScreen.hidden = false;
  landingScreen.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => landingScreen.classList.add('is-visible'));
  startLofiMusic();

  if (entryScreen) {
    entryScreen.classList.add('is-phasing');
    window.setTimeout(() => {
      entryScreen.classList.add('is-leaving');
      window.setTimeout(() => {
        entryScreen.hidden = true;
        entryScreen.classList.remove('is-visible', 'is-ringing', 'is-opening', 'is-phasing', 'is-leaving');
      }, 900);
    }, 420);
  }
};

if (doorbellButton && entryScreen) {
  doorbellButton.addEventListener('click', () => {
    if (entryScreen.classList.contains('is-ringing')) return;

    entryScreen.classList.add('is-ringing');
    doorbellButton.disabled = true;
    if (entryStatus) entryStatus.textContent = 'ding dong... someone is coming';
    playDoorbellSound();

    window.setTimeout(() => {
      entryScreen.classList.add('is-opening');
      if (entryStatus) entryStatus.textContent = 'the door is opening...';
    }, 3000);

    window.setTimeout(revealLanding, 4200);
  });
}

if (celebrateButton && landingScreen && questionScreen) {
  celebrateButton.addEventListener('click', () => {
    startLofiMusic();
    playButtonClick();
    landingScreen.classList.add('is-leaving');
    questionScreen.hidden = false;
    questionScreen.setAttribute('aria-hidden', 'false');

    requestAnimationFrame(() => {
      questionScreen.classList.add('is-visible');
      landingScreen.setAttribute('aria-hidden', 'true');
    });
  }, { once: true });
}

if (noButton) {
  const moveNoButton = () => {
    const previousRect = noButton.getBoundingClientRect();
    const measuredWidth = previousRect.width;
    const buttonWidth = Math.min(measuredWidth, 190, Math.max(120, window.innerWidth - 32));
    const buttonHeight = previousRect.height;
    const edgeGap = 16;
    const separationGap = 28;
    const yesRect = yesButton?.getBoundingClientRect();

    // The question screen is transformed during its transition, which would
    // otherwise make fixed coordinates relative to that screen instead of the viewport.
    if (!noButton.classList.contains('is-evasive')) {
      document.body.appendChild(noButton);
    }

    noButton.classList.add('is-evasive');
    noButton.style.setProperty('--evasive-width', `${buttonWidth}px`);

    const maxLeft = Math.max(edgeGap, window.innerWidth - buttonWidth - edgeGap);
    const maxTop = Math.max(edgeGap, window.innerHeight - buttonHeight - edgeGap);

    const overlaps = (first, second, gap = 0) => first && second && (
      first.left < second.right + gap
      && first.right > second.left - gap
      && first.top < second.bottom + gap
      && first.bottom > second.top - gap
    );

    let nextLeft = edgeGap;
    let nextTop = edgeGap;
    let candidate;

    for (let attempt = 0; attempt < 500; attempt += 1) {
      nextLeft = edgeGap + Math.random() * Math.max(0, maxLeft - edgeGap);
      nextTop = edgeGap + Math.random() * Math.max(0, maxTop - edgeGap);
      candidate = {
        left: nextLeft,
        top: nextTop,
        right: nextLeft + buttonWidth,
        bottom: nextTop + buttonHeight,
      };

      if (!overlaps(candidate, yesRect, separationGap) && !overlaps(candidate, lastNoButtonRect, separationGap)) {
        break;
      }
    }

    noButton.style.left = `${nextLeft}px`;
    noButton.style.top = `${nextTop}px`;
    lastNoButtonRect = candidate;
    noButton.blur();
  };

  noButton.addEventListener('pointerenter', moveNoButton);
  noButton.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    moveNoButton();
  });
  noButton.addEventListener('focus', moveNoButton);
  noButton.addEventListener('click', (event) => {
    event.preventDefault();
    moveNoButton();
  });
}

if (response && yesButton) {
  yesButton.addEventListener('click', () => {
    if (response.classList.contains('is-revealed')) return;

    response.hidden = false;
    requestAnimationFrame(() => response.classList.add('is-revealed'));

    if (proveButton) {
      proveButton.hidden = false;
      requestAnimationFrame(() => proveButton.classList.add('is-revealed'));
    }
  });
}

const landscapeScreen = document.querySelector('#landscape-screen');
const destinationScreen = document.querySelector('#destination-screen');
const returnToWorld = document.querySelector('#return-to-world');
const placeholderCard = document.querySelector('.placeholder-card');
const sunPage = document.querySelector('#sun-page');
const housePage = document.querySelector('#house-page');
const riverPage = document.querySelector('#river-page');
const sunReturnToWorld = document.querySelector('#sun-return-to-world');
const houseReturnToWorld = document.querySelector('#house-return-to-world');
const houseReturnBottom = document.querySelector('#house-return-bottom');
const riverReturnToWorld = document.querySelector('#river-return-to-world');
const riverBoatsRoot = document.querySelector('#river-boats');
const riverBoatRoute = document.querySelector('#river-boat-route');
const riverLilyPads = document.querySelectorAll('.river-lily[data-river-progress]');
const riverLetterModal = document.querySelector('#river-letter-modal');
const riverLetterBoat = document.querySelector('#river-letter-boat');
const riverLetterTitle = document.querySelector('#river-letter-title');
const riverLetterMessage = document.querySelector('#river-letter-message');
const riverLetterClose = document.querySelector('#river-letter-close');
const catsPage = document.querySelector('#cats-page');
const catsScene = document.querySelector('#cats-scene');
const catsCharacters = document.querySelectorAll('.cats-character');
const catsReturnToWorld = document.querySelector('#cats-return-to-world');
const catsSpecialNote = document.querySelector('#cats-special-note');
const catsSpecialMessage = document.querySelector('#cats-special-message');
const catsHint = document.querySelector('#cats-hint');
const sunThoughts = document.querySelectorAll('.sun-thought');
const houseObjects = document.querySelectorAll('.house-object');
const houseNote = document.querySelector('#house-note');
const houseNoteLabel = document.querySelector('#house-note-label');
const houseNoteTitle = document.querySelector('#house-note-title');
const houseNoteCopy = document.querySelector('#house-note-copy');
const houseNoteDetail = document.querySelector('#house-note-detail');
const houseNoteClose = document.querySelector('#house-note-close');
const houseLetter = document.querySelector('#house-letter');
const houseLetterCopy = document.querySelector('#house-letter-copy');
const destinationTitle = document.querySelector('#destination-title');
const destinationObjectLabel = document.querySelector('#destination-object-label');
const worldObjects = document.querySelectorAll('.world-object');
const discoveryIndicators = document.querySelectorAll('.discovery-indicator');
const worldReward = document.querySelector('#world-reward');
const worldCounter = document.querySelector('#world-counter');
const worldGuide = document.querySelector('#world-guide');
const worldContinueButton = document.querySelector('#world-continue-button');
const loveMeterPage = document.querySelector('#love-meter-page');
const loveReturnToWorld = document.querySelector('#love-return-to-world');
const loveMeterCard = document.querySelector('#love-meter-card');
const loveMeterStage = document.querySelector('#love-meter-stage');
const loveMeterTrackShell = document.querySelector('#love-meter-track-shell');
const loveMeterTrack = document.querySelector('#love-meter-track');
const loveMeterFill = document.querySelector('#love-meter-fill');
const loveSlider = document.querySelector('#love-slider');
const loveGauge = document.querySelector('#love-gauge');
const loveGaugeNeedle = document.querySelector('#love-gauge-needle');
const loveGaugeHearts = document.querySelectorAll('.love-gauge-heart');
const loveMeterValue = document.querySelector('#love-meter-value');
const loveMeterInstruction = document.querySelector('#love-meter-instruction');
const loveReactionCard = document.querySelector('#love-reaction-card');
const loveReactionKicker = document.querySelector('#love-reaction-kicker');
const loveMessage = document.querySelector('#love-message');
const loveMilestone = document.querySelector('#love-milestone');
const loveGif = document.querySelector('#love-gif');
const loveGifFallback = document.querySelector('#love-gif-fallback');
const loveCracks = document.querySelector('#love-meter-cracks');
const loveFragments = document.querySelector('#love-meter-fragments');
const loveEndingBanner = document.querySelector('#love-ending-banner');
const loveResetButton = document.querySelector('#love-reset-button');
const loveConfirmPrompt = document.querySelector('#love-confirm-prompt');
const loveConfirmButton = document.querySelector('#love-confirm-button');
const loveSoundToggle = document.querySelector('#love-sound-toggle');
const confirmationPage = document.querySelector('#confirmation-page');
const confirmationActions = document.querySelector('#confirmation-actions');
const confirmationGreen = document.querySelector('#confirmation-green');
const confirmationGreenLabel = document.querySelector('#confirmation-green-label');
const confirmationPink = document.querySelector('#confirmation-pink');
const confirmationContinueButton = document.querySelector('#confirmation-continue-button');
const confirmationHeartPop = document.querySelector('#confirmation-heart-pop');
const confirmationStatus = document.querySelector('#confirmation-status');
const worldObjectLabels = {
  sun: 'SUN',
  house: 'HOUSE',
  river: 'RIVER',
  cats: 'THE TWO CATS',
};
const worldObjectIds = Object.keys(worldObjectLabels);
const discoveredObjects = new Set();

// Edit the Love-O-Meter messages and GIF IDs here without touching the interaction.
const loveMeterReactions = [
  { key: 'sad', max: 10, message: 'u hate me dont you? :(', gifId: 'PulvJhRh9bWQqSDcP2', milestone: 'the evidence is currently devastating' },
  { key: 'barely', max: 30, message: 'u barely love me?? :(', gifId: '59d1zo8SUSaUU', milestone: 'please reconsider your answer' },
  { key: 'better', max: 60, message: 'better but not enough :c', gifId: 'Tl45tTeIPOz4vj4qYw', milestone: 'a small improvement has been detected' },
  { key: 'warm', max: 90, message: 'much better keep going!!', gifId: '53ain2wtuMbApnxaWR', milestone: 'okayyy now we are getting somewhere' },
  { key: 'almost', max: 99, message: 'ALMOST THEREEEE', gifId: 'gQAnyWLUGkHZePQuEq', milestone: 'the meter is beginning to panic' },
  { key: 'full', max: 100, message: 'YESSSSS I LOVE YOU TOOO ♡', gifId: 'L5f4Z5JoOKARG', milestone: 'normal maximum reached. probably.' },
  { key: 'infinity', secret: true, message: 'AAAAA YES ILL MARRY YOU HAHA YAYAYAY ♡', gifId: 'rbgd25V68HMFlMUy0i', milestone: 'you broke the meter. this is now legally ridiculous.' },
];

// Edit these messages and routeProgress values to change the boats without touching the scene.
const riverBoatMessages = [
  { id: 'boat-one', color: 'blue', routeProgress: 0.12, title: 'ur my favourite kind of person', message: 'ur so freaking precious to me my love' },
  { id: 'boat-two', color: 'pink', routeProgress: 0.27, title: 'i would choose you every time', message: 'when i marry you i wont have to give u these online gifts, waise ngl these involve more effort bleh' },
  { id: 'boat-three', color: 'yellow', routeProgress: 0.42, title: 'you deserve the softest year', message: 'i hope this year brings u the kind of happiness u\'ve never experienced before' },
  { id: 'boat-four', color: 'lavender', routeProgress: 0.58, title: 'i love every version of you', message: 'ur perfect for me, happy, sad, angry, dominant, cute, angi... i love every single part of you' },
  { id: 'boat-five', color: 'mint', routeProgress: 0.74, title: 'more memories with you please', message: 'wherever life takes us next, im very glad i get to spend it with you and collect even more memories together' },
  { id: 'boat-six', color: 'peach', routeProgress: 0.89, title: 'happy birthday MERI JAAN', message: 'happy birthday mi amore, i hope you feel celebrated today, because u deserve to feel loved every day' },
];

// Everything for the house destination lives here so the words can be changed without touching the scene.
const houseRoomContent = {
  window: {
    label: 'THE WINDOW',
    title: 'the one mile gap',
    copy: 'sometimes i wish id open this window and look outside, seeing you already smiling at me',
    detail: 'until then, photos will have to do',
  },
  lamp: {
    label: 'THE LITTLE LAMP',
    title: 'you make everything warmer',
    copy: 'you somehow make even the most normal day feel better, brighter, and worth remembering',
    detail: 'so basically ur my favourite kind of light',
  },
  sofa: {
    label: 'THE COMFY COUCH',
    title: 'you feel like exhaling',
    copy: 'being with you brings me at ease. I can be silly, quiet, dramebaz, and completely myself, and still im safe.',
    detail: 'we cuddle here right?',
  },
  bookshelf: {
    label: 'THE BOOKSHELF',
    title: 'my favourite memories have you in them',
    copy: 'all our silly conversations, inside jokes, random daily updates, and tiny memories are the kind of stories i will never get bored of',
    detail: 'i would re read us every time',
  },
  photo: {
    label: 'THE FRAMED PHOTO',
    title: 'this gotta be the best photo',
    copy: 'some memories deserve a permanent place on the wall.',
    detail: 'what a day',
  },
  letter: {
    label: 'THE LETTER',
    title: 'this ones for you',
    copy: 'there is a longer note waiting just below the room. i wrote it for the days when u need reminding',
    detail: 'scroll down babe',
  },
  letterParagraphs: [
    'i keep reminiscing about the fact that home is supposed to be a place, but somehow u make it feel like a person, and that person is YOU. its the way i can talk to u about literally nothing and still end up feeling better than before i started. its the way ur name can make my day feel amazing',
    'distance is annoying and unfair, but it will never change the fact that im the most comfortable with you, hence the house. i carry all the little things about us in my head all the time: the jokes, the random conversations, the moments that\'d look small to everyone else but mean the world to me',
    'so if you ever wonder where you belong with me, the answer is... right here. in the warm light, in the quiet parts, in all the silly convos, and in every future memory im still hoping we get to make together. YOU. ARE. MY. HOME. PERIOD',
  ],
};

const populateHouseLetter = () => {
  if (!houseLetterCopy) return;
  houseLetterCopy.replaceChildren();
  houseRoomContent.letterParagraphs.forEach((paragraph) => {
    const element = document.createElement('p');
    element.textContent = paragraph;
    houseLetterCopy.appendChild(element);
  });
};

const resetHouseRoom = () => {
  houseObjects.forEach((object) => object.classList.remove('is-selected'));
  houseNote?.classList.remove('is-hidden');
  if (houseNoteLabel) houseNoteLabel.textContent = 'A NOTE FROM INSIDE';
  if (houseNoteTitle) houseNoteTitle.textContent = 'everything in here is a little bit of us';
  if (houseNoteCopy) houseNoteCopy.textContent = 'tap the window, lamp, sofa, bookshelf, photo, or letter. there are a few things i wanted you to find.';
  if (houseNoteDetail) houseNoteDetail.textContent = 'go look around';
};

const showHouseNote = (objectId) => {
  const content = houseRoomContent[objectId];
  if (!content) return;
  houseObjects.forEach((object) => object.classList.toggle('is-selected', object.dataset.roomObject === objectId));
  houseNote?.classList.remove('is-hidden');
  if (houseNoteLabel) houseNoteLabel.textContent = content.label;
  if (houseNoteTitle) houseNoteTitle.textContent = content.title;
  if (houseNoteCopy) houseNoteCopy.textContent = content.copy;
  if (houseNoteDetail) houseNoteDetail.textContent = content.detail;
  if (objectId === 'letter') {
    window.setTimeout(() => houseLetter?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 120);
  }
};

populateHouseLetter();

const updateDiscoveryVisuals = () => {
  discoveryIndicators.forEach((indicator) => {
    indicator.classList.toggle('is-discovered', discoveredObjects.has(indicator.dataset.discoveryFor));
  });
  if (worldCounter) worldCounter.textContent = `${discoveredObjects.size}/${worldObjectIds.length}`;
  if (worldGuide) worldGuide.setAttribute('aria-label', `Explore this area. ${discoveredObjects.size} of ${worldObjectIds.length} places discovered`);
  worldReward?.classList.toggle('is-revealed', discoveredObjects.size === worldObjectIds.length);
  if (worldContinueButton) worldContinueButton.hidden = discoveredObjects.size !== worldObjectIds.length;
};

let loveDragging = false;
let lovePointerId = null;
let loveRawPosition = 0;
let loveBroken = false;
let loveInfinityReached = false;
let loveCurrentReactionKey = null;
let loveFullCelebrated = false;
let loveSoundMuted = false;
let loveGifLoadTimer = null;
let loveCelebrationTimer = null;
let loveConfirmPromptTimer = null;
let confirmationUnlocked = false;
let confirmationGreenClicks = 0;
let confirmationPinkClicks = 0;

const loveNormalReactions = loveMeterReactions.filter((reaction) => !reaction.secret);

const playLoveChime = (notes) => {
  if (loveSoundMuted) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!lofiMusic.context) lofiMusic.context = new AudioContext();

  const context = lofiMusic.context;
  if (context.state === 'suspended') context.resume();
  const output = context.createGain();
  const now = context.currentTime;
  output.gain.setValueAtTime(0.0001, now);
  output.gain.exponentialRampToValueAtTime(0.16, now + 0.025);
  output.gain.exponentialRampToValueAtTime(0.0001, now + 1.15);
  output.connect(lofiMusic.master || context.destination);

  notes.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = now + index * 0.13;
    oscillator.type = index % 2 ? 'triangle' : 'sine';
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.42, start + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.42);
    oscillator.connect(gain).connect(output);
    oscillator.start(start);
    oscillator.stop(start + 0.48);
  });
};

const syncLoveGauge = ({ percent = 0, overflow = 0, broken = false, infinity = false } = {}) => {
  if (!loveGauge || !loveGaugeNeedle) return;

  const safePercent = Math.max(0, Math.min(100, percent));
  const safeOverflow = Math.max(0, Math.min(1, overflow));
  const angle = broken ? 90 + safeOverflow * 42 : -90 + safePercent * 1.8;
  loveGaugeNeedle.style.transformOrigin = '320px 232px';
  loveGaugeNeedle.style.transformBox = 'view-box';
  loveGaugeNeedle.style.transform = `rotate(${angle}deg)`;
  loveGauge.classList.toggle('is-broken', broken);
  loveGauge.classList.toggle('is-infinity', infinity);

  loveGaugeHearts.forEach((heart, index) => {
    const heartThreshold = index / (loveGaugeHearts.length - 1) * 100;
    heart.classList.toggle('is-filled', broken || safePercent >= heartThreshold);
  });
};

const setLoveReaction = (reaction) => {
  if (!reaction || loveCurrentReactionKey === reaction.key) return;
  loveCurrentReactionKey = reaction.key;

  const stageClasses = loveMeterReactions.map((item) => `is-${item.key}`);
  loveMeterStage?.classList.remove(...stageClasses);
  loveMeterStage?.classList.add(`is-${reaction.key}`);
  loveMeterCard?.classList.toggle('is-full', reaction.key === 'full');
  loveReactionCard?.classList.toggle('is-secret', Boolean(reaction.secret));
  if (loveReactionKicker) loveReactionKicker.textContent = reaction.secret ? 'YAY' : reaction.key === 'full' ? 'CURRENT FINDINGS' : 'CURRENT FINDINGS';
  if (loveMessage) loveMessage.textContent = reaction.message;
  if (loveMilestone) loveMilestone.textContent = reaction.milestone;

  if (!loveGif || !loveGifFallback) return;
  if (loveGifLoadTimer) window.clearTimeout(loveGifLoadTimer);
  const reactionKey = reaction.key;
  loveGif.hidden = true;
  loveGifFallback.hidden = true;
  loveGifFallback.textContent = '';
  loveGif.onload = () => {
    if (loveCurrentReactionKey !== reactionKey) return;
    loveGif.hidden = false;
    loveGifFallback.hidden = true;
  };
  loveGif.onerror = () => {
    if (loveCurrentReactionKey !== reactionKey) return;
    loveGif.hidden = true;
    loveGifFallback.hidden = false;
    loveGifFallback.textContent = 'reload if u see this I cant fix it T-T';
  };
  loveGif.src = `https://giphy.com/embed/${reaction.gifId}?autoplay=1&loop=1&muted=1&controls=0`;
  loveGifLoadTimer = window.setTimeout(() => {
    if (loveCurrentReactionKey !== reactionKey || !loveGif.hidden) return;
    loveGifFallback.hidden = false;
    loveGifFallback.textContent = 'reload if u see this I cant fix it T-T';
  }, 6500);
};

const celebrateLoveMaximum = () => {
  if (loveFullCelebrated || !loveMeterStage) return;
  loveFullCelebrated = true;
  loveMeterStage.classList.remove('is-celebrating');
  void loveMeterStage.getBoundingClientRect();
  loveMeterStage.classList.add('is-celebrating');
  loveGauge?.classList.remove('is-celebrating');
  void loveGauge?.getBoundingClientRect();
  loveGauge?.classList.add('is-celebrating');
  playLoveChime([523.25, 659.25, 783.99]);
  if (loveCelebrationTimer) window.clearTimeout(loveCelebrationTimer);
  loveCelebrationTimer = window.setTimeout(() => {
    loveMeterStage.classList.remove('is-celebrating');
    loveGauge?.classList.remove('is-celebrating');
  }, 1500);
};

const updateLoveNormalValue = (value) => {
  const reaction = loveNormalReactions.find((item) => value <= item.max) || loveNormalReactions[loveNormalReactions.length - 1];
  if (loveMeterFill) loveMeterFill.style.width = `${value}%`;
  if (loveMeterValue) loveMeterValue.textContent = `${value}%`;
  if (loveSlider) {
    loveSlider.setAttribute('aria-valuenow', String(value));
    loveSlider.setAttribute('aria-valuetext', `${value} percent`);
  }
  loveMeterStage?.classList.remove('is-broken', 'is-infinity');
  if (value < 100) loveMeterStage?.classList.remove('is-celebrating');
  loveCracks?.classList.remove('is-visible');
  loveFragments?.classList.remove('is-visible');
  loveReactionCard?.classList.remove('is-secret');
  if (loveEndingBanner) loveEndingBanner.hidden = true;
  if (loveResetButton) loveResetButton.hidden = true;
  if (loveMeterInstruction) loveMeterInstruction.textContent = 'drag the heart honestly ♡';
  setLoveReaction(reaction);
  syncLoveGauge({ percent: value });
  if (value === 100) celebrateLoveMaximum();
};

const confirmationGreenStages = [
  { label: 'REALLYYYY??', width: 'clamp(230px, 31vw, 360px)', height: 'clamp(94px, 16vh, 145px)' },
  { label: 'REALLY REALLY REALLYY??', width: 'clamp(270px, 43vw, 500px)', height: 'clamp(118px, 22vh, 190px)' },
  { label: 'i love you too ^_^', width: 'min(76vw, 700px)', height: 'clamp(170px, 36vh, 330px)' },
];

const confirmationPinkStages = [
  { label: 'are u sure??', width: 'clamp(230px, 31vw, 360px)', height: 'clamp(94px, 16vh, 145px)' },
  { label: 'are u really sure?', width: 'clamp(270px, 43vw, 500px)', height: 'clamp(118px, 22vh, 190px)' },
  { label: 'are u really really sure??', width: 'min(76vw, 700px)', height: 'clamp(150px, 30vh, 280px)' },
  { label: 'i love you and im not being forced to say it', width: 'min(84vw, 780px)', height: 'clamp(190px, 40vh, 370px)' },
];

const popConfirmationHeart = () => {
  if (!confirmationHeartPop) return;
  confirmationHeartPop.classList.remove('is-visible');
  void confirmationHeartPop.getBoundingClientRect();
  confirmationHeartPop.classList.add('is-visible');
};

const updateConfirmationGreen = (stage, route = 'green') => {
  if (!confirmationGreen || !confirmationGreenLabel || !confirmationActions) return;
  confirmationGreenLabel.textContent = stage.label;
  confirmationGreen.style.setProperty('--confirmation-width', stage.width);
  confirmationGreen.style.setProperty('--confirmation-height', stage.height);
  confirmationGreen.classList.remove('is-popping');
  void confirmationGreen.getBoundingClientRect();
  confirmationGreen.classList.add('is-popping');
  confirmationActions.classList.add('is-green-dominant');
  popConfirmationHeart();

  if (confirmationStatus) {
    confirmationStatus.textContent = route === 'pink'
      ? 'huh?'
      : stage === confirmationGreenStages[2] ? 'there it is. huge and undeniable. \u2661' : '';
  }
};

const finishConfirmation = (route) => {
  if (confirmationContinueButton) confirmationContinueButton.hidden = false;
  confirmationActions?.classList.add('is-final');
  confirmationGreen?.classList.add('is-final');
  confirmationGreen && (confirmationGreen.disabled = true);
  if (confirmationPink && route === 'pink') {
    confirmationPink.classList.add('is-disappearing');
    confirmationPink.disabled = true;
    window.setTimeout(() => { confirmationPink.hidden = true; }, 460);
  }
  if (confirmationStatus) {
    confirmationStatus.textContent = route === 'pink' ? 'case closed \u2661' : 'i knew it \u2661';
    confirmationStatus.classList.add('is-final');
  }
  if (!confirmationActions) return;
  for (let index = 0; index < 10; index += 1) {
    const heart = document.createElement('span');
    heart.className = 'confirmation-final-heart';
    heart.setAttribute('aria-hidden', 'true');
    heart.textContent = index % 2 ? '\u2661' : '\u2665';
    heart.style.setProperty('--heart-x', `${(index * 37) % 100}%`);
    heart.style.setProperty('--heart-delay', `${(index % 5) * 80}ms`);
    confirmationActions.appendChild(heart);
  }
};

const resetConfirmation = () => {
  confirmationGreenClicks = 0;
  confirmationPinkClicks = 0;
  confirmationActions?.classList.remove('is-green-dominant', 'is-final');
  confirmationGreen?.classList.remove('is-popping', 'is-final');
  confirmationPink?.classList.remove('is-disappearing');
  if (confirmationGreen) confirmationGreen.disabled = false;
  if (confirmationPink) {
    confirmationPink.disabled = false;
    confirmationPink.hidden = false;
  }
  confirmationGreen?.style.removeProperty('--confirmation-width');
  confirmationGreen?.style.removeProperty('--confirmation-height');
  if (confirmationGreenLabel) confirmationGreenLabel.textContent = 'yes i love you so much';
  if (confirmationStatus) {
    confirmationStatus.textContent = '';
    confirmationStatus.classList.remove('is-final');
  }
  if (confirmationContinueButton) confirmationContinueButton.hidden = true;
  confirmationHeartPop?.classList.remove('is-visible');
  confirmationActions?.querySelectorAll('.confirmation-final-heart').forEach((heart) => heart.remove());
};

const getLoveTrackMetrics = () => {
  if (!loveMeterTrack || !loveMeterTrackShell || !loveMeterStage) return null;
  const shellRect = loveMeterTrackShell.getBoundingClientRect();
  const trackRect = loveMeterTrack.getBoundingClientRect();
  const stageRect = loveMeterStage.getBoundingClientRect();
  const handleWidth = loveSlider?.getBoundingClientRect().width || 58;
  return {
    left: shellRect.left,
    width: trackRect.width || shellRect.width,
    maxOverflow: Math.max(48, stageRect.right - shellRect.right - handleWidth / 2 - 8),
  };
};

const updateLoveFromRawPosition = (rawPosition) => {
  const metrics = getLoveTrackMetrics();
  if (!metrics || loveInfinityReached) return;

  let raw = Math.max(0, rawPosition);
  if (loveBroken) raw = Math.max(raw, metrics.width);
  loveRawPosition = raw;

  const physicalPosition = Math.min(raw, metrics.width + metrics.maxOverflow);
  if (loveSlider) loveSlider.style.left = `${physicalPosition}px`;

  if (!loveBroken && raw <= metrics.width) {
    const value = Math.min(100, Math.round((raw / metrics.width) * 100));
    updateLoveNormalValue(value);
    return;
  }

  if (!loveBroken) {
    loveBroken = true;
    loveMeterStage?.classList.add('is-broken');
    loveCracks?.classList.add('is-visible');
    loveFragments?.classList.add('is-visible');
    setLoveReaction(loveMeterReactions.find((reaction) => reaction.key === 'full'));
    celebrateLoveMaximum();
  }

  const overflowRatio = Math.min(1, (raw - metrics.width) / metrics.maxOverflow);
  syncLoveGauge({ percent: 100, overflow: overflowRatio, broken: true, infinity: overflowRatio >= .92 });
  let displayValue = '100%+';
  if (overflowRatio >= .92) displayValue = '∞';
  else if (overflowRatio >= .62) displayValue = '10000%';
  else if (overflowRatio >= .24) displayValue = '1000%';

  if (loveMeterFill) loveMeterFill.style.width = '100%';
  if (loveMeterValue) loveMeterValue.textContent = displayValue;
  if (loveSlider) {
    loveSlider.setAttribute('aria-valuenow', '100');
    loveSlider.setAttribute('aria-valuetext', `${displayValue} love`);
  }

  if (displayValue === '∞') {
    if (!loveInfinityReached) {
      loveInfinityReached = true;
      loveMeterStage?.classList.add('is-infinity');
      loveMeterStage?.classList.remove('is-celebrating');
      loveReactionCard?.classList.add('is-secret');
      if (loveEndingBanner) loveEndingBanner.hidden = false;
      if (loveResetButton) loveResetButton.hidden = false;
      confirmationUnlocked = true;
      if (loveConfirmPromptTimer) window.clearTimeout(loveConfirmPromptTimer);
      loveConfirmPromptTimer = window.setTimeout(() => {
        if (loveConfirmPrompt && loveMeterPage && !loveMeterPage.hidden && loveInfinityReached) {
          loveConfirmPrompt.hidden = false;
        }
      }, 4000);
      if (loveSlider) loveSlider.disabled = true;
      if (loveMeterInstruction) loveMeterInstruction.textContent = 'you found the secret. i am never recovering from this.';
      setLoveReaction(loveMeterReactions.find((reaction) => reaction.key === 'infinity'));
      playLoveChime([523.25, 659.25, 783.99, 1046.5]);
    }
  } else if (loveMeterInstruction) {
    loveMeterInstruction.textContent = displayValue === '100%+'
      ? 'keep dragging... this seems medically concerning'
      : displayValue === '1000%'
        ? '1000%?? okay, pull harder'
        : '10000%?? the meter is screaming';
    if (loveMilestone) loveMilestone.textContent = displayValue === '1000%' ? 'the meter has entered its silly little era' : displayValue === '10000%' ? 'there are no longer enough numbers for this' : 'normal maximum reached. probably.';
  }
};

const updateLoveFromPointer = (event) => {
  const metrics = getLoveTrackMetrics();
  if (!metrics) return;
  updateLoveFromRawPosition(event.clientX - metrics.left);
};

const resetLoveMeter = () => {
  loveDragging = false;
  lovePointerId = null;
  loveRawPosition = 0;
  loveBroken = false;
  loveInfinityReached = false;
  loveCurrentReactionKey = null;
  loveFullCelebrated = false;
  confirmationUnlocked = false;
  if (loveConfirmPromptTimer) window.clearTimeout(loveConfirmPromptTimer);
  loveConfirmPromptTimer = null;
  if (loveConfirmPrompt) loveConfirmPrompt.hidden = true;
  resetConfirmation();
  if (loveGifLoadTimer) window.clearTimeout(loveGifLoadTimer);
  if (loveCelebrationTimer) window.clearTimeout(loveCelebrationTimer);
  loveMeterStage?.classList.remove('is-broken', 'is-celebrating', 'is-infinity', ...loveMeterReactions.map((reaction) => `is-${reaction.key}`));
  loveMeterCard?.classList.remove('is-secret', 'is-full');
  loveGauge?.classList.remove('is-broken', 'is-celebrating', 'is-infinity');
  loveCracks?.classList.remove('is-visible');
  loveFragments?.classList.remove('is-visible');
  if (loveSlider) {
    loveSlider.disabled = false;
    loveSlider.style.left = '0px';
  }
  updateLoveNormalValue(0);
};

const sunThoughtObserver = typeof IntersectionObserver === 'function' && sunPage
  ? new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { root: sunPage, threshold: 0.28, rootMargin: '0px 0px -8% 0px' })
  : null;

const resetSunThoughts = () => {
  sunThoughts.forEach((thought) => {
    thought.classList.remove('is-visible');
    if (sunThoughtObserver) sunThoughtObserver.observe(thought);
    else thought.classList.add('is-visible');
  });
};

let resetScratchPhoto = () => {};

const initScratchPhoto = () => {
  const stage = document.querySelector('#scratch-photo-stage');
  const image = document.querySelector('#scratch-photo-image');
  const canvas = document.querySelector('#scratch-canvas');
  const hint = document.querySelector('#scratch-hint');
  if (!stage || !image || !canvas) return;

  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) return;

  let isReady = false;
  let isDrawing = false;
  let isComplete = false;
  let lastPoint = null;
  let coverageFrame = null;
  let brushStamp = null;
  let brushRadius = 0;

  const createBrushStamp = () => {
    brushRadius = Math.max(26, canvas.width * 0.035);
    const diameter = Math.ceil(brushRadius * 2);
    brushStamp = document.createElement('canvas');
    brushStamp.width = diameter;
    brushStamp.height = diameter;
    const brushContext = brushStamp.getContext('2d');
    if (!brushContext) return;

    const center = brushRadius;
    const gradient = brushContext.createRadialGradient(center, center, 0, center, center, brushRadius);
    gradient.addColorStop(0, 'rgba(0,0,0,.98)');
    gradient.addColorStop(.58, 'rgba(0,0,0,.92)');
    gradient.addColorStop(.82, 'rgba(0,0,0,.5)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    brushContext.fillStyle = gradient;
    brushContext.fillRect(0, 0, diameter, diameter);

    // A few deterministic flecks soften the edge so the scratch feels less like a perfect vector line.
    for (let index = 0; index < 42; index += 1) {
      const seed = index + 1;
      const angle = seed * 2.399963;
      const distance = brushRadius * (.52 + ((seed * 17) % 37) / 100);
      const size = 1 + ((seed * 13) % 5);
      const x = center + Math.cos(angle) * distance;
      const y = center + Math.sin(angle) * distance;
      brushContext.fillStyle = `rgba(0,0,0,${0.04 + (seed % 4) * 0.025})`;
      brushContext.beginPath();
      brushContext.arc(x, y, size, 0, Math.PI * 2);
      brushContext.fill();
    }
  };

  const paintCover = () => {
    if (!image.naturalWidth || !image.naturalHeight) return;

    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    context.globalCompositeOperation = 'source-over';
    context.globalAlpha = 1;
    context.fillStyle = '#96999a';
    context.fillRect(0, 0, canvas.width, canvas.height);
    createBrushStamp();
    isReady = true;
  };

  resetScratchPhoto = () => {
    if (!isReady) return;
    context.globalCompositeOperation = 'source-over';
    context.globalAlpha = 1;
    context.fillStyle = '#96999a';
    context.fillRect(0, 0, canvas.width, canvas.height);
    isComplete = false;
    isDrawing = false;
    lastPoint = null;
    canvas.classList.remove('is-complete');
    stage.classList.remove('is-complete');
    canvas.setAttribute('aria-label', 'Scratch this covered photograph to reveal it');
    if (hint) hint.textContent = 'hi lol';
  };

  const finishScratch = () => {
    if (isComplete) return;
    isComplete = true;
    isDrawing = false;
    lastPoint = null;
    canvas.classList.add('is-complete');
    stage.classList.add('is-complete');
    canvas.setAttribute('aria-label', 'Photograph revealed');
    if (hint) hint.textContent = 'there it is ♡';
  };

  const checkCoverage = () => {
    if (!isReady || isComplete) return;

    const sampleStep = Math.max(4, Math.floor(Math.min(canvas.width, canvas.height) / 180));
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let sampled = 0;
    let cleared = 0;

    for (let y = 0; y < canvas.height; y += sampleStep) {
      for (let x = 0; x < canvas.width; x += sampleStep) {
        sampled += 1;
        if (pixels[(y * canvas.width + x) * 4 + 3] < 32) cleared += 1;
      }
    }

    if (sampled && cleared / sampled >= 0.85) finishScratch();
  };

  const queueCoverageCheck = () => {
    if (coverageFrame) return;
    coverageFrame = window.requestAnimationFrame(() => {
      coverageFrame = null;
      checkCoverage();
    });
  };

  const getPoint = (event) => {
    const bounds = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - bounds.left) * (canvas.width / bounds.width),
      y: (event.clientY - bounds.top) * (canvas.height / bounds.height),
    };
  };

  const eraseStamp = (point) => {
    if (!brushStamp) return;
    context.globalCompositeOperation = 'destination-out';
    context.globalAlpha = 1;
    context.drawImage(brushStamp, point.x - brushRadius, point.y - brushRadius);
  };

  const scratchTo = (point) => {
    if (!lastPoint) {
      eraseStamp(point);
      lastPoint = point;
      queueCoverageCheck();
      return;
    }

    const distance = Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y);
    const spacing = Math.max(5, brushRadius * .24);
    const steps = Math.max(1, Math.ceil(distance / spacing));

    for (let step = 1; step <= steps; step += 1) {
      const progress = step / steps;
      eraseStamp({
        x: lastPoint.x + (point.x - lastPoint.x) * progress,
        y: lastPoint.y + (point.y - lastPoint.y) * progress,
      });
    }

    lastPoint = point;
    queueCoverageCheck();
  };

  canvas.addEventListener('pointerdown', (event) => {
    if (!isReady || isComplete) return;
    event.preventDefault();
    isDrawing = true;
    lastPoint = null;
    canvas.setPointerCapture?.(event.pointerId);
    scratchTo(getPoint(event));
  });

  canvas.addEventListener('pointermove', (event) => {
    if (!isDrawing || isComplete) return;
    event.preventDefault();
    const coalescedMovements = event.getCoalescedEvents?.();
    const movements = coalescedMovements?.length ? coalescedMovements : [event];
    movements.forEach((movement) => scratchTo(getPoint(movement)));
  });

  const stopScratching = (event) => {
    if (!isDrawing) return;
    event.preventDefault();
    isDrawing = false;
    lastPoint = null;
    canvas.releasePointerCapture?.(event.pointerId);
    queueCoverageCheck();
  };

  canvas.addEventListener('pointerup', stopScratching);
  canvas.addEventListener('pointercancel', stopScratching);

  image.addEventListener('load', paintCover, { once: true });
  if (image.complete) paintCover();
};

initScratchPhoto();

let activeRiverBoat = null;
let riverBoatStates = [];
let riverAnimationFrame = null;
let riverAnimationLastTime = 0;

const riverBoatSvg = (className = '') => `
  <svg class="river-paper-boat ${className}" viewBox="0 0 80 48" aria-hidden="true">
    <path class="boat-fold" d="M8 19 40 27 72 19 53 41H27Z" />
    <path class="boat-sail" d="M40 27V5l18 19Z" />
    <path class="boat-crease" d="M40 27 27 41M40 27 53 41" />
  </svg>`;

const getRiverRoutePoint = (progress) => {
  if (!riverBoatRoute) return null;

  const totalLength = riverBoatRoute.getTotalLength();
  const safeProgress = ((progress % 1) + 1) % 1;
  const point = riverBoatRoute.getPointAtLength(safeProgress * totalLength);
  const nextDistance = Math.min(totalLength, safeProgress * totalLength + 3);
  const nextPoint = riverBoatRoute.getPointAtLength(nextDistance);
  const length = Math.hypot(nextPoint.x - point.x, nextPoint.y - point.y) || 1;

  return {
    point,
    angle: Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI),
    normal: {
      x: -(nextPoint.y - point.y) / length,
      y: (nextPoint.x - point.x) / length,
    },
  };
};

const positionRiverBoat = (button, progress) => {
  if (!button || !riverBoatRoute) return;

  const routePoint = getRiverRoutePoint(progress);
  if (!routePoint) return;

  button.style.left = `${(routePoint.point.x / 1200) * 100}%`;
  button.style.top = `${(routePoint.point.y / 760) * 100}%`;
  button.style.setProperty('--boat-angle', `${routePoint.angle}deg`);
  const edgeFade = Math.min(1, progress / .035, (1 - progress) / .035);
  button.style.opacity = `${Math.max(0, edgeFade)}`;
};

const positionRiverWaterDecorations = () => {
  riverLilyPads.forEach((pad) => {
    const progress = Number.parseFloat(pad.dataset.riverProgress);
    const offset = Number.parseFloat(pad.dataset.riverOffset || '0');
    const routePoint = getRiverRoutePoint(progress);
    if (!routePoint) return;

    const x = routePoint.point.x + routePoint.normal.x * offset;
    const y = routePoint.point.y + routePoint.normal.y * offset;
    pad.setAttribute('transform', `translate(${x} ${y})`);
  });
};

const animateRiverBoats = (timestamp) => {
  if (!riverAnimationLastTime) riverAnimationLastTime = timestamp;
  const delta = Math.min(.05, (timestamp - riverAnimationLastTime) / 1000);
  riverAnimationLastTime = timestamp;

  if (riverPage && !riverPage.hidden && !document.hidden && !activeRiverBoat) {
    const speed = .018;
    riverBoatStates.forEach((state) => {
      state.progress = (state.progress + speed * delta) % 1;
      positionRiverBoat(state.button, state.progress);
    });
  }

  riverAnimationFrame = window.requestAnimationFrame(animateRiverBoats);
};

const stopRiverBoatAnimation = () => {
  if (riverAnimationFrame) window.cancelAnimationFrame(riverAnimationFrame);
  riverAnimationFrame = null;
  riverAnimationLastTime = 0;
};

const startRiverBoatAnimation = () => {
  stopRiverBoatAnimation();
  riverAnimationFrame = window.requestAnimationFrame(animateRiverBoats);
};

const openRiverLetter = (item, button) => {
  if (!riverLetterModal || !riverLetterTitle || !riverLetterMessage || !riverLetterBoat) return;

  if (activeRiverBoat) activeRiverBoat.classList.remove('is-open');
  activeRiverBoat = button;
  activeRiverBoat.classList.add('is-open', 'is-collected');
  activeRiverBoat.setAttribute('aria-hidden', 'true');
  riverLetterBoat.innerHTML = riverBoatSvg(`boat-${item.color}`);
  riverLetterTitle.textContent = item.title;
  riverLetterMessage.textContent = item.message;
  riverLetterModal.hidden = false;
  requestAnimationFrame(() => riverLetterModal.classList.add('is-visible'));
  riverLetterClose?.focus();
};

const closeRiverLetter = () => {
  riverLetterModal?.classList.remove('is-visible');
  if (riverLetterModal) riverLetterModal.hidden = true;
  activeRiverBoat?.classList.remove('is-open');
  activeRiverBoat = null;
};

const createRiverBoats = () => {
  if (!riverBoatsRoot || !riverBoatRoute) return;

  stopRiverBoatAnimation();
  riverBoatsRoot.replaceChildren();
  riverBoatStates = [];
  riverBoatMessages.forEach((item, index) => {
    const button = document.createElement('button');
    button.className = `paper-boat paper-boat-${item.color}`;
    button.type = 'button';
    button.dataset.boatId = item.id;
    button.setAttribute('aria-label', `Open the message on paper boat ${index + 1}`);
    button.innerHTML = riverBoatSvg(`boat-${item.color}`);
    button.addEventListener('click', () => openRiverLetter(item, button));
    positionRiverBoat(button, item.routeProgress);
    riverBoatsRoot.appendChild(button);
    riverBoatStates.push({ button, progress: item.routeProgress });
  });
  startRiverBoatAnimation();
};

const resetRiverPage = () => {
  closeRiverLetter();
  positionRiverWaterDecorations();
  createRiverBoats();
};

let catsClicked = new Set();
let catsReactionTimer = null;
let catsTogetherTimer = null;
let catsTogetherPlayed = false;

const playCatsTogether = () => {
  if (!catsPage || !catsScene || !catsSpecialNote || !catsSpecialMessage) return;
  if (catsTogetherPlayed) return;
  catsTogetherPlayed = true;

  if (catsTogetherTimer) window.clearTimeout(catsTogetherTimer);
  catsScene.classList.remove('is-together', 'is-together-complete');
  void catsScene.getBoundingClientRect();
  catsScene.classList.add('is-together');
  catsSpecialMessage.textContent = 'look at these two idiots ♡';
  catsSpecialNote.hidden = false;
  requestAnimationFrame(() => {
    const noteTop = catsSpecialNote.getBoundingClientRect().top + catsPage.scrollTop;
    catsPage.scrollTo({ top: Math.max(0, noteTop - 72), behavior: 'smooth' });
  });
  if (catsHint) catsHint.textContent = 'they found their person, unfortunately for everyone else ♡';
  catsTogetherTimer = window.setTimeout(() => {
    catsScene.classList.add('is-together-complete');
    catsSpecialMessage.textContent = 'even these two idiots found their person. guess i did too. ♡';
  }, 3000);
};

const reactToCat = (catId) => {
  const cat = [...catsCharacters].find((character) => character.dataset.catId === catId);
  if (!cat) return;

  cat.classList.remove('is-reacting');
  void cat.getBoundingClientRect();
  cat.classList.add('is-reacting');
  if (catsReactionTimer) window.clearTimeout(catsReactionTimer);
  catsReactionTimer = window.setTimeout(() => cat.classList.remove('is-reacting'), 720);

  catsClicked.add(catId);
  if (catsClicked.size === 2) playCatsTogether();
};

const resetCatsPage = () => {
  if (catsReactionTimer) window.clearTimeout(catsReactionTimer);
  if (catsTogetherTimer) window.clearTimeout(catsTogetherTimer);
  catsClicked = new Set();
  catsTogetherPlayed = false;
  catsCharacters.forEach((cat) => cat.classList.remove('is-reacting'));
  catsScene?.classList.remove('is-together', 'is-together-complete');
  if (catsSpecialNote) catsSpecialNote.hidden = true;
  if (catsHint) catsHint.textContent = 'tap either cat for a tiny reaction';
};

const updateRouteHistory = (route, replace = false) => {
  const method = replace ? 'replaceState' : 'pushState';
  window.history[method]({}, '', `#${route}`);
};

const hideScreen = (screen) => {
  if (!screen) return;
  screen.hidden = true;
  screen.classList.remove('is-visible', 'is-leaving');
  screen.setAttribute('aria-hidden', 'true');
};

const showScreen = (screen) => {
  if (!screen) return;
  screen.hidden = false;
  screen.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => screen.classList.add('is-visible'));
};

const showLandscape = (updateHistory = true) => {
  document.body.classList.add('landscape-active');
  document.body.classList.remove('romance-active');
  document.body.classList.remove('music-active');
  hideMusicPage();
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  if (noButton) noButton.hidden = true;
  stopRiverBoatAnimation();
  closeRiverLetter();
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(destinationScreen);
  hideScreen(loveMeterPage);
  hideScreen(confirmationPage);
  if (loveConfirmPrompt) loveConfirmPrompt.hidden = true;
  updateDiscoveryVisuals();
  showScreen(landscapeScreen);
  if (updateHistory) updateRouteHistory('world');
};

const showLoveMeter = (updateHistory = true) => {
  document.body.classList.add('landscape-active');
  document.body.classList.remove('romance-active');
  document.body.classList.remove('music-active');
  hideMusicPage();
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  if (noButton) noButton.hidden = true;
  stopRiverBoatAnimation();
  closeRiverLetter();
  resetLoveMeter();
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(destinationScreen);
  hideScreen(confirmationPage);
  if (loveConfirmPrompt) loveConfirmPrompt.hidden = true;
  showScreen(loveMeterPage);
  if (loveMeterPage) loveMeterPage.scrollTop = 0;
  if (updateHistory) updateRouteHistory('love');
};

const showConfirmation = (updateHistory = true) => {
  if (!confirmationPage || !confirmationUnlocked) return;
  document.body.classList.remove('romance-active');
  document.body.classList.remove('music-active');
  hideMusicPage();
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  resetConfirmation();
  document.body.classList.add('landscape-active');
  if (noButton) noButton.hidden = true;
  stopRiverBoatAnimation();
  closeRiverLetter();
  if (loveConfirmPrompt) loveConfirmPrompt.hidden = true;
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(destinationScreen);
  hideScreen(loveMeterPage);
  showScreen(confirmationPage);
  if (updateHistory) updateRouteHistory('confirmation');
};

const showDestination = (objectId, updateHistory = true) => {
  if (!worldObjectLabels[objectId]) return;

  document.body.classList.add('landscape-active');
  document.body.classList.remove('romance-active');
  document.body.classList.remove('music-active');
  hideMusicPage();
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  if (noButton) noButton.hidden = true;
  stopRiverBoatAnimation();
  if (loveConfirmPrompt) loveConfirmPrompt.hidden = true;
  hideScreen(entryScreen);
  discoveredObjects.add(objectId);
  updateDiscoveryVisuals();

  const isSunDestination = objectId === 'sun';
  const isHouseDestination = objectId === 'house';
  const isRiverDestination = objectId === 'river';
  const isCatsDestination = objectId === 'cats';
  destinationScreen?.classList.toggle('is-sun-destination', isSunDestination);
  destinationScreen?.classList.toggle('is-house-destination', isHouseDestination);
  destinationScreen?.classList.toggle('is-river-destination', isRiverDestination);
  destinationScreen?.classList.toggle('is-cats-destination', isCatsDestination);
  if (placeholderCard) placeholderCard.hidden = isSunDestination || isHouseDestination || isRiverDestination || isCatsDestination;
  if (housePage) {
    housePage.hidden = !isHouseDestination;
    housePage.classList.toggle('is-arriving', isHouseDestination);
    if (isHouseDestination) {
      housePage.scrollTop = 0;
      resetHouseRoom();
    }
  }
  if (sunPage) {
    sunPage.hidden = !isSunDestination;
    sunPage.classList.toggle('is-arriving', isSunDestination);
    if (isSunDestination) {
      sunPage.scrollTop = 0;
      resetSunThoughts();
      resetScratchPhoto();
    }
  }
  if (riverPage) {
    riverPage.hidden = !isRiverDestination;
    riverPage.classList.toggle('is-arriving', isRiverDestination);
    if (isRiverDestination) {
      riverPage.scrollTop = 0;
      resetRiverPage();
    }
  }
  if (catsPage) {
    catsPage.hidden = !isCatsDestination;
    catsPage.classList.toggle('is-arriving', isCatsDestination);
    if (isCatsDestination) {
      catsPage.scrollTop = 0;
      resetCatsPage();
    }
  }
  destinationScreen?.setAttribute('aria-labelledby', isSunDestination ? 'sun-page-title' : isHouseDestination ? 'house-page-title' : isRiverDestination ? 'river-page-title' : isCatsDestination ? 'cats-page-title' : 'destination-title');

  if (destinationObjectLabel) destinationObjectLabel.textContent = worldObjectLabels[objectId];
  if (destinationTitle) destinationTitle.textContent = isSunDestination ? 'you are my sunshine ☀️' : 'A page for later';

  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(loveMeterPage);
  hideScreen(confirmationPage);
  showScreen(destinationScreen);
  if (isSunDestination) window.setTimeout(() => sunPage?.classList.remove('is-arriving'), 80);
  if (isHouseDestination) window.setTimeout(() => housePage?.classList.remove('is-arriving'), 80);
  if (isRiverDestination) window.setTimeout(() => riverPage?.classList.remove('is-arriving'), 80);
  if (isCatsDestination) window.setTimeout(() => catsPage?.classList.remove('is-arriving'), 80);
  if (updateHistory) updateRouteHistory(`destination-${objectId}`);
};

if (proveButton) {
  proveButton.addEventListener('click', () => {
    startLofiMusic();
    showLandscape();
  });
}

worldObjects.forEach((worldObject) => {
  const visitObject = () => showDestination(worldObject.dataset.object);

  worldObject.addEventListener('click', visitObject);
  worldObject.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      visitObject();
    }
  });
});

worldContinueButton?.addEventListener('click', () => showLoveMeter());
loveReturnToWorld?.addEventListener('click', () => showLandscape());
loveConfirmButton?.addEventListener('click', () => showConfirmation());

confirmationGreen?.addEventListener('click', () => {
  if (confirmationGreenClicks >= confirmationGreenStages.length) return;
  confirmationGreenClicks += 1;
  const stage = confirmationGreenStages[confirmationGreenClicks - 1];
  updateConfirmationGreen(stage, 'green');
  if (confirmationGreenClicks === confirmationGreenStages.length) finishConfirmation('green');
});

confirmationPink?.addEventListener('click', () => {
  if (confirmationPinkClicks >= confirmationPinkStages.length) return;
  confirmationPinkClicks += 1;
  const stage = confirmationPinkStages[confirmationPinkClicks - 1];
  updateConfirmationGreen(stage, 'pink');
  if (confirmationPinkClicks === confirmationPinkStages.length) finishConfirmation('pink');
});

loveSlider?.addEventListener('pointerdown', (event) => {
  if (loveInfinityReached) return;
  event.preventDefault();
  loveDragging = true;
  lovePointerId = event.pointerId;
  loveMeterStage?.classList.add('is-dragging');
  loveSlider.setPointerCapture?.(event.pointerId);
  updateLoveFromPointer(event);
});

loveSlider?.addEventListener('pointermove', (event) => {
  if (!loveDragging || event.pointerId !== lovePointerId) return;
  event.preventDefault();
  updateLoveFromPointer(event);
});

const finishLoveDrag = (event) => {
  if (event.pointerId !== lovePointerId) return;
  loveDragging = false;
  lovePointerId = null;
  loveMeterStage?.classList.remove('is-dragging');
  if (loveSlider?.hasPointerCapture?.(event.pointerId)) loveSlider.releasePointerCapture(event.pointerId);
};

loveSlider?.addEventListener('pointerup', finishLoveDrag);
loveSlider?.addEventListener('pointercancel', finishLoveDrag);
loveSlider?.addEventListener('keydown', (event) => {
  if (event.key === 'Home') {
    event.preventDefault();
    resetLoveMeter();
    return;
  }
  if (loveInfinityReached) return;
  const direction = event.key === 'ArrowRight' || event.key === 'ArrowUp' ? 1 : event.key === 'ArrowLeft' || event.key === 'ArrowDown' ? -1 : 0;
  if (!direction) return;
  event.preventDefault();
  const metrics = getLoveTrackMetrics();
  if (metrics) updateLoveFromRawPosition(loveRawPosition + metrics.width * .04 * direction);
});

loveSoundToggle?.addEventListener('click', () => {
  loveSoundMuted = !loveSoundMuted;
  loveSoundToggle.textContent = loveSoundMuted ? 'sound off ♫' : 'sound on ♫';
  loveSoundToggle.setAttribute('aria-pressed', String(loveSoundMuted));
});

loveResetButton?.addEventListener('click', () => {
  resetLoveMeter();
  loveMeterPage?.scrollTo({ top: 0, behavior: 'smooth' });
});

houseObjects.forEach((houseObject) => {
  const discoverRoomObject = () => showHouseNote(houseObject.dataset.roomObject);
  houseObject.addEventListener('click', discoverRoomObject);
  houseObject.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      discoverRoomObject();
    }
  });
});

catsCharacters.forEach((cat) => {
  const react = () => reactToCat(cat.dataset.catId);
  cat.addEventListener('click', react);
  cat.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      react();
    }
  });
});

houseNoteClose?.addEventListener('click', () => {
  houseNote?.classList.add('is-hidden');
  houseObjects.forEach((object) => object.classList.remove('is-selected'));
});

returnToWorld?.addEventListener('click', () => showLandscape());
sunReturnToWorld?.addEventListener('click', () => showLandscape());
houseReturnToWorld?.addEventListener('click', () => showLandscape());
houseReturnBottom?.addEventListener('click', () => showLandscape());
riverReturnToWorld?.addEventListener('click', () => showLandscape());
catsReturnToWorld?.addEventListener('click', () => showLandscape());
riverLetterClose?.addEventListener('click', closeRiverLetter);
riverLetterModal?.addEventListener('click', (event) => {
  if (event.target === riverLetterModal) closeRiverLetter();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && riverLetterModal && !riverLetterModal.hidden) closeRiverLetter();
});

// Editable content for the romantic follow-on journey.
const romanceConfig = {
  distance: '1 mile',
  lastMet: '2026-10-22',
  activities: [
    { title: 'Intense makeout session', copy: 'mmmmmmm can\'t wait for thattt', color: '#ffc8d8' },
    { title: 'Food Date', copy: 'Eating all our favorites, and you are my fav', color: '#ffe0ae' },
    { title: 'Movie Date', copy: 'Watching something together, but we aint WATCHING the movie...', color: '#cfe5ff' },
    { title: 'Late Night Walks', copy: 'Hand in hand and skipping away', color: '#dcd1f7' },
    { title: 'Make New Memories', copy: "travel the world? make food? dance? all that!!", color: '#ffd5bd' },
    { title: 'crack?', copy: 'Cmon you expected that right', color: '#d7f0db' },
  ],
  memories: [
    { src: 'assets/house-photo.png', alt: 'A place that feels like home', caption: 'us in the same frame' },
    { src: 'assets/957553030663396.jpg', alt: 'A cozy memory together', caption: 'W memory hena' },
    { src: 'assets/1355394600079187.jpg', alt: 'A dressed-up memory', caption: 'my bride btw' },
    { src: 'assets/1527667545187918.jpg', alt: 'A quiet everyday memory', caption: 'salt cube :3' },
    { src: 'assets/1728878168516041.jpg', alt: 'A playful memory', caption: 'good puppy hehehe' },
    { src: 'assets/4249618711993925.jpg', alt: 'A mirror selfie memory', caption: 'pretty from every angle' },
    { src: 'assets/18062302889445205_exported_6768.jpg', alt: 'A golden outfit memory', caption: 'PRETTY PRETTY PRETTY' },
    { src: 'assets/18086507180078751_exported_9140.jpg', alt: 'A pink outfit memory', caption: 'MOMMYYY' },
    { src: 'assets/18118881799705588_exported_2033.jpg', alt: 'A close-up memory', caption: 'those eyes though-' },
    { src: 'assets/IMG_20261110_214355_251.jpg', alt: 'A close-up eyes memory', caption: 'theyre gonna kill me' },
    { src: 'assets/Screenshot_20260919-154749.png', alt: 'A funny conversation memory', caption: 'mmmmm' },
    { src: 'assets/Screenshot_20260920-015038.png', alt: 'A playful conversation memory', caption: 'hi hard' },
    { src: 'assets/Screenshot_20260920-215511.png', alt: 'A sweet conversation memory', caption: 'cracking ki baat hori btw' },
    { src: 'assets/Screenshot_20261101-003500.png', alt: 'A heartfelt conversation memory', caption: 'you understand me' },
    { src: 'assets/Screenshot_20261105-044334.png', alt: 'A favorite photo memory', caption: 'cutiepotatie' },
    { src: 'assets/Screenshot_20261105-044613.png', alt: 'A soft pink memory', caption: 'OMG BODY TEA MY QUEEN' },
    { src: 'assets/Screenshot_20261105-044619.png', alt: 'A handmade love note memory', caption: 'peakest art' },
    { src: 'assets/Snapchat-253855036.jpg', alt: 'A bright night memory', caption: 'my pretty girl' },
  ],
  letter: [
    'I cant even describe how much I love you. I miss you so much, I wanna marry you already I cant wait no more AAAA',
    'You are literally the best thing that\'s ever happened to me and I mean it. Thank you for bringing so much joy in my life. I LOVE YOU SO MUCH MY BABY!!!!',
  ],
  musicTracks: [
    '0eCajpR75pDW0r64U6hP2x',
    '1ccZZf0IQi5y0bHMl2aGDF',
    '3anHs4ijBd3Iw0E0fBPwtH',
    '44AyOl4qVkzS48vBsbNXaC',
    '0Q9rHyEG7lME4y2Fqtuxgl',
    '5XeFesFbtLpXzIVDNQP22n',
    '6IPwKM3fUUzlElbvKw2sKl',
    '1Ukxccao1BlWrPhYkcXbwZ',
    '6vFsBXYczYsP0H3lgunZOm',
    '55lijDD6OAjLFFUHU9tcDm',
    '4KHJo29mW1oC5G45XjU8ge',
    '4eu27jAU2bbnyHUC3G75U8',
    '0biCSADTAblvLTLtJz4pXO',
    '4HKpSQsWRVeXDybgr4ByTG',
    '4tjLYTXFqZhkUDga4bQ0yl',
    '7CyPwkp0oE8Ro9Dd5CUDjW',
    '030OCtLMrljNhp8OWHBWW3',
    '3M0lSi5WW79CXQamgSBIjx',
    '0je57Uq5eTk1wrPzn9sWbl',
    '65zIby9Z03d1bhGvLNJNrA',
    '0TK2YIli7K1leLovkQiNik',
    '1yFryDjhXXIIaJA1dKqrab',
    '2lX53kXvYnvpV8Vqfe4S7s',
    '2eqUVYJVnlDs8PgOtuOlJm',
    '6qrifdo7QINdPQr80IelGi',
    '69UqtTHfUKAJweQwEStRzC',
    '2eAvDnpXP5W0cVtiI0PUxV',
    '1Jsos1mzwTwYGOndYN5h8V',
    '1u3KTMxSOXMX0cbb5BKGdc',
  ],
  musicLists: [
    {
      id: 'freaky',
      title: 'freaky',
      tracks: [
        '65zIby9Z03d1bhGvLNJNrA', // Soaked
        '0TK2YIli7K1leLovkQiNik', // Señorita
        '0je57Uq5eTk1wrPzn9sWbl', // When Did You Get Hot?
        '1u3KTMxSOXMX0cbb5BKGdc', // LOVESEXDHOKA!!!
        '030OCtLMrljNhp8OWHBWW3', // Hey Daddy (Daddy's Home)
        '3M0lSi5WW79CXQamgSBIjx', // Swim
        '7CyPwkp0oE8Ro9Dd5CUDjW', // One Of The Girls
      ],
    },
    {
      id: 'lovey-dovey',
      title: 'lovey dovey >.<',
      tracks: [
        '0eCajpR75pDW0r64U6hP2x', // Jo Tum Mere Ho
        '3anHs4ijBd3Iw0E0fBPwtH', // Kashish
        '44AyOl4qVkzS48vBsbNXaC', // Can't Help Falling in Love
        '5XeFesFbtLpXzIVDNQP22n', // I Wanna Be Yours
        '6IPwKM3fUUzlElbvKw2sKl', // we fell in love in october
        '69UqtTHfUKAJweQwEStRzC', // Sunsetz
        '2262bWmqomIaJXwCRHr13j', // new Lovey-Dovey addition
      ],
    },
    {
      id: 'vibey-chatpate',
      title: 'vibey and chatpate~',
      tracks: [
        '1Jsos1mzwTwYGOndYN5h8V', // Farebi
        '4HKpSQsWRVeXDybgr4ByTG', // Dil Dooba
        '4tjLYTXFqZhkUDga4bQ0yl', // Dilbar
        '4eu27jAU2bbnyHUC3G75U8', // Badtameez Dil
        '0biCSADTAblvLTLtJz4pXO', // Nashe Si Chadh Gayi
        '1ccZZf0IQi5y0bHMl2aGDF', // Gulabi Aankhen
        '55lijDD6OAjLFFUHU9tcDm', // WHERE IS MY HUSBAND!
        '2eqUVYJVnlDs8PgOtuOlJm', // High On You
        '1Ukxccao1BlWrPhYkcXbwZ', // From The Start
      ],
    },
    {
      id: 'special-history',
      title: 'special history ;)',
      tracks: [
        '1yFryDjhXXIIaJA1dKqrab', // Faltu Pyar
        '2lX53kXvYnvpV8Vqfe4S7s', // Sadqay
        '6qrifdo7QINdPQr80IelGi', // Iraaday
        '4KHJo29mW1oC5G45XjU8ge', // Pighal Ja
      ],
    },
  ],
  musicNotes: {
    '65zIby9Z03d1bhGvLNJNrA': 'wanna get soaked? 👀',
    '0TK2YIli7K1leLovkQiNik': 'i can call you mine instead',
    '0je57Uq5eTk1wrPzn9sWbl': 'when DID you get hot? babe you were always hot(sounds gay)',
    '1u3KTMxSOXMX0cbb5BKGdc': 'bas mangun love and sex no dhoka ^_^',
    '030OCtLMrljNhp8OWHBWW3': "daddy's home babygirl",
    '3M0lSi5WW79CXQamgSBIjx': "i couldn't think of anything here",
    '7CyPwkp0oE8Ro9Dd5CUDjW': 'ik you wanna crack to this song so bad',
    '0eCajpR75pDW0r64U6hP2x': 'IK YOU LOVE THIS SONG SM and fairs',
    '3anHs4ijBd3Iw0E0fBPwtH': 'areyyy I dedicated this song to you jaanu',
    '44AyOl4qVkzS48vBsbNXaC': "I'm so in love with you my love",
    '5XeFesFbtLpXzIVDNQP22n': 'ur already mine, forever ;)',
    '6IPwKM3fUUzlElbvKw2sKl': 'i mean not october but close enough right',
    '69UqtTHfUKAJweQwEStRzC': 'forget cigarettes we can eat icecream after doin it :P',
    '2262bWmqomIaJXwCRHr13j': 'we yes we love this song alawt',
    '1Jsos1mzwTwYGOndYN5h8V': 'ur welcome I introduced you to this',
    '4HKpSQsWRVeXDybgr4ByTG': 'ashiq hun deewana hun tere lie kuch bhi kar jaun ga',
    '4tjLYTXFqZhkUDga4bQ0yl': "I don't get the hype but mmm makeout",
    '4eu27jAU2bbnyHUC3G75U8': 'I added this cus I LOVE THIS SONG',
    '0biCSADTAblvLTLtJz4pXO': 'me when you gen1',
    '1ccZZf0IQi5y0bHMl2aGDF': 'I mean self-explanatory... I LOVE YOUR EYES',
    '55lijDD6OAjLFFUHU9tcDm': 'hahaha right here babygirl',
    '2eqUVYJVnlDs8PgOtuOlJm': 'I INHALE your pony and get high don\'t judge me',
    '1Ukxccao1BlWrPhYkcXbwZ': 'cupid really does walk through when I\'m talking to you',
    '1yFryDjhXXIIaJA1dKqrab': 'apko laga iss gaane se mujhe pichay hata do gi??',
    '2lX53kXvYnvpV8Vqfe4S7s': "the airball i didn't even throw and it went in hahaha",
    '6qrifdo7QINdPQr80IelGi': 'F A T (Iraaday) M A remember that??',
    '4KHJo29mW1oC5G45XjU8ge': "omggg how did we twin when we weren't even talking that's insane",
    '0Q9rHyEG7lME4y2Fqtuxgl': 'I blush when I listen to this song I think ur singing it',
    '6vFsBXYczYsP0H3lgunZOm': 'same here I see you when I listen to this song. you introduced me to this banger',
    '2eAvDnpXP5W0cVtiI0PUxV': "okay I saved the best for last. I'm not kidding when I say this, I always think about you and like a dreamy vision of us being married comes infront of my eyes when I listen to this song.",
  },
};

let romanceStageIndex = 0;
let romanceMemoryIndex = 0;
let romanceDayTimer = null;

const formatRomanceDate = (dateString) => new Intl.DateTimeFormat('en-US', {
  month: 'long', day: 'numeric', year: 'numeric',
}).format(new Date(`${dateString}T00:00:00`));

const calculateRomanceDays = () => {
  const start = new Date(`${romanceConfig.lastMet}T00:00:00`);
  const now = new Date();
  return Math.max(0, Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - start) / 86400000));
};

const initRomanceProgress = () => {
  if (!romanceProgressDots) return;
  romanceProgressDots.replaceChildren();
  romanceStages.forEach((_, index) => {
    const dot = document.createElement('i');
    dot.setAttribute('aria-hidden', 'true');
    dot.classList.toggle('is-current', index === romanceStageIndex);
    romanceProgressDots.appendChild(dot);
  });
};

const initRomanceContent = () => {
  if (romanceDistanceValue) romanceDistanceValue.textContent = romanceConfig.distance;
  if (romanceLastDate) romanceLastDate.textContent = formatRomanceDate(romanceConfig.lastMet);
  if (romanceDaysCount) romanceDaysCount.textContent = '0';
  romanceMemoryIndex = 0;
  if (romanceMemoryImage && romanceConfig.memories[0]) { romanceMemoryImage.src = romanceConfig.memories[0].src; romanceMemoryImage.alt = romanceConfig.memories[0].alt; }
  if (romanceMemoryCaption && romanceConfig.memories[0]) romanceMemoryCaption.textContent = romanceConfig.memories[0].caption;
  romancePolaroid?.removeAttribute('disabled');
  romancePolaroid?.setAttribute('aria-label', 'Show the next memory');
  romanceEnvelope?.classList.remove('is-open');
  romanceEnvelope?.setAttribute('aria-expanded', 'false');
  if (romanceLetter) romanceLetter.hidden = true;
  if (romanceLetterNext) romanceLetterNext.hidden = true;
  if (romanceLetterCopy) {
    romanceLetterCopy.replaceChildren();
    romanceConfig.letter.forEach((paragraph) => {
      const element = document.createElement('p');
      element.textContent = paragraph;
      romanceLetterCopy.appendChild(element);
    });
  }
  if (bucketList) {
    bucketList.replaceChildren();
    romanceConfig.activities.forEach((activity, index) => {
      const card = document.createElement('article');
      card.className = 'bucket-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-expanded', 'false');
      card.style.setProperty('--bucket-color', activity.color);
      card.style.setProperty('--tilt', `${index % 2 ? 1.4 : -1.2}deg`);
      card.innerHTML = `<span class="bucket-number">${String(index + 1).padStart(2, '0')}</span><span class="bucket-heart">&hearts;</span><span class="bucket-lock" aria-hidden="true"><span></span></span><span class="bucket-content"><span class="bucket-title"></span><span class="bucket-copy"></span><span class="bucket-complete">NOTED IN OUR PLANS</span></span><span class="bucket-prompt"></span>`;
      card.querySelector('.bucket-title').textContent = activity.title;
      card.querySelector('.bucket-copy').textContent = activity.copy;
      const reveal = () => {
        if (card.classList.contains('is-revealed')) return;
        card.classList.add('is-revealed');
        card.setAttribute('aria-expanded', 'true');
        const complete = document.createElement('button');
        complete.type = 'button';
        complete.className = 'bucket-complete-button';
        complete.setAttribute('aria-label', `Mark ${activity.title} as complete`);
        complete.innerHTML = '&hearts;';
        complete.addEventListener('click', (event) => {
          event.stopPropagation();
          card.classList.toggle('is-done');
          complete.setAttribute('aria-pressed', String(card.classList.contains('is-done')));
        });
        card.appendChild(complete);
      };
      card.addEventListener('click', reveal);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); reveal(); }
      });
      bucketList.appendChild(card);
    });
  }
};

const spotifyIframeApiReady = new Promise((resolve, reject) => {
  const apiScript = document.createElement('script');
  apiScript.src = 'https://open.spotify.com/embed/iframe-api/v1';
  apiScript.async = true;
  apiScript.onerror = () => reject(new Error('Spotify iFrame API could not load.'));
  window.onSpotifyIframeApiReady = resolve;
  document.head.appendChild(apiScript);
});

const createSpotifyFallback = (placeholder, trackId, index) => {
  const iframe = document.createElement('iframe');
  iframe.title = `Spotify track ${index + 1}`;
  iframe.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
  iframe.loading = 'lazy';
  iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
  placeholder.replaceWith(iframe);
};

const initSpotifyEmbeds = async () => {
  if (!musicTrackList || musicTrackList.dataset.embedsInitialized === 'true') return;
  musicTrackList.dataset.embedsInitialized = 'true';
  const placeholders = [...musicTrackList.querySelectorAll('.music-track-embed')];
  let iframeApi;
  try {
    iframeApi = await spotifyIframeApiReady;
  } catch (error) {
    placeholders.forEach((placeholder, index) => createSpotifyFallback(placeholder, placeholder.dataset.trackId, index));
    return;
  }

  placeholders.forEach((placeholder, index) => {
    const trackId = placeholder.dataset.trackId;
    iframeApi.createController(placeholder, {
      uri: `spotify:track:${trackId}`,
      width: '100%',
      height: 152,
    }, () => {});
  });
};

const initMusicTracks = () => {
  if (!musicTrackList) return;
  musicTrackList.replaceChildren();
  const categorizedTrackIds = new Set(romanceConfig.musicLists.flatMap((list) => list.tracks));
  const remainingTracks = romanceConfig.musicTracks.filter((trackId) => !categorizedTrackIds.has(trackId));
  const musicLists = [
    ...romanceConfig.musicLists,
    { id: 'remaining', title: 'these hold a special place in my heart', tracks: remainingTracks },
  ];
  let trackNumber = 0;
  let openMusicSection = null;

  const setMusicSectionOpen = (section, open, shouldScroll = false) => {
    const toggle = section.querySelector('.music-list-toggle');
    const panel = section.querySelector('.music-list-panel');
    if (!toggle || !panel) return;

    section.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
    panel.inert = !open;

    if (open) {
      panel.style.height = '0px';
      requestAnimationFrame(() => {
        panel.style.height = `${panel.scrollHeight}px`;
      });
      panel.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'height' && section.classList.contains('is-open')) panel.style.height = 'auto';
      }, { once: true });
      if (shouldScroll) {
        window.setTimeout(() => {
          const bounds = section.getBoundingClientRect();
          if (bounds.bottom > window.innerHeight - 24) section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 620);
      }
      return;
    }

    panel.style.height = `${panel.scrollHeight}px`;
    requestAnimationFrame(() => {
      panel.style.height = '0px';
    });
  };

  musicLists.forEach((musicList) => {
    if (!musicList.tracks.length) return;
    const listSection = document.createElement('section');
    listSection.className = `music-list music-list-${musicList.id}`;
    listSection.setAttribute('aria-labelledby', `music-list-toggle-${musicList.id}`);
    listSection.innerHTML = `<button class="music-list-toggle" id="music-list-toggle-${musicList.id}" type="button" aria-expanded="false" aria-controls="music-list-panel-${musicList.id}"><span class="music-folder-icon" aria-hidden="true"></span><span class="music-list-title"></span><span class="music-list-arrow" aria-hidden="true">⌄</span></button><div class="music-list-panel" id="music-list-panel-${musicList.id}" role="region" aria-hidden="true"><div class="music-list-grid"></div></div>`;
    const toggle = listSection.querySelector('.music-list-toggle');
    const panel = listSection.querySelector('.music-list-panel');
    listSection.querySelector('.music-list-title').textContent = musicList.title;
    panel.inert = true;
    panel.style.height = '0px';
    const listGrid = listSection.querySelector('.music-list-grid');

    toggle.addEventListener('click', () => {
      const shouldOpen = !listSection.classList.contains('is-open');
      if (shouldOpen && openMusicSection && openMusicSection !== listSection) setMusicSectionOpen(openMusicSection, false);
      setMusicSectionOpen(listSection, shouldOpen, shouldOpen);
      openMusicSection = shouldOpen ? listSection : null;
    });

    musicList.tracks.forEach((trackId) => {
      trackNumber += 1;
      const track = document.createElement('article');
      track.className = 'music-track-card';
      track.innerHTML = `<div class="music-track-header"><span class="music-track-number">${String(trackNumber).padStart(2, '0')}</span><span class="music-track-label">TRACK ${String(trackNumber).padStart(2, '0')}</span><a href="https://open.spotify.com/track/${trackId}" target="_blank" rel="noreferrer">open in Spotify</a></div><div class="music-track-embed" data-track-id="${trackId}" role="region" aria-label="Spotify track ${trackNumber}"></div><p class="music-track-note"></p>`;
      track.querySelector('.music-track-note').textContent = romanceConfig.musicNotes[trackId] || 'Write something about this song here later...';
      listGrid.appendChild(track);
    });

    musicTrackList.appendChild(listSection);
  });
};

initMusicTracks();

const initMusicRanking = () => {
  if (!musicRankingForm || !musicRankingResults || !musicTrackList) return;

  const trackCatalog = [...musicTrackList.querySelectorAll('.music-track-card')].map((card) => ({
    number: Number(card.querySelector('.music-track-number')?.textContent),
    trackId: card.querySelector('.music-track-embed')?.dataset.trackId,
    note: card.querySelector('.music-track-note')?.textContent || '',
  }));
  const rankNames = ['1ST', '2ND', '3RD'];
  const rankInputs = [...musicRankingForm.querySelectorAll('input[type="number"]')];

  const showMessage = (message = '') => {
    musicRankingMessage.textContent = message;
    musicRankingMessage.classList.toggle('is-error', Boolean(message));
  };

  const renderRanking = (selections) => {
    musicRankingResults.replaceChildren();
    selections.forEach((selection, index) => {
      const result = document.createElement('article');
      result.className = 'music-ranking-result';
      result.innerHTML = `<div class="music-ranking-result-header"><span class="music-ranking-place">${rankNames[index]}</span><span class="music-ranking-track-number">TRACK ${String(selection.number).padStart(2, '0')}</span><a href="https://open.spotify.com/track/${selection.trackId}" target="_blank" rel="noreferrer">open in Spotify</a></div><iframe class="music-ranking-embed" title="Spotify track ${selection.number}" src="https://open.spotify.com/embed/track/${selection.trackId}?utm_source=generator&theme=0" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe><p class="music-ranking-note"></p>`;
      result.querySelector('.music-ranking-note').textContent = selection.note;
      musicRankingResults.appendChild(result);
    });
  };

  musicRankingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedNumbers = rankInputs.map((input) => Number(input.value));
    const hasInvalidNumber = selectedNumbers.some((number) => !Number.isInteger(number) || number < 1 || number > trackCatalog.length);
    if (hasInvalidNumber) {
      showMessage(`Choose a whole number from 1 to ${trackCatalog.length} for each place.`);
      return;
    }
    if (new Set(selectedNumbers).size !== selectedNumbers.length) {
      showMessage('Pick three different songs for your top 3.');
      return;
    }

    const selections = selectedNumbers.map((number) => trackCatalog[number - 1]);
    showMessage('Your top 3 is locked in 💚');
    renderRanking(selections);
    musicRankingResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  rankInputs.forEach((input) => {
    input.addEventListener('input', () => showMessage(''));
  });
};

initMusicRanking();

const getRelationshipDays = () => {
  const start = Date.UTC(2025, 8, 6);
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(0, Math.floor((today - start) / 86400000));
};

// Edit questions 17-30 before publishing. Replace every [EDIT ...] option and correct value with your own answers.
const quizQuestionBank = [
  { question: 'How long have we known each other?', options: ['7–9 years', '10+ years', 'Since 2025', 'A year'], correct: '10+ years' },
  { question: 'Where did we first meet?', options: ['School', 'In the rickshaw', 'Online', 'At your house'], correct: 'School' },
  { question: 'Who made the first move?', options: ['option number 1 T-T', 'Me', 'You', 'Neither of us'], correct: 'You' },
  { question: 'Who usually texts first?', options: ['You', 'Me', 'Whoever wakes up first', 'It changes every week'], correct: 'You' },
  { question: 'What was one of our earliest conversations about?', options: ['A calculator', 'marriage', 'office', 'letter'], correct: 'A calculator' },
  { question: 'When did we officially get together?', detail: () => `We have been together ${getRelationshipDays()} days as of today.`, options: ['6 September 2025', '22 june 2025', '19 August 2025', 'The day we first met'], correct: '6 September 2025' },
  { question: 'What’s one of our oldest shared memories?', options: ['Going to school together', 'The fun fair', 'Giving you the love letter', 'That one ovulation'], correct: 'Going to school together' },
  { question: 'What was MY first impression of you?', options: ['You’re very tall.', 'You’re extremely quiet.', 'You’re impossible to impress.', 'You’re a nerd'], correct: 'You’re very tall.' },
  { question: 'What’s my biggest hobby?', options: ['Video games', 'Watching football', 'learning arabic', 'playing football'], correct: 'Video games' },
  { question: 'What’s my favourite sport?', options: ['Cricket', 'Football', 'Table Tennis', 'Basketball'], correct: 'Football' },
  { question: 'What type of games do I enjoy most?', options: ['Story mode games', 'racing games', 'Puzzle games', 'FPS games'], correct: 'Story mode games' },
  { question: 'What’s my biggest dream?', options: ['Travelling the world', 'Going to a foreign uni', 'Marrying you', 'Get an Audi R8 E-tron'], correct: 'Marrying you' },
  { question: 'What’s something that instantly makes me happy?', options: ['Your texts', 'Hanging out with my friends', 'Winning an argument', 'Good food'], correct: 'Your texts' },
  { question: 'What’s something that annoys me?', options: ['When you ragebait me', 'When people expect me to cook in studies', 'When I dont get milk', 'When a video starts buffering'], correct: 'When you ragebait me' },
  { question: 'What’s my favourite thing to do when I’m bored?', options: ['Talk to you', 'Goon', 'doomscroll', 'kalesh'], correct: 'Talk to you' },
  { question: 'What’s something I’m particularly passionate about?', options: ['Building a life with you', 'Becoming rich', 'Winning a football tournament', 'Learning to play guitar'], correct: 'Building a life with you' },
  { question: 'What’s something I compliment you on most?', options: ['Your eyes', 'Your hair', 'Your smile', 'Your voice'], correct: 'Your eyes' },
  { question: 'What’s one thing that always makes you laugh?', options: ['my silly jokes', 'when I act shy', 'yes', 'when I overreact'], correct: 'my silly jokes' },
  { question: 'What’s your biggest dream?', options: ['becoming a doctor', 'travelling to every country', 'build a house', 'building a good career'], correct: 'becoming a doctor' },
  { question: 'What’s something you’re really passionate about?', options: ['cracking ._.', 'going abroad', 'cooking', 'crocheting'], correct: 'cracking ._.' },
  { question: 'What’s your favourite way of spending time with me?', options: ['playing minecraft/roblox', 'talking on instagram', 'talking on tiktok', 'talking on discord'], correct: 'playing minecraft/roblox', allCorrect: true },
  { question: 'What’s our biggest shared interest?', options: ['astrology', 'music', 'anatomy... ahem', 'food'], correct: 'astrology' },
  { question: 'What’s something we could talk about for hours?', options: ['literally anything', 'our future plans', 'old school stories', 'gossip'], correct: 'literally anything', allCorrect: true },
  { question: 'What’s one thing we always joke about?', options: ['that one couple.. yk who heheh... sorry', 'our dramebazi wale moments', 'your occasional enlgish mistakes', 'who loves who more'], correct: 'that one couple.. yk who heheh... sorry', allCorrect: true },
  { question: 'What’s my favourite thing about you?', options: ['you (full package)', 'your eyes', 'your mindset', 'your sense of humour'], correct: 'you (full package)', allCorrect: true },
  { question: 'What’s one thing we both want to do together?', options: ['get married', 'travel somewhere beautiful', 'get a cat', 'build our own home'], correct: 'get married', allCorrect: true },
  { question: 'What’s something that makes our relationship unique?', options: ['we can be completely ourselves with each other', 'we have similar music taste', 'we never disagree about anything', 'we have the same preferences'], correct: 'we can be completely ourselves with each other', allCorrect: true },
  { question: 'What’s one memory we’d both love to relive?', options: ['the fun fair but I was allowed in this time', 'our first call', 'our first game day', 'the days we exchanged letters'], correct: 'the fun fair but I was allowed in this time', allCorrect: true },
  { question: 'What’s something I’ve told you about our future?', options: ['we’re getting married no matter what', 'my son is gonna play football', 'we’re adopting cats', 'we’re travelling the world first'], correct: 'we’re getting married no matter what' },
  { question: 'If I could spend an entire day with you, what would I want us to do?', options: ['crack', 'intense makeout', 'cook food', 'just talk'], correct: 'crack' },
];

const quizDurationSeconds = 180;
let quizQuestions = [];
let quizAnswers = [];
let quizCurrentIndex = 0;
let quizScoreValue = 0;
let quizStartTimestamp = 0;
let quizTimerInterval = null;
let quizIsActive = false;
let quizHasCompleted = false;

const shuffleQuizOptions = (options) => {
  const shuffled = [...options];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
};

const formatQuizTime = (seconds) => {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const minutes = String(Math.floor(safeSeconds / 60)).padStart(2, '0');
  const remainder = String(safeSeconds % 60).padStart(2, '0');
  return `${minutes}:${remainder}`;
};

const updateQuizTimer = () => {
  if (!quizTimer || !quizIsActive) return;
  const elapsedSeconds = Math.floor((Date.now() - quizStartTimestamp) / 1000);
  const remainingSeconds = Math.max(0, quizDurationSeconds - elapsedSeconds);
  quizTimer.classList.toggle('is-low', remainingSeconds > 0 && remainingSeconds <= 30);
  quizTimer.classList.toggle('is-overtime', remainingSeconds === 0);
  quizTimer.textContent = remainingSeconds === 0 ? `OVERTIME +${formatQuizTime(elapsedSeconds - quizDurationSeconds)}` : formatQuizTime(remainingSeconds);
};

const setQuizQuestionAnimation = () => {
  if (!quizQuestionCard) return;
  quizQuestionCard.classList.remove('is-entering', 'is-answering');
  void quizQuestionCard.offsetWidth;
  quizQuestionCard.classList.add('is-entering');
};

const renderQuizQuestion = () => {
  const question = quizQuestions[quizCurrentIndex];
  if (!question || !quizQuestionText || !quizOptions) return;
  quizProgress.textContent = `QUESTION ${quizCurrentIndex + 1} / ${quizQuestions.length}`;
  quizProgressBar.style.width = `${((quizCurrentIndex + 1) / quizQuestions.length) * 100}%`;
  quizQuestionNumber.textContent = String(quizCurrentIndex + 1).padStart(2, '0');
  quizQuestionText.textContent = question.question;
  quizQuestionDetail.textContent = typeof question.detail === 'function' ? question.detail() : (question.detail || '');
  quizQuestionDetail.hidden = !quizQuestionDetail.textContent;
  quizOptions.replaceChildren();
  question.options.forEach((option, optionIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.dataset.optionIndex = String(optionIndex);
    button.innerHTML = `<span class="quiz-option-letter">${String.fromCharCode(65 + optionIndex)}</span><span class="quiz-option-copy"></span>`;
    button.querySelector('.quiz-option-copy').textContent = option;
    button.addEventListener('click', () => answerQuizQuestion(optionIndex));
    quizOptions.appendChild(button);
  });
  setQuizQuestionAnimation();
};

const finishQuiz = () => {
  if (!quizIsActive) return;
  quizIsActive = false;
  quizHasCompleted = true;
  window.clearInterval(quizTimerInterval);
  quizTimerInterval = null;
  const elapsedSeconds = Math.floor((Date.now() - quizStartTimestamp) / 1000);
  const incorrectCount = quizQuestions.length - quizScoreValue;
  quizGame.hidden = true;
  quizResults.hidden = false;
  quizUniverseButton.hidden = false;
  quizScore.textContent = `${quizScoreValue} / ${quizQuestions.length}`;
  quizPercentage.textContent = `${Math.round((quizScoreValue / quizQuestions.length) * 100)}%`;
  quizCorrect.textContent = String(quizScoreValue);
  quizIncorrect.textContent = String(incorrectCount);
  quizTimeTaken.textContent = formatQuizTime(elapsedSeconds);
  quizScoreMessage.textContent = quizScoreValue <= 10
    ? 'you stoobid'
    : quizScoreValue <= 20
      ? 'NOT BADDD BUT YOU CAN DO BETTER'
      : quizScoreValue <= 25
        ? 'OKAYYY THAT WAS PRETTY GOOD'
        : quizScoreValue <= 29
          ? 'THAT’S MY GIRL. YOU COOKED'
          : 'PERFECT SCORE. YOU’RE STUCK WITH ME FOREVER. ♡';
  quizReview.replaceChildren();
  const missedAnswers = quizAnswers.filter((answer) => !answer.isCorrect);
  if (!missedAnswers.length) {
    const perfect = document.createElement('p');
    perfect.className = 'quiz-perfect-review';
    perfect.textContent = 'Nothing to review. You got every answer right.';
    quizReview.appendChild(perfect);
  } else {
    const heading = document.createElement('h3');
    heading.textContent = 'Answer review';
    quizReview.appendChild(heading);
    missedAnswers.forEach((answer) => {
      const item = document.createElement('article');
      item.className = 'quiz-review-item';
      item.innerHTML = '<p class="quiz-review-question"></p><p class="quiz-review-answer quiz-review-your-answer"></p><p class="quiz-review-answer quiz-review-correct-answer"></p>';
      item.querySelector('.quiz-review-question').textContent = `${answer.number}. ${answer.question}`;
      item.querySelector('.quiz-review-your-answer').textContent = `Your answer: ${answer.selected}`;
      item.querySelector('.quiz-review-correct-answer').textContent = `Correct answer: ${answer.correct}`;
      quizReview.appendChild(item);
    });
  }
};

const answerQuizQuestion = (optionIndex) => {
  if (!quizIsActive || quizAnswers[quizCurrentIndex]) return;
  const question = quizQuestions[quizCurrentIndex];
  const selected = question.options[optionIndex];
  const isCorrect = question.allCorrect || selected === question.correct;
  quizAnswers[quizCurrentIndex] = { number: quizCurrentIndex + 1, question: question.question, selected, correct: question.correct, isCorrect };
  if (isCorrect) quizScoreValue += 1;
  quizOptions.querySelectorAll('.quiz-option').forEach((button) => {
    button.disabled = true;
    const buttonOption = question.options[Number(button.dataset.optionIndex)];
    if (question.allCorrect || buttonOption === question.correct) button.classList.add('is-correct');
    if (Number(button.dataset.optionIndex) === optionIndex && !isCorrect) button.classList.add('is-wrong');
  });
  quizQuestionCard.classList.add('is-answering');
  window.setTimeout(() => {
    quizCurrentIndex += 1;
    if (quizCurrentIndex >= quizQuestions.length) finishQuiz();
    else renderQuizQuestion();
  }, 520);
};

const resetQuizToIntro = () => {
  quizIsActive = false;
  quizHasCompleted = false;
  window.clearInterval(quizTimerInterval);
  quizTimerInterval = null;
  if (quizIntroScreen) quizIntroScreen.hidden = false;
  if (quizGame) quizGame.hidden = true;
  if (quizResults) quizResults.hidden = true;
  if (quizUniverseButton) quizUniverseButton.hidden = true;
  if (quizTimer) { quizTimer.textContent = '03:00'; quizTimer.classList.remove('is-low', 'is-overtime'); }
};

const startQuiz = () => {
  quizQuestions = quizQuestionBank.map((question) => ({ ...question, options: shuffleQuizOptions(question.options) }));
  quizAnswers = [];
  quizCurrentIndex = 0;
  quizScoreValue = 0;
  quizHasCompleted = false;
  quizStartTimestamp = Date.now();
  quizIsActive = true;
  quizIntroScreen.hidden = true;
  quizResults.hidden = true;
  quizGame.hidden = false;
  updateQuizTimer();
  quizTimerInterval = window.setInterval(updateQuizTimer, 250);
  renderQuizQuestion();
};

quizStartButton?.addEventListener('click', startQuiz);
quizRestartButton?.addEventListener('click', startQuiz);
quizBackButton?.addEventListener('click', () => showStudyPage());
studyStartQuizButton?.addEventListener('click', () => showQuizPage());
window.addEventListener('beforeunload', (event) => {
  if (!quizIsActive) return;
  event.preventDefault();
  event.returnValue = '';
});

// Edit descriptions and the three memory notes here. The memory note values are intentionally blank.
const universeExhibits = [
  { id: 'pasta', category: 'FOOD & COMFORT', label: 'alfredo', title: 'Alfredo pasta', description: 'The only food in this universe', artClass: 'pasta' },
  { id: 'icecream', category: 'FOOD & COMFORT', label: 'ice cream', title: 'Ice cream', description: 'Your favourite dessert, best enjoyed when your baba brings you some', artClass: 'icecream' },
  { id: 'noodles', category: 'FOOD & COMFORT', label: 'noodles', title: 'noodles', description: 'Your favourite snack, so here everyone eats noodles as snacks.', artClass: 'noodles', hidden: true },
  { id: 'restaurant', category: 'FOOD & COMFORT', label: 'La Taska', title: 'La Taska', description: 'Your favourite restaurant, yeah yeah you dont go to restaurants so cool huh!', artClass: 'restaurant' },
  { id: 'chocolate', category: 'FOOD & COMFORT', label: 'comfort snack', title: 'Chocolate', description: 'The comfort food for your periods: chocolate feels right, understandable.', artClass: 'chocolate' },
  { id: 'minecraft', category: 'ENTERTAINMENT', label: 'Minecraft', title: 'Minecraft', description: 'The favourite video game, chosen between Minecraft and Roblox.', artClass: 'minecraft' },
  { id: 'show', category: 'ENTERTAINMENT', label: 'Twinkling Watermelon', title: 'Twinkling Watermelon', description: 'Your favourite show, and ofc its a korean romance show', artClass: 'show' },
  { id: 'movie', category: 'ENTERTAINMENT', label: 'Big Hero 6', title: 'Big Hero 6', description: 'Your favourite animated movie. Omg Its my fav too. I loved the movie bolt aswell', artClass: 'movie', hidden: true },
  { id: 'music', category: 'ENTERTAINMENT', label: 'love/pop songs', title: 'Pop & love songs', description: 'Pop is your favourite music genre, especially when the song knows how to be romantic.', artClass: 'music' },
  { id: 'night', category: 'LITTLE PREFERENCES', label: 'night', title: 'Night time', description: 'Your favourite time of day: when the world gets quiete and the lights feel warm.', artClass: 'night' },
  { id: 'silk', category: 'LITTLE PREFERENCES', label: 'silk', title: 'Silk', description: 'Your favourite clothing texture, soft enough to deserve its own exhibit, dont question it', artClass: 'silk' },
  { id: 'scent', category: 'LITTLE PREFERENCES', label: 'floral & sweet', title: 'Floral and sweet', description: 'Your favourite scent family: floral, sweet, and a little bit dreamy', artClass: 'scent', hidden: true },
  { id: 'murree', category: 'FAVOURITE PLACES', label: 'Murree', title: 'Murree', description: 'One of your favourite places, and I get the hype its nostalgic', artClass: 'murree' },
  { id: 'islamabad', category: 'FAVOURITE PLACES', label: 'Islamabad', title: 'Islamabad', description: 'Another favourite place, just went there and it might be my favourite too (after lahore)', artClass: 'islamabad' },
  { id: 'memory-code', category: 'MEMORY CORNER', label: '01', title: 'The code-language night', description: 'That night when I discovered the code language.', artClass: 'memory-code', memory: true, message: '' },
  { id: 'memory-balcony', category: 'MEMORY CORNER', label: '02', title: 'The balcony moment', description: 'The time you saw me from the balcony.', artClass: 'memory-balcony', memory: true, message: '' },
  { id: 'memory-marks', category: 'MEMORY CORNER', label: '03', title: '530 marks', description: 'The day you got 530 marks, I was so proud I thought u were bhondu', artClass: 'memory-marks', memory: true, message: '' },
];

let universeFoundExhibits = new Set();

const updateUniverseDiscoveryCount = () => {
  if (universeDiscoveryCount) {
    universeDiscoveryCount.textContent = `${universeFoundExhibits.size} / ${universeExhibits.length} collected`;
    universeDiscoveryCount.classList.remove('is-incrementing');
    void universeDiscoveryCount.offsetWidth;
    universeDiscoveryCount.classList.add('is-incrementing');
    window.setTimeout(() => universeDiscoveryCount.classList.remove('is-incrementing'), 520);
  }
  if (universeFinalDiscovery && universeFoundExhibits.size === universeExhibits.length) {
    universeFinalDiscovery.hidden = false;
    universeFinalDiscovery.classList.add('is-unlocked');
  }
};

const resetUniverse = () => {
  universeFoundExhibits = new Set();
  document.querySelectorAll('.universe-exhibit, .universe-memory-star').forEach((button) => {
    button.hidden = false;
    button.classList.remove('is-found', 'is-collecting', 'is-collected');
    button.style.removeProperty('--collect-x');
    button.style.removeProperty('--collect-y');
    button.style.removeProperty('--collect-rotate');
    const exhibit = universeExhibits.find((item) => item.id === button.dataset.exhibitId);
    if (exhibit?.hidden) {
      button.classList.add('is-concealed');
      const object = button.querySelector('.universe-object');
      if (object) object.textContent = '?';
      const label = button.querySelector('.universe-exhibit-label');
      if (label) label.textContent = exhibit.label;
    }
  });
  if (universeReveal) universeReveal.hidden = true;
  if (universeFinalDiscovery) { universeFinalDiscovery.hidden = true; universeFinalDiscovery.classList.remove('is-unlocked'); }
  if (universeFinalMessage) universeFinalMessage.hidden = true;
  if (universeFinalButton) universeFinalButton.hidden = false;
  if (universeCakeButton) universeCakeButton.hidden = true;
  updateUniverseDiscoveryCount();
};

const fillUniverseReveal = (exhibit) => {
  if (!universeReveal) return;
  universeReveal.className = `universe-reveal universe-reveal--${exhibit.artClass}`;
  universeRevealCategory.textContent = exhibit.category;
  universeRevealArt.className = `universe-reveal-art universe-reveal-art--${exhibit.artClass}`;
  universeRevealTitle.textContent = exhibit.title;
  universeRevealDescription.textContent = exhibit.description;
  universeReveal.hidden = false;
  universeReveal.classList.remove('is-opening');
  void universeReveal.offsetWidth;
  universeReveal.classList.add('is-opening');
};

const openUniverseExhibit = (exhibitId, button) => {
  const exhibit = universeExhibits.find((item) => item.id === exhibitId);
  if (!exhibit || !button || universeFoundExhibits.has(exhibitId) || button.classList.contains('is-collecting') || button.classList.contains('is-collection-source')) return;
  if (exhibit.hidden && button.classList.contains('is-concealed')) {
    button.classList.remove('is-concealed');
    const object = button.querySelector('.universe-object');
    if (object) object.textContent = '';
    const label = button.querySelector('.universe-exhibit-label');
    if (label) label.textContent = exhibit.label;
    button.setAttribute('aria-label', `Open ${exhibit.title} exhibit`);
  }
  fillUniverseReveal(exhibit);

  const objectRect = button.getBoundingClientRect();
  const counterRect = universeDiscoveryCount?.getBoundingClientRect();
  const targetX = counterRect ? counterRect.left + counterRect.width / 2 : 32;
  const targetY = counterRect ? counterRect.top + counterRect.height / 2 : 32;
  const objectX = objectRect.left + objectRect.width / 2;
  const objectY = objectRect.top + objectRect.height / 2;

  const flightClone = button.cloneNode(true);
  flightClone.classList.remove('is-concealed', 'is-found');
  flightClone.classList.add('universe-flight-clone', 'is-collecting');
  flightClone.removeAttribute('data-exhibit-id');
  flightClone.setAttribute('aria-hidden', 'true');
  flightClone.tabIndex = -1;
  flightClone.style.left = `${objectRect.left}px`;
  flightClone.style.top = `${objectRect.top}px`;
  flightClone.style.width = `${objectRect.width}px`;
  flightClone.style.height = `${objectRect.height}px`;
  flightClone.style.setProperty('--collect-x', `${targetX - objectX}px`);
  flightClone.style.setProperty('--collect-y', `${targetY - objectY}px`);
  flightClone.style.setProperty('--collect-rotate', `${Math.round((Math.random() * 2 - 1) * 18)}deg`);
  document.body.appendChild(flightClone);
  button.classList.add('is-collection-source');

  let collectionFinished = false;
  const finishCollection = (event) => {
    if (event?.animationName && event.animationName !== 'universe-collect') return;
    if (collectionFinished) return;
    collectionFinished = true;
    flightClone.removeEventListener('animationend', finishCollection);
    flightClone.remove();
    button.classList.remove('is-collection-source');
    button.classList.add('is-collected', 'is-found');
    button.hidden = true;
    universeFoundExhibits.add(exhibitId);
    updateUniverseDiscoveryCount();
  };
  flightClone.addEventListener('animationend', finishCollection);
  window.requestAnimationFrame(() => {
    if (!collectionFinished) flightClone.classList.add('is-flight-ready');
  });
  window.setTimeout(() => {
    if (!collectionFinished) finishCollection();
  }, 980);
};

document.querySelectorAll('.universe-exhibit, .universe-memory-star').forEach((button) => {
  button.addEventListener('click', () => openUniverseExhibit(button.dataset.exhibitId, button));
});
universeRevealClose?.addEventListener('click', () => { universeReveal.hidden = true; });
universeFinalButton?.addEventListener('click', () => {
  universeFinalMessage.hidden = false;
  universeFinalButton.hidden = true;
  if (universeCakeButton) universeCakeButton.hidden = false;
});

const playBirthdayTone = () => {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const melody = [
    [392, 0, .28], [392, .34, .28], [440, .68, .52], [392, 1.28, .52], [523.25, 1.86, .52], [493.88, 2.44, .92],
    [392, 3.52, .28], [392, 3.86, .28], [440, 4.2, .42],
  ];
  const scheduleTone = () => {
    const startAt = context.currentTime + .06;
    const master = context.createGain();
    master.gain.setValueAtTime(0.0001, startAt);
    master.gain.exponentialRampToValueAtTime(0.32, startAt + 0.04);
    master.gain.exponentialRampToValueAtTime(0.0001, startAt + 5.15);
    master.connect(context.destination);
    melody.forEach(([frequency, offset, duration]) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const noteStart = startAt + offset;
      oscillator.type = 'triangle';
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, noteStart);
      gain.gain.exponentialRampToValueAtTime(0.7, noteStart + .035);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + duration);
      oscillator.connect(gain).connect(master);
      oscillator.start(noteStart);
      oscillator.stop(noteStart + duration + .06);
    });
    window.setTimeout(() => context.close(), 5800);
  };

  if (context.state === 'suspended') Promise.resolve(context.resume()).then(scheduleTone, scheduleTone);
  else scheduleTone();
};

const createCakeConfetti = () => {
  if (!cakeConfetti) return;
  cakeConfetti.replaceChildren();
  const colors = ['#f06f9d', '#f8c85d', '#9d7bea', '#73c7bf', '#ffffff', '#ef9270'];
  for (let index = 0; index < 72; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'cake-confetti-piece';
    piece.style.setProperty('--cake-x', `${(index * 37 + 4) % 100}%`);
    piece.style.setProperty('--cake-drift', `${(index % 2 ? 1 : -1) * (18 + (index % 6) * 10)}px`);
    piece.style.setProperty('--cake-rotate', `${(index * 41) % 180 - 90}deg`);
    piece.style.setProperty('--cake-delay', `${(index % 16) * .045}s`);
    piece.style.setProperty('--cake-duration', `${3.8 + (index % 6) * .22}s`);
    piece.style.setProperty('--cake-color', colors[index % colors.length]);
    cakeConfetti.appendChild(piece);
  }
};

const resetCakePage = () => {
  if (cakePopupTimer) window.clearTimeout(cakePopupTimer);
  cakePopupTimer = null;
  cakeHasBeenBlown = false;
  cakePage?.classList.remove('is-blown', 'is-celebrating');
  if (cakeLetterPopup) cakeLetterPopup.hidden = true;
  if (blowCandlesButton) {
    blowCandlesButton.disabled = false;
    blowCandlesButton.textContent = 'blow the candles →';
  }
  if (cakeStatus) cakeStatus.textContent = 'make your wish first...';
  if (cakeConfetti) cakeConfetti.replaceChildren();
};

const showCakePage = (updateHistory = true) => {
  if (!cakePage) return;
  hideMusicPage();
  document.body.classList.remove('landscape-active', 'romance-active');
  document.body.classList.add('cake-active');
  if (noButton) noButton.hidden = true;
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(loveMeterPage);
  hideScreen(confirmationPage);
  hideScreen(destinationScreen);
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  resetCakePage();
  cakePage.hidden = false;
  cakePage.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => cakePage.classList.add('is-visible'));
  if (updateHistory) updateRouteHistory('cake');
};

const showLetterPage = (updateHistory = true) => {
  if (!letterPage) return;
  hideMusicPage();
  document.body.classList.remove('landscape-active', 'romance-active');
  document.body.classList.add('letter-active');
  if (noButton) noButton.hidden = true;
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(loveMeterPage);
  hideScreen(confirmationPage);
  hideScreen(destinationScreen);
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  letterPage.hidden = false;
  letterPage.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => letterPage.classList.add('is-visible'));
  if (updateHistory) updateRouteHistory('letter');
};

cakeLetterButton?.addEventListener('click', () => showLetterPage());

blowCandlesButton?.addEventListener('click', () => {
  if (cakeHasBeenBlown) return;
  cakeHasBeenBlown = true;
  cakePage?.classList.add('is-blown', 'is-celebrating');
  if (blowCandlesButton) {
    blowCandlesButton.disabled = true;
    blowCandlesButton.textContent = 'wish made ♡';
  }
  if (cakeStatus) cakeStatus.textContent = 'happy birthday, my pretty girl ♡';
  createCakeConfetti();
  playBirthdayTone();
  cakePopupTimer = window.setTimeout(() => {
    if (cakeLetterPopup) cakeLetterPopup.hidden = false;
  }, 8000);
});

const updateRomanceDays = () => {
  if (!romanceDaysCount) return;
  const target = calculateRomanceDays();
  const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 850;
  const started = performance.now();
  const tick = (now) => {
    const progress = duration ? Math.min(1, (now - started) / duration) : 1;
    romanceDaysCount.textContent = String(Math.floor(target * progress));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const scheduleRomanceDayRefresh = () => {
  if (romanceDayTimer) window.clearTimeout(romanceDayTimer);
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 2);
  romanceDayTimer = window.setTimeout(() => {
    if (romanceJourney && !romanceJourney.hidden && romanceStageIndex === 2) updateRomanceDays();
    scheduleRomanceDayRefresh();
  }, Math.max(1000, nextMidnight.getTime() - now.getTime()));
};

const showRomanceStage = (nextIndex) => {
  if (!romanceStages.length) return;
  romanceStageIndex = Math.max(0, Math.min(romanceStages.length - 1, nextIndex));
  romanceStages.forEach((stage, index) => {
    const active = index === romanceStageIndex;
    stage.hidden = !active;
    stage.classList.toggle('is-active', active);
  });
  romanceProgressDots?.querySelectorAll('i').forEach((dot, index) => dot.classList.toggle('is-current', index === romanceStageIndex));
  romanceJourney?.scrollTo({ top: 0, behavior: 'smooth' });
  if (romanceStageIndex === 2) updateRomanceDays();
  if (romanceStageIndex === 6) {
    const finalHeart = romanceJourney?.querySelector('.final-heart path');
    if (finalHeart) { finalHeart.style.animation = 'none'; void finalHeart.getBoundingClientRect(); finalHeart.style.animation = ''; }
  }
};

function showRomanceJourney(updateHistory = true) {
  document.body.classList.remove('landscape-active');
  document.body.classList.add('romance-active');
  document.body.classList.remove('music-active');
  hideMusicPage();
  if (noButton) noButton.hidden = true;
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(loveMeterPage);
  hideScreen(confirmationPage);
  hideScreen(destinationScreen);
  initRomanceContent();
  scheduleRomanceDayRefresh();
  romanceJourney.hidden = false;
  romanceJourney.setAttribute('aria-hidden', 'false');
  initRomanceProgress();
  showRomanceStage(0);
  requestAnimationFrame(() => romanceJourney.classList.add('is-visible'));
  if (updateHistory) updateRouteHistory('romance');
}

romanceJourney?.querySelectorAll('[data-romance-next]').forEach((button) => {
  button.addEventListener('click', () => showRomanceStage(romanceStageIndex + 1));
});

romancePolaroid?.addEventListener('click', () => {
  if (romanceMemoryIndex >= romanceConfig.memories.length - 1) return;
  romanceMemoryIndex += 1;
  const memory = romanceConfig.memories[romanceMemoryIndex];
  if (romanceMemoryImage) { romanceMemoryImage.style.opacity = '0'; window.setTimeout(() => { romanceMemoryImage.src = memory.src; romanceMemoryImage.alt = memory.alt; romanceMemoryImage.style.opacity = '1'; }, 160); }
  if (romanceMemoryCaption) romanceMemoryCaption.textContent = memory.caption;
  if (romanceMemoryIndex === romanceConfig.memories.length - 1) {
    romancePolaroid.disabled = true;
    romancePolaroid.setAttribute('aria-label', 'You have seen all our memories');
  }
});

romanceEnvelope?.addEventListener('click', () => {
  romanceEnvelope.classList.add('is-open');
  romanceEnvelope.setAttribute('aria-expanded', 'true');
  window.setTimeout(() => { if (romanceLetter) romanceLetter.hidden = false; if (romanceLetterNext) romanceLetterNext.hidden = false; }, 650);
});

romanceLetterNext?.addEventListener('click', () => showRomanceStage(6));
romanceJourney?.querySelector('[data-romance-restart]')?.addEventListener('click', () => showRomanceJourney());
romanceBackToWorld?.addEventListener('click', () => { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); showLandscape(); });
const showMusicPage = (updateHistory = true) => {
  hideMusicPage();
  document.body.classList.remove('landscape-active');
  document.body.classList.remove('romance-active');
  document.body.classList.add('music-active');
  if (noButton) noButton.hidden = true;
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(loveMeterPage);
  hideScreen(confirmationPage);
  hideScreen(destinationScreen);
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  musicPage.hidden = false;
  musicPage.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => {
    musicPage.classList.add('is-visible');
    requestAnimationFrame(initSpotifyEmbeds);
  });
  if (updateHistory) updateRouteHistory('music');
};

const showStudyPage = (updateHistory = true) => {
  if (!studyPage) return;
  hideMusicPage();
  document.body.classList.remove('landscape-active');
  document.body.classList.remove('romance-active');
  document.body.classList.add('study-active');
  if (noButton) noButton.hidden = true;
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(loveMeterPage);
  hideScreen(confirmationPage);
  hideScreen(destinationScreen);
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  studyPage.hidden = false;
  studyPage.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => studyPage.classList.add('is-visible'));
  if (updateHistory) updateRouteHistory('study');
};

const showQuizPage = (updateHistory = true) => {
  if (!quizPage) return;
  hideMusicPage();
  document.body.classList.remove('landscape-active');
  document.body.classList.remove('romance-active');
  document.body.classList.add('quiz-active');
  if (noButton) noButton.hidden = true;
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(loveMeterPage);
  hideScreen(confirmationPage);
  hideScreen(destinationScreen);
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  resetQuizToIntro();
  quizPage.hidden = false;
  quizPage.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => quizPage.classList.add('is-visible'));
  if (updateHistory) updateRouteHistory('quiz');
};

const showQuizResultsPage = (updateHistory = true) => {
  if (!quizPage || !quizHasCompleted) return showQuizPage(updateHistory);
  hideMusicPage();
  document.body.classList.remove('landscape-active');
  document.body.classList.remove('romance-active');
  document.body.classList.add('quiz-active');
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(loveMeterPage);
  hideScreen(confirmationPage);
  hideScreen(destinationScreen);
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  quizIntroScreen.hidden = true;
  quizGame.hidden = true;
  quizResults.hidden = false;
  quizPage.hidden = false;
  quizPage.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => quizPage.classList.add('is-visible'));
  if (updateHistory) updateRouteHistory('quiz-results');
};

const showUniversePage = (updateHistory = true) => {
  if (!universePage) return;
  hideMusicPage();
  document.body.classList.remove('landscape-active');
  document.body.classList.remove('romance-active');
  document.body.classList.add('universe-active');
  if (noButton) noButton.hidden = true;
  hideScreen(entryScreen);
  hideScreen(landingScreen);
  hideScreen(questionScreen);
  hideScreen(landscapeScreen);
  hideScreen(loveMeterPage);
  hideScreen(confirmationPage);
  hideScreen(destinationScreen);
  if (romanceJourney) { romanceJourney.hidden = true; romanceJourney.classList.remove('is-visible'); romanceJourney.setAttribute('aria-hidden', 'true'); }
  resetUniverse();
  universePage.hidden = false;
  universePage.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => universePage.classList.add('is-visible'));
  if (updateHistory) updateRouteHistory('universe');
};

const returnToRomanceFinal = () => {
  hideMusicPage();
  document.body.classList.remove('music-active');
  document.body.classList.add('romance-active');
  romanceJourney.hidden = false;
  romanceJourney.setAttribute('aria-hidden', 'false');
  showRomanceStage(6);
  requestAnimationFrame(() => romanceJourney.classList.add('is-visible'));
  updateRouteHistory('romance');
};

openMusicButton?.addEventListener('click', () => showMusicPage());
musicNextButton?.addEventListener('click', () => showStudyPage());
musicBackButton?.addEventListener('click', returnToRomanceFinal);
studyBackButton?.addEventListener('click', () => showMusicPage());
quizUniverseButton?.addEventListener('click', () => showUniversePage());
universeBackButton?.addEventListener('click', () => showQuizResultsPage());
universeCakeButton?.addEventListener('click', () => showCakePage());
confirmationContinueButton?.addEventListener('click', () => showRomanceJourney());

const restoreRoute = () => {
  const route = window.location.hash.slice(1);
  if (route === 'romance') showRomanceJourney(false);
  if (route === 'music') showMusicPage(false);
  if (route === 'study') showStudyPage(false);
  if (route === 'quiz') showQuizPage(false);
  if (route === 'quiz-results') showQuizResultsPage(false);
  if (route === 'universe') showUniversePage(false);
  if (route === 'cake') showCakePage(false);
  if (route === 'letter') showLetterPage(false);
  if (route === 'world') showLandscape(false);
  if (route === 'love') showLoveMeter(false);
  if (route === 'confirmation' && confirmationUnlocked) showConfirmation(false);
  if (route.startsWith('destination-')) showDestination(route.replace('destination-', ''), false);
};

window.addEventListener('popstate', restoreRoute);
updateDiscoveryVisuals();
restoreRoute();
