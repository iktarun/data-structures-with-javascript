let ladder = {
  step: 1,
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      console.log(this.step++);
    }, 1000);
  },
  pause() {
    clearInterval(this.intervalId);
    console.log(this.step);
  },
  stop: function () {
    // shows the current step
    this.step = 1;
    console.log(this.step);
  },
};
