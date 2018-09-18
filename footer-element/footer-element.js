import {TelepathicElement} from "../telepathic-element/telepathic-element.js";
class FooterElement extends TelepathicElement{
	constructor(){
		super();
	}
	async connectedCallback(){
		await this.loadTemplate("footer-element/footer-element.html");
		await this.prepareTemplate();
	}
}
window.customElements.define('footer-element', FooterElement);