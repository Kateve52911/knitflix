export function storeCurrentUser(user) {
  sessionStorage.setItem("currentUser", JSON.stringify(user));
}

export function getCurrentUser() {
  const userJSON = sessionStorage.getItem("currentUser");
  return userJSON ? JSON.parse(userJSON) : null;
}

export function clearCurrentUser() {
  sessionStorage.removeItem("currentUser");
}

export function isUserLoggedIn() {
  return sessionStorage.getItem("currentUser") !== null;
}

export function requireAuthentication() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "../index.html";
    return null;
  }
  return currentUser;
}
