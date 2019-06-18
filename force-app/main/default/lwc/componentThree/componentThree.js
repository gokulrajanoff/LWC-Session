import { LightningElement, track } from "lwc";
import getContacts from "@salesforce/apex/ContactDataController.getContactList";
export default class ComponentThree extends LightningElement {
  @track firstComponent = false;
  @track SecondComponent = false;
  @track messageList = [];
  @track count = 1;
  @track contactData;
  handleClick(event) {
    if (event.target.name === "firstComponent") {
      this.firstComponent = true;
      this.SecondComponent = false;
    }
    if (event.target.name === "secondComponent") {
      this.firstComponent = false;
      this.SecondComponent = true;
    }
  }
  messagEventHandler(event) {
    let message = {};
    this.count = this.count + 1;
    message.Id = this.count;
    message.message = event.detail;
    this.messageList.push(message);
  }

  /*fucntion(result){

  }*/
  getCon() {
    //call apex method and return promise object -> (resolve,reject) ->
    // if resolved - then block will run
    // if reject - catch block will run
    getContacts()
      .then(result => {
        this.contactData = result;
      })
      .catch(error => {
        this.error = error;
      });
  }
}
