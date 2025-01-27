import {Component} from "../component";
import {TextInputConfig} from "./text-input-config";

export class TextInput extends Component<TextInputConfig, HTMLInputElement> {
	defaultConfig: TextInputConfig = {
		placeholder: ''
	}
	
	create(): HTMLInputElement {
		const input = document.createElement('input');
		input.type = 'text';
		input.classList.add('gc-text-input');
		input.placeholder = this.config.placeholder;
		
		return input;
	}
}