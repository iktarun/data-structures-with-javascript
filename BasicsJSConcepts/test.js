class CustomArray extends Array {
    constructor(...args) {
      super(...args);
      this.eventTarget = document.createElement("div");
    }
    push(...args) {
      super.push(...args);
      const event = new CustomEvent("onPush", {
        detail: { items: args, array: this },
      });
      console.log(event);

      this.eventTarget.dispatchEvent(event);
    }
    onPush(callback) {
      this.eventTarget.addEventListener("onPush", callback);
    }
  }

  let arr = new CustomArray(1, 2, 3);
  arr.onPush((event) => {
    console.log("OnPush Callback triggered!");
    console.log(event);
  });

  arr.push(4);