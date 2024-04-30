// Fetch Web API

// const gitAPI = fetch('https://api.github.com/users/andrew');

// gitAPI.then((res) => res.json())
// .then((profile) => console.log(profile))
// .catch((error) => console.log(error));

// console.log(gitAPI);

async function getInfoFromGit() {
    const res = await fetch('https://api.github.com/users/andrew');

    const profile = await res.json();
    console.log(profile);

}

getInfoFromGit();