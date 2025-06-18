import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.init";

// src/Hooks/useAuthFetch.js
export const authFetch = async (url) => {
  const auth = getAuth(app)
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User not authenticated");
  }
  const token = await user?.accessToken

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Response("Failed to fetch", { status: response.status });
  }

  return response.json();
};
