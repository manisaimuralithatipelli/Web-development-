# 🔗 URL Shortener

A full-stack URL Shortener web application that converts long URLs into short, shareable links — with built-in visit tracking and analytics.

![Top Language](https://img.shields.io/github/languages/top/manisaimuralithatipelli/Web-development-?style=for-the-badge&color=2563eb)
![Repo Size](https://img.shields.io/github/repo-size/manisaimuralithatipelli/Web-development-?style=for-the-badge&color=0f172a)
![Last Commit](https://img.shields.io/github/last-commit/manisaimuralithatipelli/Web-development-?style=for-the-badge&color=16a34a)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Tech Icons](https://skillicons.dev/icons?i=nodejs,express,mongodb,html,css,js,git,github)

## 🚀 Live Demo

The application is deployed and live at:

**[url-shortner-5lk9.onrender.com](https://url-shortner-5lk9.onrender.com)**

## 📖 Overview

This is a full-stack URL Shortener application. A user enters a long URL, and the application generates a unique shortened URL. When someone visits the shortened URL, they are automatically redirected to the original URL.

Every visit is recorded, and the application provides analytics — including total click counts and individual visit timestamps for each shortened URL.

This project was built to understand how a frontend communicates with a Node.js/Express backend and a MongoDB database, and to build a practical, real-world backend project involving URL redirection and analytics.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, EJS |
| Backend | Node.js, Express.js |
| Database | MongoDB, MongoDB Atlas |
| Other | dotenv (environment variables), Render (deployment) |

## 📂 Project Structure

```
URL Shortener/
├── app.js
├── package.json
├── package-lock.json
│
├── models/
│   └── url.js
│
├── routes/
│   └── route.js
│
├── views/
│   ├── home.ejs
│   ├── analytics.ejs
│   └── analyticsid.ejs
│
├── public/
│   └── css/
│       ├── style.css
│       ├── analytics.css
│       └── analyticsid.css
│
└── Screenshots/
    ├── Analyticsid.jpg
    ├── analytics.jpg
    ├── home.jpg
    └── redirectUrl.jpg
```

### File & Folder Purpose

| Path | Description |
|---|---|
| `app.js` | Main Express application — middleware setup, MongoDB connection, route mounting, home page rendering, and server startup. |
| `models/url.js` | Mongoose model that defines the schema for shortened URLs. |
| `routes/route.js` | Handles URL creation, redirection, and analytics routes. |
| `views/` | EJS templates that render the frontend pages. |
| `public/css/` | Stylesheets for the home, analytics, and analytics-detail pages. |
| `Screenshots/` | Screenshots demonstrating the application's UI and functionality. |
| `package.json` | Project dependencies and the start script. |
| `package-lock.json` | Locked dependency versions. |

## 🗄️ Database Model

Shortened URLs are stored in MongoDB using a Mongoose model with the following fields:

| Field | Description |
|---|---|
| `shortId` | Unique identifier used in the shortened URL. |
| `redirectURL` | The original (long) URL the user is redirected to. |
| `visitHistory` | An array of visit records, each containing a `timestamp`. |

The total number of clicks for a URL is calculated from the number of entries in its `visitHistory` array.

## 🔀 Routes

The router is mounted in `app.js`:

```js
app.use("/url", router);
```

| Method | Route | Description |
|---|---|---|
| `POST` | `/url` | Creates a new shortened URL. The user submits a long URL, the backend generates a unique short ID, and the URL information is stored in MongoDB. |
| `GET` | `/url/:id` | Redirects the user to the original URL associated with the given short ID. The visit is recorded in `visitHistory` with a timestamp before redirecting. |
| `GET` | `/url/analytics` | Displays analytics for all shortened URLs — serial number, short ID, redirect URL, and total clicks. |
| `GET` | `/url/analytics/:id` | Displays detailed analytics for one specific shortened URL — short ID, total clicks, redirect URL, and visit history with timestamps. |

Total clicks are always calculated using the length of the corresponding `visitHistory` array.

## 🖥️ Frontend Pages

| Page | Description |
|---|---|
| `home.ejs` | The main URL Shortener page — URL input, shorten functionality, short URL result, and an "Explore More Routes" section. |
| `analytics.ejs` | Displays analytics for all shortened URLs in a table. |
| `analyticsid.ejs` | Displays detailed analytics for one specific shortened URL, including total clicks and visit timestamps. |

## 🎨 Styling

The project uses separate CSS files for each page:

- `style.css` — main/home page styling
- `analytics.css` — styling for the overall analytics table page
- `analyticsid.css` — styling for the detailed URL analytics page

The UI includes responsive styling for smaller screens.

## 🔄 Application Flow

1. User enters a long URL on the home page.
2. The frontend sends the URL to the Express backend.
3. The backend generates a unique short ID.
4. The shortened URL information is stored in MongoDB.
5. The shortened URL can be opened using its short ID.
6. The backend finds the matching URL entry in MongoDB.
7. A visit timestamp is added to `visitHistory`.
8. The user is redirected to the original URL.
9. The analytics pages calculate total clicks from `visitHistory`.
10. The detailed analytics page displays the individual visit timestamps.

## ⚙️ Environment Variables

The application uses `dotenv` to read the MongoDB connection string. Create a `.env` file in the project root:

```
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

> ⚠️ The `.env` file is used locally only and should **not** be committed to GitHub.

## 💻 Running Locally

```bash
npm install
npm start
```

The app uses the `start` script defined in `package.json`. Once running, open the application through the local server address/port configured in the app.

## ☁️ Deployment

The application is deployed on **Render** as a Node.js web service.

| Setting | Value |
|---|---|
| Root Directory | `URL Shortener` |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Environment Variable | `MONGO_URI` (set on the deployment platform) |

**Live URL:** [url-shortner-5lk9.onrender.com](https://url-shortner-5lk9.onrender.com)

## 📸 Screenshots

**Home Page**

![Home Page](Screenshots/home.jpg)

**Analytics Page**

![Analytics Page](Screenshots/analytics.jpg)

**Detailed Analytics Page**

![Detailed Analytics](Screenshots/Analyticsid.jpg)

**Redirect in Action**

![Redirect URL](Screenshots/redirectUrl.jpg)

## 🎯 What This Project Demonstrates

This project reflects practical, hands-on experience with:

- Node.js & Express.js
- MongoDB & Mongoose
- EJS templating
- REST-style routing
- URL redirection logic
- Database read/write operations
- Visit tracking
- Analytics computation
- Environment variables
- Deployment (Render)

## 📝 Summary

This project was built to practice full-stack development by connecting an EJS frontend with an Express/Node.js backend and a MongoDB database — implementing URL shortening, redirection, visit tracking, and analytics from the ground up.

**Built With:** Node.js · Express.js · MongoDB · Mongoose · EJS · HTML · CSS
