# Button

- Element Type: `HTMLButtonElement`
- Properties:
  - `label` (string): The text that is displayed on the button. (Default: 'Button')
  - `type` (string): The type of the button (`primary` or `secondary`). (Default: 'primary')

## Usage

The `Button` component is a simple button styled to fit the Geoguessr design.

```javascript
const buttonComponent = new window.GC.Button({label: 'Click me', type: 'secondary'});
const buttonElement = buttonComponent.create();

// Example event listener
buttonElement.addEventListener('click', () => {
  console.log('Button clicked');
});
```

## Examples

#### Primary Button

![Primary Button](./img/primary-button.png)

#### Secondary Button

![Secondary Button](./img/secondary-button.png)