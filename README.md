# 🎬 AI Short Video Automation

AI-powered platform to generate and render short videos programmatically using cutting-edge tools like Gemini, Remotion, Aigurulab, and Deepgram. Choose a genre, generate a script, customize styles, and create your video with ease.

---

## 🚀 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Convex](https://www.convex.dev/)
- **Authentication**: [Firebase Authentication](https://firebase.google.com/products/auth)
- **Workflow Orchestration**: [Inngest](https://www.inngest.com/)
- **Script Generation**: [Gemini Model](https://deepmind.google/technologies/gemini/)
- **Image Generation**: [Aigurulab Model](https://www.aigurulabs.ai/)
- **Video Rendering**: [Remotion](https://www.remotion.dev/)
- **Audio Generation**: [Deepgram API](https://www.deepgram.com/)

---

## 🎥 Features

- 🔍 **Genre Selection**: Pick from a wide variety of genres:
  - Historic Story
  - Kids Story
  - Movie Stories
  - AI Innovations
  - Space Mysteries
  - Horror Stories
  - Mythological Tales
  - Tech Breakthroughs
  - True Crime Stories
  - Fantasy Adventures
  - Science Experiments
  - Motivational Stories

- ✍️ **Script Generation**:
  - Automatically generate 2 unique scripts with the **Gemini** model
  - Choose the one you prefer

- 🎨 **Customization Options**:
  - **Video Style**: Anime, Realistic, Cyberpunk
  - **Caption Style**: Multiple Tailwind CSS-based themes
  - **Audio Style**: Generated using Deepgram

- 🎞 **Final Video Creation**:
  - Combine script, images, captions, and audio
  - Rendered using **Remotion**

---

## 🧠 How It Works

1. Select a **genre**
2. Generate 2 scripts using **Gemini AI**
3. Pick your preferred **script**
4. Choose **video style**, **caption style**, and **audio type**
5. Click **Generate Video**
6. Watch Remotion programmatically render your short video!

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-short-video-automation.git
cd ai-short-video-automation
```

## 📦 2. Install Dependencies

Install all required project dependencies using npm:

```bash
npm install
```

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

# Convex Database
NEXT_PUBLIC_CONVEX_URL=https://your-convex-instance.convex.cloud

# Gemini AI Model (Script Generation)
GEMINI_API_KEY=your_gemini_api_key

# Aigurulab API (Image Generation)
AIGURULAB_API_KEY=your_aigurulab_api_key

# Deepgram API (Audio Generation)
DEEPGRAM_API_KEY=your_deepgram_api_key
npm run dev
http://localhost:3000


