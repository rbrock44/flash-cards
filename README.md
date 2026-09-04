# FlashCards

> This project hosts flashcards used to help study <br/>
> [Live - Flash Cards Website](https://flash-cards.ryan-brock.com/)

Screenshots:
![preview](/screenshots/main.png)
![main category](/screenshots/main-category.png)
![start](/screenshots/start.png)
![flash card](/screenshots/flash-card.png)
![flash card answer](/screenshots/flash-card-answer.png)

---

## 📚 Table of Contents

- [What's My Purpose?](#-whats-my-purpose)
- [How to Use](#-how-to-use)
- [Technologies](#-technologies)
- [Getting Started (Local Setup)](#-getting-started-local-setup)
  - [Run Locally](#run-locally)
  - [Test](#test)
  - [GitHub Hooks](#github-hooks)
  - [Build](#build)
  - [Deploy](#deploy)
- [How to Contribute](#-how-to-contribute)

---

## 🧠 What's My Purpose?

This is a server side single-page angular frontend project powered by a single json file located in this [repo](https://github.com/rbrock44/flash-cards-data) <br/>
It's purpose was to assist my girlfriend going through a medical coding class. It's been set up to expand far beyond that with several variations of a flash card (per category).

Decks live as one `flash-card-data.json` file in that sibling repo, shaped as `categories -> subCategories -> flashCards`, where each flash card is `{ id, question, answer, example?, type? }`. This app doesn't read that file directly - it calls the `home-page-api` service, which fetches the raw JSON off `flash-cards-data`'s `master` branch on every request. To add or update a deck, edit `flash-card-data.json` in [flash-cards-data](https://github.com/rbrock44/flash-cards-data) and open a PR there; once it's merged to `master` the new cards show up here on the next load, no redeploy of this app needed.

---

## 🚦 How to Use

- `Select MainCategory` - Select any main category (EX: Medical)
- `Select SubCategory` - Select any sub category (EX: 100 Word Parts)
- `Start - Select Options` - Select start options then click `Start` button
- `Flash Card`
    - `Home` button - goes back to home screen
    - Forward and backward arrows - to navigate through flash cards
    - Answer/Question - click this blue/green flashcard to see the other side

Screenshots:
![preview](/screenshots/main.png)
![main category](/screenshots/main-category.png)
![start](/screenshots/start.png)
![flash card](/screenshots/flash-card.png)
![flash card answer](/screenshots/flash-card-answer.png)

---

## 🛠 Technologies

- Framework: `Angular 18`
- Testing: `Karma`,
- Deployment: `GitHub Pages`

---

## 🚀 Getting Started (Local Setup)

* Install [node](https://nodejs.org/en) - v18 is needed (v20 also works)
* Clone [repo](https://github.com/rbrock44/flash-cards)

---

### Run Locally

```
npm install
npm start
```

---

### Test

- Unit
    - `ng test` || `npm run test`
- Integration
    - `ng e2e` || `npm run e2e`

---

### Github Hooks

- Build
    - Trigger: On Push to Main
    - Action(s): Builds application then kicks off gh page action to deploy build output

---

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

### Deploy

Run `npm run prod` to build and deploy the project. Make sure to be on `master` and that it is up to date before running the command. It's really meant to be a CI/CD action

---

## 🤝 How to Contribute

Found a typo or a small, obvious fix? Open a PR directly.
Want to change behavior or add something bigger? Open an issue first so we can talk it through before you put in the work.

---
