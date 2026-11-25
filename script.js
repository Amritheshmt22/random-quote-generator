(function () {
  'use strict';

  var QUOTES = [
    { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { text: 'In the middle of every difficulty lies opportunity.', author: 'Albert Einstein' },
    { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
    { text: 'The best time to plant a tree was twenty years ago. The second best time is now.', author: 'Chinese Proverb' },
    { text: 'Whether you think you can or you think you can\u2019t, you\u2019re right.', author: 'Henry Ford' },
    { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
    { text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
    { text: 'What you get by achieving your goals is not as important as what you become by achieving your goals.', author: 'Zig Ziglar' },
    { text: 'You miss 100% of the shots you don\u2019t take.', author: 'Wayne Gretzky' },
    { text: 'The journey of a thousand miles begins with one step.', author: 'Lao Tzu' },
    { text: 'Believe you can and you\u2019re halfway there.', author: 'Theodore Roosevelt' },
    { text: 'Everything you\u2019ve ever wanted is on the other side of fear.', author: 'George Addair' },
    { text: 'Happiness is not something ready made. It comes from your own actions.', author: 'Dalai Lama' },
    { text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
    { text: 'Act as if what you do makes a difference. It does.', author: 'William James' },
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' }
  ];

  var quoteTextEl = document.getElementById('quoteText');
  var quoteAuthorEl = document.getElementById('quoteAuthor');
  var newQuoteBtn = document.getElementById('newQuoteBtn');
  var copyBtn = document.getElementById('copyBtn');
  var feedbackEl = document.getElementById('feedback');

  var lastIndex = -1;
  var feedbackTimer = null;

  function randomIndex(except) {
    if (QUOTES.length < 2) { return 0; }
    var i;
    do {
      i = Math.floor(Math.random() * QUOTES.length);
    } while (i === except);
    return i;
  }

  function render(index) {
    var q = QUOTES[index];
    quoteTextEl.textContent = '\u201C' + q.text + '\u201D';
    quoteAuthorEl.textContent = '\u2014 ' + q.author;
    lastIndex = index;
  }

  function showNewQuote() {
    render(randomIndex(lastIndex));
    quoteTextEl.classList.remove('fade');
    quoteAuthorEl.classList.remove('fade');
    void quoteTextEl.offsetWidth;
    quoteTextEl.classList.add('fade');
    quoteAuthorEl.classList.add('fade');
  }

  function currentQuoteString() {
    return QUOTES[lastIndex].text + ' \u2014 ' + QUOTES[lastIndex].author;
  }

  function showFeedback(message) {
    feedbackEl.textContent = message;
    if (feedbackTimer) { clearTimeout(feedbackTimer); }
    feedbackTimer = setTimeout(function () {
      feedbackEl.textContent = '';
    }, 2000);
  }

  function fallbackCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'absolute';
    area.style.left = '-9999px';
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  function copyCurrentQuote() {
    var text = currentQuoteString();
    function done(ok) {
      showFeedback(ok ? 'Copied to clipboard!' : 'Copy failed \u2014 select the text manually.');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        done(true);
      }, function () {
        done(fallbackCopy(text));
      });
    } else {
      done(fallbackCopy(text));
    }
  }

  newQuoteBtn.addEventListener('click', showNewQuote);
  copyBtn.addEventListener('click', copyCurrentQuote);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'n' || event.key === 'N') {
      if (event.target && (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA')) {
        return;
      }
      showNewQuote();
    }
  });

  render(randomIndex(-1));
})();
