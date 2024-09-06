export function rearrangeLetters(str) {
    return str.replace(/([a-z])([A-Z])/g, (match, lower, upper) => upper + lower)
              .replace(/([A-Z])([a-z])/g, (match, upper, lower) => upper + lower);
  }  