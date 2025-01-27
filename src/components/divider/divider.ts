import {Component} from "../component";
import {DividerConfig} from "./divider-config";

export class Divider extends Component<DividerConfig, HTMLDivElement> {
	defaultConfig: DividerConfig = {
		direction: 'horizontal',
		length: '100%'
	}
	
	create(): HTMLDivElement {
		const divider = document.createElement('div');
		divider.classList.add('gc-divider', `gc-divider--${this.config.direction}`);
		
		if (this.config.direction === 'horizontal') {
			divider.style.width = this.config.length;
		} else {
			divider.style.height = this.config.length;
		}
		
		return divider;
	}
}