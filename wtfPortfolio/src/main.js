const projectsContainer = document.getElementById('projects');

const createComponent = (name, description, languages, stars, urlToRepo) => {
    let component =  `<div><h1>${name} <span>${stars}</span></h1><p>${description}</p><ul>`;

    for(const language in languages) {
        component += `<li>${language}</li>`
    }

    component = component + `</ul><a href=""><img src"./images/download.svg">View Demo</a><a href="${urlToRepo}"><img src"./images/download.svg">Source code</a></div>`;
    return component;
}

const getProjects = async () => {
  const url = "https://api.github.com/users/adrian-paliwoda/repos";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const message = "Response with error codee " + response.status;
      console.log(message);
      throw new Error(message);
    }

    let allComponent = '';
    const result = await response.json();
    for(const repo of result){
        const name = repo.name;
        const description = repo.description;
        const languages = repo.languages;
        const stars = repo.stargazers_count;
        const urlToRepo = repo.clone_url;

        const component = createComponent(name, description, languages, stars, urlToRepo);

        allComponent += component;
    }
    projectsContainer.innerHTML = allComponent;
    

  } catch (error) {
    console.log("Cannot obtain projects.");
  }
};



getProjects();