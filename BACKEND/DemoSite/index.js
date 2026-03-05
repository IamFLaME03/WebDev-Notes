import express from 'express'
import 'dotenv/config'

const app = express()

const githubData = {
   "login": "IamFLaME03",
   "id": 134549574,
   "node_id": "U_kgDOCAUQRg",
   "avatar_url": "https://avatars.githubusercontent.com/u/134549574?v=4",
   "gravatar_id": "",
   "url": "https://api.github.com/users/IamFLaME03",
   "html_url": "https://github.com/IamFLaME03",
   "followers_url": "https://api.github.com/users/IamFLaME03/followers",
   "following_url": "https://api.github.com/users/IamFLaME03/following{/other_user}",
   "gists_url": "https://api.github.com/users/IamFLaME03/gists{/gist_id}",
   "starred_url": "https://api.github.com/users/IamFLaME03/starred{/owner}{/repo}",
   "subscriptions_url": "https://api.github.com/users/IamFLaME03/subscriptions",
   "organizations_url": "https://api.github.com/users/IamFLaME03/orgs",
   "repos_url": "https://api.github.com/users/IamFLaME03/repos",
   "events_url": "https://api.github.com/users/IamFLaME03/events{/privacy}",
   "received_events_url": "https://api.github.com/users/IamFLaME03/received_events",
   "type": "User",
   "user_view_type": "public",
   "site_admin": false,
   "name": "Kirtan Patel",
   "company": null,
   "blog": "",
   "location": "Gujarat, India",
   "email": null,
   "hireable": true,
   "bio": "Hello👋\r\nI'm Kirtan, a 4rd year student studying Computer Science & Engineering at SVMIT, Bharuch. \r\nI really like working with data and development.",
   "twitter_username": null,
   "public_repos": 17,
   "public_gists": 0,
   "followers": 0,
   "following": 1,
   "created_at": "2023-05-24T19:30:40Z",
   "updated_at": "2026-02-24T03:24:28Z"
}

const port = 4000

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
   res.send('Twitter')
})

app.get('/login', (req, res) => {
   res.send("<h1>Please login</h1>")
})

app.get('/youtube', (req, res) => {
   res.send("<h2>Chai code</h2>")
})

app.get('/github', (req, res) => {
   res.json(githubData)
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${process.env.PORT}`)
})
