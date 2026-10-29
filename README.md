# SecretWord — The Imposter Game 🕵️‍♂️

**SecretWord** is a modern, responsive, pass-the-device party game designed for **2 to 10 players**, along with an independent **Solo Word Challenge**.

It is built entirely with vanilla **HTML5, CSS3, and JavaScript**, requiring no backend servers, no Node.js/npm builds, no external libraries, and no paid API keys. It runs directly in any modern web browser and is fully ready to deploy to **GitHub Pages** for free.

---

## Table of Contents
1. [About the Game](#1-about-the-game)
2. [Project Files & Architecture](#2-project-files--architecture)
3. [How to Open and Play Locally](#3-how-to-open-and-play-locally)
4. [How to Play: Gameplay & Rules](#4-how-to-play-gameplay--rules)
5. [Scoring System](#5-scoring-system)
6. [Testing the Game (Step-by-Step Guide)](#6-testing-the-game-step-by-step-guide)
7. [How to Publish on GitHub Pages (Beginner Friendly)](#7-how-to-publish-on-github-pages-beginner-friendly)
8. [How to Update Your Site Later](#8-how-to-update-your-site-later)
9. [Privacy & Technical Limitations](#9-privacy--technical-limitations)

---

## 1. About the Game

### Two Game Modes
- **Multiplayer Imposter Game (2–10 Players)**:
  Players pass a single smartphone, tablet, or laptop. Everyone secretly receives the identical secret word — except for **one random Imposter** who receives only a warning that they are the Imposter. Each player gives a one-word or short clue, then the group votes on who they think the Imposter is. If caught, the Imposter gets one last guess to steal points!
- **Solo Word Challenge**:
  A single-player deduction game. Choose any category, read the clue, and guess the hidden word within 5 attempts before the optional timer expires.

---

## 2. Project Files & Architecture

The project is intentionally kept clean, lightweight, and easy to maintain:

```
scretWord/
├── index.html       # The complete Single Page Application (SPA) structure and semantic screens
├── style.css        # Premium dark gaming stylesheet, responsive layout, animations & controls
├── script.js        # Word bank, role randomization, clue timer, voting logic, solo mode & storage
└── README.md        # Beginner guide, testing documentation, and GitHub Pages deployment instructions
```

### Detailed File Summary
- **`index.html`**: Contains all 13 view panels (Home, Player Setup, Category & Timer Selection, Ready Check, Role Reveal, Clue Round, Voting Ballot, Voting Tally, Imposter Guess, Round Results, All-time Leaderboard, Solo Challenge, How to Play, and Settings).
- **`style.css`**: Provides a deep navy/purple dark theme with neon cyan accents, accessible typography, custom SVG countdown timer ring, responsive cards for mobile and desktop, and reduced-motion support.
- **`script.js`**:
  - Built-in categorized word bank (Animals, Food, Movies, Sports, Technology, Everyday Objects, Places, Random Mix).
  - Custom words manager (add, delete, persist).
  - Timer controller with start, pause, resume, and skip functionality.
  - Web Audio API synthesizer for sound effects and vibration (no audio assets to download).
  - LocalStorage manager with fail-safe memory fallback for scores and preferences.

---

## 3. How to Open and Play Locally

You do **not** need to install any server or command-line tools to play!

1. Open your File Explorer on Windows.
2. Navigate to your project folder:
   ```
   C:\Users\Pon Rajesh\scretWord
   ```
3. **Double-click on `index.html`**.
4. The game will immediately open in your default browser (Google Chrome, Microsoft Edge, Firefox, or Brave).

*Tip:* In VS Code, you can also right-click `index.html` and select **"Open with Live Server"** (if installed) or **"Copy Path"** and paste it into your browser address bar.

---

## 4. How to Play: Gameplay & Rules

### Multiplayer (2 to 10 players)
1. **Setup**: Enter between 2 and 10 player names. Pick a category and choose a clue timer (15s, 30s, or 45s). You can also add your own custom words!
2. **Private Role Reveal**:
   - Hand the device to Player 1.
   - Player 1 clicks **Reveal My Role**.
   - Regular players see the Secret Word and Category.
   - The Imposter sees **"YOU ARE THE IMPOSTER"** and never sees the word.
   - Player taps **Hide & Pass to Next Player** before handing the device over.
3. **Clue Round**:
   - Each player takes turns giving a verbal clue (a word or short phrase).
   - *Rule:* You cannot say the secret word or any part of it.
   - *Imposter tip:* Listen closely to others and bluff convincingly!
4. **Voting Phase**:
   - Hand the device to each player in turn.
   - Players cast a secret ballot for who they suspect is the Imposter. Self-voting is automatically disabled.
   - Intermediate votes are strictly hidden until everyone has voted.
5. **Vote Results & Tie Resolution**:
   - The final vote tally is displayed.
   - If one player receives the most votes, the game reveals if they are the Imposter.
   - If there is a tie, players can choose to **Revote (Tied candidates only)** or **End Round as a Tie**.
6. **Imposter Final Guess**:
   - If the Imposter is caught, they get **one final attempt** to guess the secret word. If they succeed, they steal back points!

### Playing with Exactly 2 Players
- The game fully supports 2 players.
- In a 2-player game, one player is the Imposter and one is regular. Since players cannot vote for themselves, each player votes for the other, resulting in a 1–1 tie.
- The 2-player mode operates as an intense bluffing game: Can the regular player give a clue subtle enough that the Imposter cannot identify the word?

---

## 5. Scoring System

Points are awarded once at the end of each round and saved to the device's **Leaderboard**:

| Situation | Imposter Points | Regular Players Points |
| :--- | :---: | :---: |
| **Imposter escapes uncaught** (innocent voted out or vote skipped) | **+3 pts** | 0 pts |
| **Imposter caught, but guesses the secret word correctly** | **+2 pts** | **+1 pt** each |
| **Imposter caught, and fails to guess the secret word** | 0 pts | **+2 pts** each |
| **Unresolved tie vote** (Imposter survives) | **+2 pts** | 0 pts |

---

## 6. Testing the Game (Step-by-Step Guide)

Follow this testing checklist to verify all features:

### Test 1: Player Name Validation
- Try starting with 1 player $\rightarrow$ Error displayed: *"At least 2 players are required"*.
- Add players up to 10 $\rightarrow$ *"Add Player"* button disables at 10.
- Enter a duplicate name (e.g. two players named "Alex") $\rightarrow$ Error displayed: *"Each player must have a unique name"*.
- Leave a name blank $\rightarrow$ Error displayed: *"Player cannot have an empty name"*.

### Test 2: Two-Player Game
- Set 2 players (e.g. "Alice" and "Bob").
- Click **Next: Category & Timer** $\rightarrow$ Step 2 (Category & Timer options).
- Click **Start Game** $\rightarrow$ Notice the helpful 2-player duel confirmation dialog.
- Click **Start 2-Player Game** to proceed.
- Player 1 reveals role $\rightarrow$ either sees secret word or Imposter notice.
- Player 2 reveals role.
- Complete Clue round $\rightarrow$ proceed to voting.
- Voting ballot: Alice can only vote for Bob; Bob can only vote for Alice.
- Results show 1–1 tie $\rightarrow$ Test both **Revote** and **End Round as Tie**.

### Test 3: Standard 3+ Player Flow & Imposter Guess
- Setup 3 players (e.g. "Maya", "Leo", "Sam").
- Reveal roles: Identify who was assigned the Imposter.
- Clue Round:
  - Test **Start Timer**, **Pause**, **Resume**, and **Skip Timer**.
  - Click **Next Player** until the round completes.
- Voting:
  - Vote for the actual Imposter.
  - Notice the Imposter is caught!
  - Test the **Final Guess** screen:
    - Type the correct secret word $\rightarrow$ Imposter gets +2 pts, regulars get +1 pt.
    - Or test wrong guess $\rightarrow$ Regulars get +2 pts, Imposter gets 0 pts.

### Test 4: Custom Words
- Go to Step 2 (Words).
- Type a new custom word (e.g. `"Starship"`) and click **Add**.
- Notice the word appears as a removable tag.
- Select **Custom Words** category $\rightarrow$ verifies only custom words are used.
- Remove the word $\rightarrow$ tag disappears.

### Test 5: Solo Word Challenge
- From Home, click **Solo Challenge**.
- Read the category and descriptive hint in the clue card.
- Type an incorrect guess $\rightarrow$ feedback displays remaining attempts (e.g. *"Incorrect guess. 4 attempts remaining"*).
- Type the correct word $\rightarrow$ success message appears, score increases (+10 pts plus streak bonus), and fire streak 🔥 increments.
- Click **Give up & Reveal Word** if stuck $\rightarrow$ reveals the secret word and resets streak.
- Check **Leaderboard $\rightarrow$ Solo** tab $\rightarrow$ verifies your high score and best streak are recorded.

### Test 6: Settings & Reset
- Go to **Settings**.
- Change default timer to 15s.
- Click **Reset Multiplayer Scores** $\rightarrow$ Confirmation dialog appears. Confirm and verify leaderboard resets to 0.

---

## 7. How to Publish on GitHub Pages (Beginner Friendly)

Deploying to GitHub Pages makes your game playable online on any mobile phone or computer around the world for free!

### Step 1: Create a GitHub Account
If you don't already have one, go to [github.com](https://github.com/) and sign up.

### Step 2: Create a New Repository
1. Log in to GitHub.
2. In the top-right corner, click the **`+`** icon and choose **New repository**.
3. Fill in:
   - **Repository name**: `secretword` (or any name you prefer).
   - **Visibility**: Choose **Public** (required for free GitHub Pages).
   - **Initialize repository**: Leave everything unchecked (do not add README or .gitignore yet).
4. Click **Create repository**.

### Step 3: Upload the Project Files via Web Browser
1. On your newly created repository page, look for the text:
   *"...or push an existing repository from the command line"*, or click the link that says **uploading an existing file**.
2. Drag and drop these 4 files from your `C:\Users\Pon Rajesh\scretWord` folder into GitHub:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Scroll down to **Commit changes**.
4. Type a short message like `"Initial release of SecretWord"` and click **Commit changes**.

### Step 4: Enable GitHub Pages
1. In your GitHub repository, click on the **Settings** tab (gear icon at the top).
2. On the left sidebar under *Code and automation*, click **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or `master`) and leave the folder as `/ (root)`.
4. Click **Save**.

### Step 5: Get Your Live Website URL
1. Refresh the Pages settings screen after 1–2 minutes.
2. At the top, you will see a banner:
   > **"Your site is live at https://<your-username>.github.io/secretword/"**
3. Click the link to open your live game! Share this link with friends or open it on your phone to play.

---

## 8. How to Update Your Site Later

Whenever you want to add new words or change styles:
1. Edit `index.html`, `style.css`, or `script.js` on your computer.
2. Go to your GitHub repository in your browser.
3. Click on the file you modified, click the **pencil icon (Edit this file)**, paste your updated code, and commit.
4. *Or* click **Add file $\rightarrow$ Upload files**, drag the updated file, and overwrite it.
5. GitHub Pages will automatically update within 1 to 2 minutes.

---

## 9. Privacy & Technical Limitations

- **Pass-the-Device Privacy**:
  This is a casual in-person party game. Secrecy relies on players honestly hiding the screen before handing the device to the next person. Since everything runs client-side in the browser, anyone who opens browser Developer Tools can see variables in memory. This is completely standard for local pass-the-phone party games.
- **LocalStorage**:
  Scores, custom words, and preferences are saved in your browser's `localStorage`. If you clear your browser cookies and site data, or play in Private/Incognito mode, saved scores will reset when the tab is closed.

Enjoy playing **SecretWord** with your friends and family! 🕵️🎉
