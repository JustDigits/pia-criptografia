function padText(
  text: string,
  paddingCharacter: string,
  rows: number,
  columns: number
) {
  const amountOfPaddingNeeded = rows * columns - text.length;
  const padding = paddingCharacter.repeat(amountOfPaddingNeeded);

  return text + padding;
}

export { padText };
