# Divider

- Element Type: `HTMLDivElement`
- Properties:
  - `direction` (string): The direction of the divider (`horizontal` or `vertical`). (Default: 'horizontal')
  - `length` (string): The length of the divider. (Default: '100%')

## Usage

The `Divider` component is a simple divider that is styled to fit the Geoguessr design.

```javascript
const dividerComponent = new window.GC.Divider({direction: 'horizontal'});
const dividerElement = dividerComponent.create();
```
