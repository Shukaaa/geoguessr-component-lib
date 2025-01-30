import { Component } from "../component";
import { SliderConfig } from "./slider-config";

export class Slider extends Component<SliderConfig, HTMLDivElement> {
	value: number = this.config.defaultValue;
	
	defaultConfig: SliderConfig = {
		min: 0,
		max: 100,
		step: 1,
		defaultValue: 0,
		onchange: () => {},
	};
	
	private track!: HTMLDivElement;
	private thumb!: HTMLDivElement;
	private slider!: HTMLDivElement;
	
	create(): HTMLDivElement {
		this.slider = document.createElement("div");
		this.slider.classList.add("slider");
		this.slider.setAttribute("role", "slider");
		this.slider.setAttribute("aria-valuemin", this.config.min.toString());
		this.slider.setAttribute("aria-valuemax", this.config.max.toString());
		this.slider.setAttribute("aria-valuenow", this.value.toString());
		this.slider.setAttribute("aria-orientation", "horizontal");
		
		this.track = document.createElement("div");
		this.track.classList.add("slider__track");
		
		this.thumb = document.createElement("div");
		this.thumb.classList.add("slider__thumb");
		
		this.slider.appendChild(this.track);
		this.slider.appendChild(this.thumb);
		
		this.updateUI();
		this.attachEvents();
		
		return this.slider;
	}
	
	private updateUI(): void {
		const percentage = ((this.value - this.config.min) / (this.config.max - this.config.min)) * 100;
		this.track.style.width = `${percentage}%`;
		this.thumb.style.left = `${percentage}%`;
		this.slider.setAttribute("aria-valuenow", this.value.toString());
	}
	
	private attachEvents(): void {
		const onMove = (event: MouseEvent | TouchEvent) => {
			const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
			const rect = this.slider.getBoundingClientRect();
			const rawValue = this.config.min + ((clientX - rect.left) / rect.width) * (this.config.max - this.config.min);
			
			const steppedValue = Math.round(rawValue / this.config.step) * this.config.step;
			this.value = Math.min(this.config.max, Math.max(this.config.min, steppedValue));
			this.updateUI();
			this.config.onchange(this.value);
		};
		
		const onEnd = () => {
			document.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseup", onEnd);
			document.removeEventListener("touchmove", onMove);
			document.removeEventListener("touchend", onEnd);
		};
		
		this.thumb.addEventListener("mousedown", () => {
			document.addEventListener("mousemove", onMove);
			document.addEventListener("mouseup", onEnd);
		});
		
		this.thumb.addEventListener("touchstart", () => {
			document.addEventListener("touchmove", onMove);
			document.addEventListener("touchend", onEnd);
		});
	}
}
