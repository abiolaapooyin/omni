# Omni AI Interface

A modern, responsive React + Next.js single-page web application that serves as an AI prompt interface connected to Langflow. The application features a clean, elegant, dark-based theme with good contrast and mobile responsiveness.

## Features

- **Modern UI**: Clean, dark-themed interface with animated components
- **Responsive Design**: Fully responsive for all device sizes
- **API Integration**: Connected to Langflow API for AI responses
- **Animations**: Smooth animations using Framer Motion
- **Tailwind CSS**: Styled with Tailwind for consistent design

## Tech Stack

- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/components` - React components
- `/pages` - Next.js pages
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configuration

## Components

- **CircularText**: Animated circular text in the header
- **SilkBackground**: Animated background effect
- **AnnouncementBar**: Status announcement at the top
- **GradientText**: Text with animated gradient effect
- **DecryptedText**: Text with decryption animation effect
- **PromptInput**: Input field with expanding functionality
- **ChatMessage**: Message display for conversation
- **ThinkingIndicator**: Loading indicator while waiting for AI response

## API Integration

The application connects to Langflow API for AI responses. The API endpoint is configured in the `handleSendMessage` function in the `index.js` file.

## Customization

You can customize the application by modifying the following:

- **Theme**: Edit the Tailwind configuration in `tailwind.config.js`
- **Components**: Modify individual components in the `/components` directory
- **API**: Update the API endpoint and parameters in the `handleSendMessage` function

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React Bits](https://www.reactbits.dev) for component inspiration
- [21st.dev](https://21st.dev) for UI components
- Abiola Apooyin for the experiment