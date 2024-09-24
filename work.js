document.addEventListener('DOMContentLoaded', function() {
  // Fetch and display GitHub repos
  fetchGitHubRepos();

  // Display work experience
  const workExperienceContainer = document.getElementById('work-experience-container');
  if (workExperienceContainer) {
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
        title: 'MUSCLE Points - Software Engineer Intern',
        years: 'June - August 2023',
        description: 'Helped create web application for KPI internal metrics for banking clients using React. Also used cypress to create tests for the website.',
      },
      {
        title: '41OPS - Data Engineer Intern',
        years: 'June - August 2024',
        description: 'Developed a KPI page for managers to monitor broker performance. Created a compliance module, allowing employees to add compliance documentation for AI models upon deployment.',
      },
    ];
    const fragment = document.createDocumentFragment();
    workExperienceItems.forEach(item => {
      const box = createWorkExperienceBox(item);
      fragment.appendChild(box);
    });
    workExperienceContainer.appendChild(fragment);
  } else {
    console.error('Work experience container not found');
  }
});

function fetchGitHubRepos() {
  const githubReposContainer = document.getElementById('github-repos-container');
  if (!githubReposContainer) {
    console.error('GitHub repos container not found');
    return;
  }

  fetch('https://api.github.com/users/tatosf/repos?sort=created&direction=desc&per_page=6')
    .then(response => response.json())
    .then(data => {
      const fragment = document.createDocumentFragment();
      data.forEach(githubRepo => {
        const box = createGitHubRepoBox(githubRepo);
        fragment.appendChild(box);
      });
      githubReposContainer.appendChild(fragment);
    })
    .catch(error => {
      console.error('Error fetching GitHub repos:', error);
    });
}