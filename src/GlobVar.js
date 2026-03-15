// Global variable.js
let animationState = true;

export const animation = {
      get value() {
            return animationState;
      },
      set value(state) {
            animationState = state;
      },
};
