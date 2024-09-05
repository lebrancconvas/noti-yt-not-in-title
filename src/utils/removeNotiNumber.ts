export function removeNotiNumber() {
  document.head.title = document.head.title.replace(/\(\d+\)/, "");
};
