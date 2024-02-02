function getMaxCakeArea(h, w, horizontalCuts, verticalCuts) {
  const MOD = 10 ** 9 + 7;

  // Sort the cuts
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  // Consider edges and gaps to find maximum width and height
  let maxHorizontalGap = Math.max(
    horizontalCuts[0],
    h - horizontalCuts[horizontalCuts.length - 1]
  );
  let maxVerticalGap = Math.max(
    verticalCuts[0],
    w - verticalCuts[verticalCuts.length - 1]
  );

  for (let i = 1; i < horizontalCuts.length; i++) {
    maxHorizontalGap = Math.max(
      maxHorizontalGap,
      horizontalCuts[i] - horizontalCuts[i - 1]
    );
  }

  for (let i = 1; i < verticalCuts.length; i++) {
    maxVerticalGap = Math.max(
      maxVerticalGap,
      verticalCuts[i] - verticalCuts[i - 1]
    );
  }

  // Calculate the maximum area and return
  return (BigInt(maxHorizontalGap) * BigInt(maxVerticalGap)) % BigInt(MOD);
}

// Example usage:
const h = 5;
const w = 4;
const horizontalCuts = [1, 2, 4];
const verticalCuts = [1, 3];

const maxArea = getMaxCakeArea(h, w, horizontalCuts, verticalCuts);
console.log("Maximum Cake Area:", maxArea.toString());
