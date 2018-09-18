import {TelepathicElement} from "../../telepathic-element/telepathic-element.js";
export class MyTelepathicElement extends TelepathicElement{
	constructor(){
		super();
	}
	async connectedCallback(){
		this.init();
	}
	async init(){
		this.seconds = 0;
		this.statusClass = "ready";
		this.status = {message : `Hello from ${window.location}`}
		setInterval(()=>{
			this.seconds++;
		},1000);
		await this.loadTemplate("simple-demo/my-telepathic-element/my-telepathic-element.html");
		await this.prepareTemplate();
	}
	
}

try{
	window.customElements.define('my-telepathic-element', MyTelepathicElement);
}catch(warn){
	//Someone decided it would be a good idea to throw if this element was already defined
	//In our case it's going to try and define every single time this file is imported
	//console.warn(warn);
}

export default () => { return `MyTelepathicElement`};
export const describe = `MyTelepathicElement provides a quick example of how easy it is to create a new element using telepathy.`;
