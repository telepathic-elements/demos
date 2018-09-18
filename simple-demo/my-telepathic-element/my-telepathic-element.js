import {TelepathicElement} from "../../telepathic-element/telepathic-element.js";
class MyTelepathicElement extends TelepathicElement{
	constructor(){
		super();
	}
	async connectedCallback(){
		//await super.connectedCallback("simple-demo/my-telepathic-element/my-telepathic-element.html");
		this.init();
	}
	async init(){
		this.seconds = 0;
		this.status = {
			message : `Hello from ${window.location}`,
			statusClass : "ready"
		}
		setInterval(()=>{
			this.seconds++;
		},1000);
		await this.loadTemplate("simple-demo/my-telepathic-element/my-telepathic-element.html");
		await this.prepareTemplate();
	}
}
window.customElements.define('my-telepathic-element', MyTelepathicElement);