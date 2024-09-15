
import { CounterData } from "./counter-data.js";

class CounterWidget extends HTMLElement {
    constructor() {
        console.log("constructor")
        super()
        let shadow = this.attachShadow({ mode: "open" })
        shadow.innerHTML = this.getView();
    }
    getView() {
        console.log("getView")
        return `<div>
            <div id="title"></div>
            <div id="currentValue"></div>
            <div class="row">
                <button id="btnUp">Up</button>   
                <button id="btnDown">Down</button>
            </div>   
            <div class="feedback"></div>
            </div>`;
    }
    render() {
        console.log("render")
        //super()//?
        debugger;
    }
    attributeChangedCallback() {
        console.log("attributeChangedCallback")
        console.log(arguments);
    }
    updateDisplay(){
        this.shadowRoot.querySelector('#title').innerHTML = this.model.title;
        this.shadowRoot.querySelector('#currentValue').innerHTML = this.model.value;
    }
    connectedCallback() {
        console.log("connectedCallback")
        
        this.model = new CounterData(
            Number(this.getAttribute('min')),
            Number(this.getAttribute('max')),
            Number(this.getAttribute('value')),
            this.getAttribute('title')
        );

        this.shadowRoot.querySelector('#currentValue').innerHTML = this.model.value;

        this.shadowRoot.querySelector("#btnUp").onclick = e => {
            this.model.up();
            this.updateDisplay();
        }

        this.shadowRoot.querySelector("#btnDown").onclick = e => {
            this.model.down();
            this.updateDisplay();
        }

        this.updateDisplay();
    }
}
customElements.define("counter-widget", CounterWidget);
