console.log('Before')
// - Call Back ftn (when the result of asynchronus operation is ready, then call back ftn would be called with result)
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

// Promise-base approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log("Commits: ", commits))
//     .catch(err => console.log('Error', err.message))

// Async and await approach - write async code as sync code
async function displayCommits() {
  try {
    const user = await getUser(1)
    const repos = await getRepositories(user.gitHubUsername)
    const commits = await getCommits(repos[0])
    console.log(commits)
  } catch (error) {
    console.log('Error: ', error.message)
  }
}

displayCommits()

console.log('After')

function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log('Reading a user from a database...')
      resolve({ id: id, gitHubUsername: 'mosh' })
    }, 2000)
  })
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...')
      resolve(['repo1', 'repo2', 'repo3']) // - Call Back (when the result of asynchronus operation is ready, then call back ftn would be called with result)
      // reject(new Error('Could not get the repos.'))
    }, 2000)
  })
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API 2...')
      resolve(['commit'])
    }, 2000)
  })
}

// Promises - is an Object that Holds the eventual result of async operation. When async operations complete, it
// either results in a value or error. A promise promises us that it will give u the result of an async operation.
// This object can be in one of these states. 1. Pending 2. Fulfilled - (value) 3. Rejected - (Error)
