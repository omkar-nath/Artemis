export const mouseEvents = {
  CLICK: "click",
  DB_CLICK: "dbclick",
  MOUSE_DOWN: "mousedown",
  ON_MOUSE_UP: "mouseup",
  ON_MOUSE_WHEEL: "mousewheel",
  ON_WHEEL: "wheel",
};

export const dragEvents = {
  DRAG: "drag",
  DRAG_END: "dragend",
  DRAG_ENTER: "dragenter",
  DRAG_LEAVE: "dragleave",
  DRAG_OVER: "dragover",
  DRAG_START: "dragstart",
  DROP: "drop",
  SCROLL: "scroll",
};

export const formEvents = {
  CHANGE: "change",
  INPUT: "input",
  RESET: "reset",
  SEARCH: "search",
  SELECT: "select",
  SUBMIT: "submit",
};

export const keyboardEvents = {
  KEYDOWN: "keydown",
  KEYUP: "keyup",
};

export const allEvents :Record<string,string>= {
  ...mouseEvents,
  ...dragEvents,
  ...formEvents,
  ...keyboardEvents,
};


