# Manual Landing Quiz App

A React Native quiz application built with Expo, featuring a dynamic questionnaire system and state management.

## Project Structure

```
ManualLandingQuiz/
├── app/                   # Main application screens and routing
│   ├── (quiz)/            # Quiz-related screens
│   ├── _layout.tsx        # Root layout configuration
│   ├── +not-found.tsx     # Error handling page for unknown urls
│   ├── index.tsx          # Landing page
│   ├── InfoScreen.tsx     # Learn more page
│   └── results.tsx        # Quiz results page
├── assets/                # Static assets (images, fonts, json)
│   ├── images/
│   ├── fonts/           
│   └── json/              # Quiz and learn more data
├── atoms/                 # Jotai atoms for state management
└── components/            # Reusable UI components
```

## State Management

### Local State (useState)
Used for component-level state management and UI state (selected options, current question).

In-app example:
```typescript
const [selectedAnswer, setSelectedAnswer] = useState<Option | null>(null);
```

### Global State (Jotai)
Used for app-wide state management, in this case a boolean flag to keep track if any answer selected is a cause for rejection.

In-app example:
```typescript
// atoms/quizState.ts
import { atom } from 'jotai';

export const hasRejectionAtom = atom<boolean>(false);
```

## Architecture

### Component Structure
- Presentational components in `/components`
- Screen components in `/app`

### Routing
Uses Expo Router for file-based routing:
- Dynamic routes with `[id].tsx`
- Grouped routes in `(quiz)`
- Modal presentations

### Data Flow
1. User interactions trigger state updates
2. State changes propagate through Jotai atoms
3. Components re-render based on state changes
4. Navigation handled by Expo Router

## Next steps to implement ⏳

- Replace the simple state management with a more robust solution (leaning towards MobX) to futureproof against future needs and requirements.
- Add unit tests to the business logics and mappers above.
- Separate out the theme (primary colours, font styles, etc.) to a global file to follow DRY principle.
- Fix the issue where custom font (TT Norms) not being loaded at all.

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Start the development server
```bash
npx expo start
```

3. Run on iOS Simulator
```bash
npx expo run:ios
```

4. Run on Android Emulator
```bash
npx expo run:android
```

## Development

### Prerequisites
- Node.js 16 or later
- Xcode for iOS development
- Android Studio for Android development

### Environment Setup
1. Install Expo CLI
```bash
npm install -g expo-cli
```

2. Install development dependencies
```bash
npm install --save-dev
```

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Jotai Documentation](https://jotai.org/)
- [React Native Documentation](https://reactnative.dev/)
