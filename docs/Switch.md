# Switch

- Element Type: `HTMLInputElement`
- Properties:
  - None

## Usage

The `Switch` component is a simple checkbox styled to fit the Geoguessr design.

```javascript
const switchComponent = new window.GC.Switch();
const switchElement = switchComponent.create();

// Example event listener
switchElement.addEventListener('change', () => {
  console.log('Switch toggled to', switchElement.checked);
});
```

## Examples

#### Switch On

![Switch On](./img/switch-on.png)

#### Switch Off

![Switch Off](./img/switch-off.png)