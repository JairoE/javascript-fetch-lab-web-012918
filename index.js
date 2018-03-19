function getIssues() {
  fetch(`https://api.github.com/repos/JairoE/javascript-fetch-lab/issues`)
  .then(resp => resp.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  let issues = document.getElementById('issues')
  for (issue of json){
    let p = document.createElement('p')
    p.innerText = issue.url
    issues.append(p)
  }
}

function createIssue() {
  let new_title = document.getElementById('title').value
  let new_body = document.getElementById('body').value

  fetch(`https://api.github.com/repos/JairoE/javascript-fetch-lab/issues`, {
    method:'post',
    headers:{Authorization: getToken()},
    body: JSON.stringify({title: new_title, body: new_body})
  })
  getIssues()
}

function showResults(json) {
  let results = document.getElementById('results')
  let link = document.createElement('a')
  link.href = json.html_url
  link.appendChild(document.createTextNode("This is my repo"))
  link.setAttribute("id", "my_repo")
  results.append(link)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method:'post',
    headers:{Authorization: getToken()}
  })
  .then(res => res.json())
  .then(json => {
    console.log(json)
    showResults(json)
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
