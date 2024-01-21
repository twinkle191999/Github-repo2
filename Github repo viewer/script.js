document.getElementById('githubForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    fetchRepositories(username);
});

function fetchRepositories(username) {
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(repositories => displayRepositories(repositories))
        .catch(error => console.error('Error fetching repositories:', error));
}

function displayRepositories(repositories) {
    const repositoriesContainer = document.getElementById('repositories');
    repositoriesContainer.innerHTML = '';

    repositories.forEach(repository => {
        const repoDiv = document.createElement('div');
        repoDiv.classList.add('repository');

        const title = document.createElement('h2');
        title.textContent = repository.name;

        const description = document.createElement('p');
        description.textContent = repository.description || 'No description available.';

        repoDiv.appendChild(title);
        repoDiv.appendChild(description);

        repositoriesContainer.appendChild(repoDiv);
    });
}
