import {Component} from "../component";
import {ButtonConfig} from "./button-config";

export class Button extends Component<ButtonConfig, HTMLButtonElement> {
	defaultConfig: ButtonConfig = {
		label: 'Button',
		type: 'primary'
	}
	
	create() {
		// Create the main button element
		const button = document.createElement('button');
		button.type = 'button';
		button.classList.add('gc-button', `gc-button--${this.config.type}`);
		
		// Create the wrapper div
		const wrapper = document.createElement('div');
		wrapper.classList.add('gc-button__wrapper');
		
		// Create the label span
		const label = document.createElement('span');
		label.classList.add('gc-button__label');
		label.innerText = this.config.label;
		
		// Assemble the structure
		wrapper.appendChild(label);
		button.appendChild(wrapper);
		
		return button;
	}
}