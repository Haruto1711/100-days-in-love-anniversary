document.addEventListener('DOMContentLoaded', function() {
    const birthdayAudio = document.getElementById('birthdayAudio');
    const changeButton = document.getElementById('changeContent');
    const contentParagraph = document.getElementById('content');
    const newContents = [
      "I am certain that we will love each other for 1,000 days, 100,000 days, and forever after. We will face life's challenges together, and I am happy to share those difficulties with you. We will cherish even the smallest joys together as we grow old, and we will thank life for allowing us to be together.",
      "True love is always hard to find in life; finding each other is already difficult, and cherishing each other is even harder.",
      "So, no matter what challenges we face, I hope we will solve them together, and I love that",
      "I love you with all my heart, and I always hope that you will love me the way I love you. Congratulations on our 100-day anniversary; soon, it will be 1,000 days, and soon after, a truly happy wedding. I will love you forever with all my heart! Haruto (November 17, 2002)",
      "A few words of advice from my older sister to us: \"Although 100 days of love is not a very long time, it is enough for you both to understand each other better and cherish every moment together.",
      "True love is always the most precious thing, something that everyone dreams of finding. To preserve and nurture that love, always strive to understand, trust, forgive, and love each other wholeheartedly.",
      "Only then can love endure through time, overcoming all challenges to reach the shore of happiness. Once again, congratulations to Haruto and Siyuan.",
      "May your love remain forever pure, growing stronger and more sublime with each passing day. I hope that you will soon have a perfect wedding in the future. May your love last eternally. Be happy!",
    ];
    let currentIndex = 0;
    let isFirstClick = true;
  
    changeButton.addEventListener('click', function() {
        if (isFirstClick) {
            birthdayAudio.play();
            isFirstClick = false;
            }
      contentParagraph.textContent = newContents[currentIndex];
      currentIndex = (currentIndex + 1) % newContents.length;
    });
  });