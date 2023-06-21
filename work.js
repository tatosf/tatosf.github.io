import { Octokit } from "https://cdn.skypack.dev/@octokit/rest@18.5.6";

const octokit = new Octokit();


function createWorkExperienceBox(workExperience) {
  const box = document.createElement('div');
  box.className = 'box work-box';

  // Add your work experience details inside the box
  box.innerHTML = `
    <h3>${workExperience.title}</h3>
    <p class= "years">${workExperience.years}</p>
    <p>${workExperience.description}</p>
  `;

  return box;
}

// Function to create a box for each GitHub repo
function createGitHubRepoBox(githubRepo) {
  const box = document.createElement('div');
  box.className = 'box github-box';

  // Add your GitHub repo details inside the box
  box.innerHTML = `
    <h3><a href="${githubRepo.html_url}">${githubRepo.name}</a></h3>
    <p>${githubRepo.description}</p>
  `;

  return box;
}

// fetch repositories
octokit.repos.listForUser({
  username: 'tatosf'
}).then(({ data }) => {
  // Populate GitHub repo boxes
  const githubReposContainer = document.getElementById('github-repos-container');
  data.forEach(githubRepo => {
    const box = createGitHubRepoBox(githubRepo);
    githubReposContainer.appendChild(box);
  });
}).catch(error => {
  console.error(error);
});

// display work experience
const workExperienceContainer = document.getElementById('work-experience-container');
const workExperienceItems = [
  {
    title: 'Proycon - Tech Intern',
    years: 'May - August 2021',
    description: "Shadowed the Technology Manager in the company in his day-to-day. Improved the organization of bought hardware, improving excel sheets for inventory being used. Helped with day to day tech problems"
  },
  {
    title: 'Economic Data Lab - OCP Notariado',
    years: 'May - July 2022',
    description: 'Predicting operations with high risk of money laundering, identifying relevant features based on big data.',
  },
  {
    title: 'MUSCLE - Intern',
    years: 'June - August 2023',
    description: 'Currently helping in quality assurance validation for banking software development.',
  },
];
workExperienceItems.forEach(item => {
  const box = createWorkExperienceBox(item);
  workExperienceContainer.appendChild(box);
});
