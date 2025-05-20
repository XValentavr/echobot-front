# Chat App with React + Vite

A mobile-optimized chat interface built with React, Tailwind CSS, and Vite.

## Features

- 📱 Mobile-optimized chat interface
- 💬 Message bubbles (left for bot, right for user)
- ⌨️ Input field fixed at bottom of screen
- ⏳ Loading animation when waiting for bot response
- 🔄 Session-based message storage (no database)
- ✨ Smooth animations and transitions
- 🎙️ Voice input simulation
- 💡 Smart reply suggestions
- 🔄 Retry mechanism for failed messages
- 🧩 Component-based architecture
- 🛠️ ESLint configuration

## Project Structure

```
chat-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Chat/
│   │   │   ├── index.jsx
│   │   │   ├── ChatHeader.jsx
│   │   │   ├── ChatMessages.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   └── ChatExtras.jsx
│   │   ├── Messages/
│   │   │   ├── Message.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── SmartReplies.jsx
│   │   │   ├── TypingIndicator.jsx
│   │   │   └── EmptyState.jsx
│   │   └── UI/
│   │       ├── Button.jsx
│   │       ├── IconButton.jsx
│   │       └── InputField.jsx
│   ├── services/
│   │   └── api.js
│   ├── hooks/
│   │   ├── useChat.js
│   │   └── useVoiceInput.js
│   ├── utils/
│   │   └── helpers.js
│   ├── styles/
│   │   └── animations.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .eslintrc.json
├── .prettierrc
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/chat-app.git
cd chat-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## Backend Integration

The chat app connects to a backend API with a single endpoint:

- **Endpoint**: POST /chat
- **Request**: `{ "message": "Hello" }`
- **Response**: `{ "reply": "You said: Hello" }`

Update the API_URL in `src/services/api.js` to match your backend URL.

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Technologies Used

- React
- Vite
- Tailwind CSS
- ESLint
- Prettier
- Lucide React (for icons)