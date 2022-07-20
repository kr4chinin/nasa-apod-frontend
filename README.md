# Astronomica 🪐 - NASA APOD Infinite Feed With Authorization

## Introduction

This is fullstack project made for better representation of [NASA APOD](https://apod.nasa.gov/apod/archivepixFull.html) API. **APOD** stands for Astronomy Picture Of the Day. Server logic located in this repo - [nasa-apod-backend](https://github.com/kr4chinin/nasa-apod-backend). Try this app live via GitHub Pages [here](https://kr4chinin.github.io/nasa-apod-frontend/#/login).

### Functionality

In this application I've implemented:

* **Infinite** feed - when you scroll down to the end of the chunk (1 chunk - 10 posts) - another chunk will be loaded automatically
* **JWT authorization** (token TTL is 1 hour), password encryption
* **Favourites** section where you can store posts which you've liked, their identificators are saved in the DB (MongoDB) so they will be automatically refetched even if you will close this page and come back later
* **Responsive** layout and **hamburger menu** for mobile devices
* Show more / show less buttons for long posts and other small features for better UI / UX

This is how **login** and **registration** pages are look like:

<img width="800" alt="login page" src="https://user-images.githubusercontent.com/103210607/180055824-81db8a44-9209-4a98-bfd9-8d108772264b.png">

<img width="800" alt="registration page" src="https://user-images.githubusercontent.com/103210607/180055842-e6d1fcbb-57d7-446a-a164-38a9a322ca47.png">

Infinite **feed** and **favourites** section:

<img width="800" alt="feed page" src="https://user-images.githubusercontent.com/103210607/180057531-90ca2f02-73e1-4919-8283-a97b9327e212.png">

<img width="800" alt="favourites page" src="https://user-images.githubusercontent.com/103210607/180057575-7d0aa967-d64c-4477-ad27-f2bfeff69632.png">

<img width="800" alt="favourites empty page" src="https://user-images.githubusercontent.com/103210607/180057652-e990a243-59d9-4a8d-8e7a-1ed0c977aecf.png">

**Hamburger menu** and warning for devices with small width:

<img width="200" alt="hamburger menu" src="https://user-images.githubusercontent.com/103210607/180058616-41f80e0d-1610-44c6-bada-881c800f2ac3.PNG">

<img width="200" alt="orientation warning" src="https://user-images.githubusercontent.com/103210607/180058634-9f6bb896-a7aa-4e56-b67a-968f1b7ce56f.PNG">

And you may see some **warnings** like these below if your token has expired or you were not authorized:

<img width="800" alt="not auth feed" src="https://user-images.githubusercontent.com/103210607/180059280-f2f977e2-d0a4-4956-aeeb-404a24f40007.png">

<img width="800" alt="not auth favourites" src="https://user-images.githubusercontent.com/103210607/180059289-07667caf-1cf1-4d58-82d4-d09bcb967478.png">

### Tech stack

* React + TypeScript
* Bulma + SCSS for interface and layout
* ReactQuery (useQuery, useMutation)
* Usehooks TS (useIntersectionObserver)
* Axios

### Future plans

* Optimize feed, delete / hide content chunks which are far from current scroll position and fetch them again if necessary
* Make UI developments







