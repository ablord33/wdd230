document.addEventListener('DOMContentLoaded', function() {
  const baseURL = 'https://ablord33.github.io/wdd230';
  const linksURL = `${baseURL}/data/links.json`;

  async function getLinks() {
      const response = await fetch(linksURL);
      const data = await response.json();
      displayLinks(data.weeks);
  }

  function displayLinks(weeks) {
      const container = document.getElementById('links-container'); // Replace with your container's ID

      weeks.forEach(week => {
          const weekElement = document.createElement('h2');
          weekElement.textContent = week.week;
          container.appendChild(weekElement);

          week.links.forEach(link => {
              const linkElement = document.createElement('a');
              linkElement.href = `${baseURL}/${link.url}`;
              linkElement.textContent = link.title;
              container.appendChild(linkElement);
          });
      });
  }

  getLinks();

  const weatherAPIKey = '74fa0eb0cbeba754d2e09f7a61a0969d'; // Changed variable name to avoid conflict
  const city = 'Accra';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const temp = data.main.temp;
          const description = data.weather[0].description;
          const icon = data.weather[0].icon;

          // Now you can use these values to update your information card
          // For example:
          document.getElementById('temperature').textContent = `Temperature: ${temp}`;
          document.getElementById('description').textContent = `Conditions: ${description}`;
          document.getElementById('icon').src = `http://openweathermap.org/img/w/${icon}.png`;
      });
});
