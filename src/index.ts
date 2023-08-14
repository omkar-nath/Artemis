import Artemis from "./artemis";
export { default } from "./artemis";

window.ArtemisAgent = {
  install: function (applicationName: string) {
    console.log("Trying to initialize artemis agent here in code!");
    if (!applicationName) {
      console.warn(
        "A valid application name is required in orde to use artemis agent!","🌵"
      );
      return;
    } else {
      new Artemis({ applicationName });
    }
  },
};
