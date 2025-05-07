# 🕵️ Truth Hound  
### *Can you sniff out the lie?*

**Truth Hound** is a minimal yet engaging web-based party game inspired by *"Two Truths and a Lie"*. The game challenges players to identify the false statement from a set of three — two truths and one lie. With a sleek UI, expressive animated reactions, and two play modes (AI-generated or custom friend input), **Truth Hound** offers a fun and interactive way to break the ice or kill time with friends.

---

## 🧠 Gameplay Overview

### 🎮 Play Modes
- **Play with AI**  
  Compete against the game’s brain — it generates intriguing facts from categories like:
  - Geography 🌍  
  - History 📜  
  - Art 🎨  
  - Literature 📚  
  The user must identify the lie in each set of facts.

- **Play with Friends**  
  Users create their own pool of facts (at least 15: 10 truths and 5 lies). The game uses these to build five unique, non-repeating rounds.

---

## 👾 Key Features

- 🎭 **Animated Reactions**: A crying face worsens with each wrong answer. Win streaks start with a smirk and become increasingly boastful.
- 💬 **"Can you sniff out the lie?" prompt** appears before every round.
- 🧠 **Life Counter**: Players start with 3 brains (lives). One brain is lost for each incorrect guess.
- 🔄 **Rounds & Elimination**: Game ends after 5 rounds or if all brains are lost.
- 🔒 **No Repeats**: Facts used once in a session will not appear again.
- 🧾 **Fact Input Panel**: In “Play with Friends”, users input facts and tag each as “True” or “Lie”. A 2:1 ratio is enforced (2 truths for every lie).
- 📦 **Clean, Responsive UI**: Tabs for mode selection are visible only during gameplay.

---

## 📋 Game Flow

### 🕐 Intro Phase (10 seconds)
- Display:  
  **Truth Hound**  
  *Can you sniff out the lie?*

### 🚦 Mode Selection
- Flashing buttons:
  - "Play with AI"
  - "Play with Friends"

---

### 🧑‍🤝‍🧑 If "Play with Friends" is selected:
1. Redirect to **Fact Input Interface**
2. User enters at least 15 facts:
   - Each fact marked as either:
     - ✅ "This is true"
     - ❌ "This is the lie"
   - Button "Proceed to the Truth" activates after required count is met.

3. Launches the **Gameplay Interface**:
   - Facts are shuffled and alternated per round.
   - Game tab now shows:
     - Round counter (1 to 5)
     - Brain life counter
     - "Play with AI" / "Play with Friends" tabs (active)
     - "Can you sniff out the lie?" prompt
     - Three interactive fact buttons

---

### 🤖 If "Play with AI" is selected:
- Launches game directly with 5 rounds of AI-generated fact sets.
- Player can switch to “Play with Friends”, but is prompted to input 15 valid facts before proceeding.

---

## 🛠 Tech Stack

- **React** (Frontend)
- **Framer Motion** (Animations)
- **Tailwind CSS** (Styling)
- **Custom Fact Engine** for AI mode (Can use [Open Trivia DB](https://opentdb.com/) or curated fact list)

---

## 📂 Project Structure (Suggested)

src/
├── components/
│ ├── GameBoard.js
│ ├── FactInputForm.js
│ ├── LifeCounter.js
│ ├── ModeSelection.js
│ ├── AnimatedFace.js
├── pages/
│ ├── IntroScreen.js
│ ├── PlayAI.js
│ ├── PlayFriends.js
├── data/
│ └── aiFacts.js
├── utils/
│ └── shuffleFacts.js
├── App.js
├── index.js


---

## 🚧 Development Notes

- Validate that fact inputs maintain the 2 truths:1 lie ratio.
- Prevent fact reuse during a session.
- Provide friendly UI/UX error messages if a user:
  - Tries to proceed without enough facts.
  - Switches modes mid-session.
- Add sound feedback (optional): Success chime or fail buzz.

---

## 📦 Installation

```bash
git clone https://github.com/Fiona-Nyadero/truth-hound.git
cd truth-hound
npm install
npm start


✅ TODOs
 Add dark mode toggle

 Score summary at the end of 5 rounds

 Share your score feature

 Leaderboard (optional multiplayer feature)

🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request with clear commit messages.

📜 License
MIT License. See LICENSE for details.

🧩 Credits
Created by [Fiona-Nyadero] — for fun and icebreaking!