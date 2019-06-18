import { LightningElement } from "lwc";

export default class ComponentOne extends LightningElement {
  name = "absyz";
  constructor() {
    super();
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  //lifecycle hook - called when component is added to DOM
  connectedCallback() {
    const selectEvent = new CustomEvent("message", {
      detail: "component one Connect to DOM"
    });
    this.dispatchEvent(selectEvent);
  }
  //lifecycle hook - called when component is removed to DOM
  disconnectedCallback() {
    //fire component event
    const selectEvent = new CustomEvent("message", {
      detail: "component one disconnect to DOM"
    });
    this.dispatchEvent(selectEvent);
  }
}
