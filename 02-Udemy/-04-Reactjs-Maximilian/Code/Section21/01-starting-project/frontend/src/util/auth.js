import { redirect } from "react-router-dom";
export function getDuration() {
  const StoredexpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(StoredexpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
export function getAuthToken() {
  const token = localStorage.getItem("token");
  const tokenDuration = getDuration();
  if (tokenDuration < 0) {
    return "Expired";
  }
  return token;
}
export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
}
