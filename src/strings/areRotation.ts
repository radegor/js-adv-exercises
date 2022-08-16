// determine if one string is a rotation of another

function areRotation(string1: string, string2: string): boolean {
  return string1.repeat(2).includes(string2);
}

export default areRotation;
