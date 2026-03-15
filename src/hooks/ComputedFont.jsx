const ComputedFont = (screenHeight, screenWidth, percent, constant, minHeight) => {
      const computedHeight = Math.floor(
            screenHeight * (percent / 100)
      );

      return computedHeight * constant < screenWidth &&
            minHeight * constant < screenWidth
            ? Math.max(minHeight, computedHeight)
            : Math.floor(screenWidth / constant);
}

export default ComputedFont;