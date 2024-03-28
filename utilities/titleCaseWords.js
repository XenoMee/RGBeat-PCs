export default function titleCase(str) {
  const words = str.toLowerCase().split(' ');
  let modifiedString = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    modifiedString.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return modifiedString.join(' ');
}
