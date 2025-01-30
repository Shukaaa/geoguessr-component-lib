export type SliderConfig = {
	min: number;
	max: number;
	step: number;
	defaultValue: number;
	
	onchange: (value: number) => void;
}