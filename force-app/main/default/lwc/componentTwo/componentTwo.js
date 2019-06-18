import { LightningElement, api } from "lwc";

export default class ComponentTwo extends LightningElement {
  @api name;

  handleChange(event) {
    if (event.target.name === "firstName") {
      this.name = event.target.value;
      this.name = this.name;
    }
  }
}
