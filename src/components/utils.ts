export const fontSizeCalculator = (s: string | null) => {
  if (!s) return 0
  if (s.length < 48) {
    return 84
  }
  else if (s.length < 96) {
    return 72
  }
  else return 58
}