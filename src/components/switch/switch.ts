import {Component} from "../component";

export class Switch extends Component<null, HTMLInputElement> {
	defaultConfig: null;
	
	create(): HTMLInputElement {
		const input = document.createElement('input');
		input.type = 'checkbox';
		input.classList.add('gc-switch');
		
		return input;
	}
}