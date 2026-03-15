const ComputedSize = (screenHeight, percent, minHeight) => {
      const size = Math.floor(screenHeight * (percent / 100));
      return size < minHeight ? minHeight : size;
  }

export default ComputedSize;