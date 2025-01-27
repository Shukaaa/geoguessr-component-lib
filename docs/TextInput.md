# Text Input

- Element Type: `HTMLInputElement`
- Properties:
  - `placeholder` (string): The placeholder text for the input field. (Default: '')

## Usage

The `TextInput` component is a simple text input field styled to fit the Geoguessr design.

```javascript
const textInputComponent = new window.GC.TextInput({placeholder: 'Enter text here'});
const textInputElement = textInputComponent.create();

// Example event listener
textInputElement.addEventListener('input', () => {
  console.log('Text input changed to', textInputElement.value);
});
```

## Examples

#### Text Input

![Text Input](./img/input.png)

