export function loadKey(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
