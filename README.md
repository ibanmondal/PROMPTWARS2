# VoteWise — Election Process Education AI Assistant 🗳️

![VoteWise Banner](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Gemini AI](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

**VoteWise** is an interactive, AI-powered web application designed to help citizens understand the democratic election process, critical timelines, and voting steps. Built from the ground up to be fully accessible, responsive, and easy to run.

Built for the **Hack2Skill — Election Process Education Challenge**.

---

## ✨ Features

- **AI Chat Assistant:** Powered by Google's `gemini-2.0-flash` model, VoteWise acts as a knowledgeable civics teacher to answer any questions regarding voter registration, polling day, campaign finances, and more.
- **Interactive Election Timeline:** A beautiful, visual representation of the U.S. election cycle from voter registration to inauguration.
- **Multilingual Support:** One-click Google Translate widget instantly translates the comprehensive UI into over 10 languages (Spanish, French, Hindi, and more).
- **Accessibility First:** Screen reader friendly elements (ARIA tags), a `.skip-link` for keyboard navigation, and respects `prefers-reduced-motion` browser settings.
- **Quality of Life Utilities:** Copy AI responses to your clipboard, clear chat history, and an integrated Text-to-Speech Engine that reads out the information for you.

## 🚀 Tech Stack

VoteWise is purposefully built with a **Vanilla Web Stack**, emphasizing zero-build-step mechanics for rapid hackathon deployment.
- **HTML5 & CSS3** directly integrated for the DOM and modern, glassmorphic styling.
- **Vanilla JavaScript** managing API calls, DOM manipulation, and text-to-speech.
- **Google Gemini Generative AI API** for all the underlying prompt completions.
- **Google Analytics GA4** for application event tracking.

## 🛠️ Setup & Local Development

Because VoteWise operates entirely in the browser, there are no `npm install` steps needed! Just follow these instructions.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/votewise.git
   cd votewise
   ```

2. **Add your Gemini API Key:**
   By default, `config.js` is ignored by Git to keep API keys safe. You must create this file locally.
   Create a file named `config.js` in the root directory:
   ```javascript
   window.ENV = {
     GEMINI_API_KEY: "YOUR_GOOGLE_GEMINI_API_KEY_HERE"
   };
   ```

3. **Run the App:**
   Simply double-click `index.html` to open it in your browser! Alternatively, use a tool like Live Server on VSCode.

## ☁️ Deployment

VoteWise is ready to be deployed to **Firebase Hosting**.

1. Install Firebase tools if you haven't yet:
   ```bash
   npm install -g firebase-tools
   ```
2. Login to your Firebase Account:
   ```bash
   firebase login
   ```
3. Initialize hosting (select the current directory as your public directory):
   ```bash
   firebase init hosting
   ```
4. Deploy the site:
   ```bash
   firebase deploy
   ```

*(Note: In an edge-client deployment scenario like this, `config.js` is uploaded to Firebase so the browser can access the API key to make requests to Gemini. Do not use this architecture with a paid/billing-enabled production key!)*

## 💡 About

Created by [Your Name/Team] to increase voter turnout and drastically reduce friction and confusion surrounding governmental registration and operational processes. Let's build a more informed democracy!
