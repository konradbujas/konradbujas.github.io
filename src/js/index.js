import "../scss/main.scss";

console.log("Hello, I'm Konrad. Nice to meet you 🚀");

// dark-mode--js

let isDark = false ;
const switchModes = document.querySelector('.mode--js');
switchModes.addEventListener('click', () => {
    if (isDark) {
        
        document.documentElement.style.setProperty('--background-color','#fefefe');
        document.documentElement.style.setProperty('--text-color','#333333');
        isDark = false;
    } else {
        document.documentElement.style.setProperty('--background-color','#37383b');
        document.documentElement.style.setProperty('--text-color','#8f8a8a');
        isDark = true;
    }
})




// project-grid--js

fetch(
  "https://api.github.com/users/konradbujas/repos?sort=created&direction=asc"
)
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".project-grid--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;

      const template = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src="img/github-icon.svg" alt="github icon" />
          <h3 class="project__grid project__title">
            <span class="project__label">project:</span>
            <span>${name}</span>
          </h3>
          <p class="project__grid project__grid--description">
            <span class="project__label">description:</span>
            <span>${description}</span>
          </p>

          <p class="project__grid">
            <span class="project__label">demo:</span>
            <span
              >&lt;<a
                target="_blank"
                rel="noopener noreferrer"
                class="project__link"
                href="${homepage}"
                title="${name} - demo"
                >see_here</a
              >&gt;</span
            >
          </p>

          <p class="project__grid">
            <span class="project__label">github:</span>
            <span
              >&lt;<a
                target="_blank"
                rel="noopener noreferrer"
                class="project__link"
                href="${html_url}"
                title="${name} - github"
                >source_code</a
              >&gt;</span
            >
          </p>
        </div>
      </article>`;
      if (homepage) {
        container.innerHTML += template;
      }
    }
  })
  .catch((e) => console.log(e));

