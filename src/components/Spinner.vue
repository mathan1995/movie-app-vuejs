<template>
  <div class="spinner">
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 59">
      <path
        d="M55.42 25.14C55.64 26.48 55.75 27.85 55.75 29.25C55.75 43.27 44.46 54.61 30.5 54.61C16.54 54.61 5.25 43.27 5.25 29.25C5.25 15.23 16.54 3.89 30.5 3.89 C34.8 3.89 38.84 4.97 42.38 6.86"
      />
      <path
        d="M44.28 33.78C44.04 32.45 43.9 31.08 43.88 29.68C43.64 15.66 54.73 4.13 68.69 3.9C82.65 3.66 94.13 14.8 94.37 28.82C94.61 42.84 83.52 54.36 69.56 54.6C65.26 54.68 61.19 53.67 57.62 51.84"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 80vw;
  height: 100vh;
}

svg {
  width: 300px;
}

svg path {
  --total-length: 246px; // Retrieved using getTotalLength()
  stroke-linecap: round;
  stroke-width: 1;
  stroke: #fff;
  fill: none;
  stroke-dasharray: var(--total-length) var(--total-length);
  /* animation: animate 5s cubic-bezier(0, 0.3, 0.7, 1) infinite; */
  animation: animate 2s linear infinite;
}

@keyframes animate {
  0% {
    // Start from an empty path (with a negative offset)
    stroke-dashoffset: calc(-1 * var(--total-length));
  }
  30%,
  50% {
    // Fill the path towards the center, then pause for a bit
    stroke-dashoffset: 0;
  }
  80%,
  100% {
    // Remove the stroke, but now in the opposite direction
    stroke-dashoffset: var(--total-length);
  }
}
</style>