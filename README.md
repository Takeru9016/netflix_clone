# Netflix Clone

## Description
This **Netflix Clone** replicates the core features of Netflix, including user authentication, dynamic movie browsing, and personalized watchlists. Built using **Next.js**, **TailwindCSS**, **Firebase**, **Material UI**, **Recoil**, and **React Hook Form**, it provides a smooth and interactive movie-browsing experience.

## Features
- Firebase authentication for secure user login.
- Movie browsing interface with personalized watchlists.
- State management using Recoil for seamless app state flow.
- Responsive design using TailwindCSS and Material UI.
- Form handling with React Hook Form for various forms across the site.

## Tech Stack
- **Frontend**: Next.js, TailwindCSS, Material UI
- **State Management**: Recoil
- **Form Management**: React Hook Form
- **Authentication**: Firebase
- **Backend**: Firebase
- **Deployment**: Vercel

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Takeru9016/netflix_clone.git
    cd netflix-clone
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Firebase**:
    Add Firebase credentials to the `.env` file:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

5. **Access the app** at `http://localhost:3000`.

## Usage
- Sign up or sign in using Firebase authentication.
- Browse movies and add them to your watchlist.
- Enjoy a responsive, Netflix-like user experience.

## Future Improvements
- Integration with a movie database API for real movie content.
- Enhanced filtering and search functionalities.
