# Geoguessr Component Library

This is a component library made for Tampermonkey scripts, that want to use components fitting the Geoguessr design.

## Installation

To install the library, add the following line to UserScript section of your Tampermonkey script:

```javascript
// ==UserScript==
// @grant        GM_addStyle
// @require      https://raw.githubusercontent.com/Shukaaa/geoguessr-component-lib/refs/heads/1.0.0/dist/geoguessr-components.lib.js
// ==/UserScript==
```

## Usage

The library provides a set of components that can be used in your Tampermonkey scripts. The components are styled to fit the Geoguessr design.
But before you can use the components, you need to initialize the styling.

```javascript
GM_addStyle(window.GC.styles);
```

After that, you can use the components in your script. Here is an example of how to use the `Button` component:

```javascript
const buttonComponent = new window.GC.Button({label: 'Click me'});
const buttonElement = buttonComponent.create();
```

You can handle the buttonElement like any other HTML element because the type is `HTMLButtonElement`.

## Components

Inside the `/docs` folder, you can find a list of all available components and how to use them.