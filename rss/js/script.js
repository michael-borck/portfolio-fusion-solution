// Where do we want to put the articles
let content = document.getElementById('content');

// Default feed URL
const defaultFeed = 'https://hacks.mozilla.org/rss';

// Function to fetch and display RSS data
function fetchRSS(rssUrl) {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      content.innerHTML = ''; // Clear previous content
      if (data.items && data.items.length > 0) {
        data.items.forEach(item => {
          let article = document.createElement('article');
          article.innerHTML = `<h3><a href="${item.link}" target="_blank" rel="noopener">${item.title}</a></h3>
            <p>${item.description}</p>`;
          content.appendChild(article);
        });
      } else {
        content.innerHTML = '<p>No articles found.</p>';
      }
    })
    .catch(err => {
      console.error('Fetch error:', err);
      content.innerHTML = '<p>Failed to load RSS feed.</p>';
    });
}

// On button click, use the input or default
document.getElementById('add-feed').addEventListener('click', () => {
  let rssInput = document.getElementById('rss-input').value.trim();
  if (rssInput) {
    fetchRSS(rssInput);
  } else {
    fetchRSS(defaultFeed);
  }
});

// Load default on page load
fetchRSS(defaultFeed);
// Where do we want to put the articles
let content = document.getElementById('content');

// Default feed URL
const defaultFeed = 'https://hacks.mozilla.org/rss';

// Function to fetch and display RSS data
function fetchRSS(rssUrl) {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      content.innerHTML = ''; // Clear previous content
      if (data.items && data.items.length > 0) {
        data.items.forEach(item => {
          let article = document.createElement('article');
          article.innerHTML = `<h3><a href="${item.link}" target="_blank" rel="noopener">${item.title}</a></h3>
            <p>${item.description}</p>`;
          content.appendChild(article);
        });
      } else {
        content.innerHTML = '<p>No articles found.</p>';
      }
    })
    .catch(err => {
      console.error('Fetch error:', err);
      content.innerHTML = '<p>Failed to load RSS feed.</p>';
    });
}

// On button click, use the input or default
document.getElementById('add-feed').addEventListener('click', () => {
  let rssInput = document.getElementById('rss-input').value.trim();
  if (rssInput) {
    fetchRSS(rssInput);
  } else {
    fetchRSS(defaultFeed);
  }
});

// Load default on page load
fetchRSS(defaultFeed);

