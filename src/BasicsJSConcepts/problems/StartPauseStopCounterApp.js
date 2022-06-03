let ladder = {
  step: 0,
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      console.log(++this.step);
    }, 1000);
  },
  pause() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      //   console.log(this.step);
    }
  },
  stop: function () {
    // shows the current step
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.step = 0;
      return;
    }
  },
};
