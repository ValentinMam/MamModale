

## Features

Display a modal window linked to a user action

## Technologies 

- HTML 5 & CSS 3
- Javascript (jsx) & REACT 18.2.0

## Test 

In a terminal :

```
git clone https://github.com/ValentinMam/MamModale.git 
```
```
npm install
```
```
npm run dev
```

A local window opens with the project (App.jsx)

Edit src/App.jsx and save to test


## Installation 

In a terminal :
```
npm i mam_modale
```

or

```
yarn add mam_modale
```

## Use

### In the component function calling the modal window :

Import the 'Modal' component :

```javascript
import Modal from "mam_modale"
```

In the function, initialize the state for the modal window state (Open / No):

```jsx
const [isOpen, setIsOpen] = useState(false)
```

In the `return` block, insert the following line:

```jsx
{
  isOpen && <Modal setIsOpen={setIsOpen} />
}
```

In the trigger element props as an `"Open Modal"`  button :

```html
<button onClick={() => setIsOpen(true)}>Open Modal</button>
```

## Les props

The modal window is composed of a default CSS, but the following parameters can be modified:


| Paramètre   | Action sur                      | Format                                         | Valeur par défaut    |
| ----------- | ------------------------------- | ---------------------------------------------- | -------------------- |
| text        | Text displayed in the modal    | string                                         | 'Texte de la modale' |
| textColor   | Modal text color  | '#00f' or 'blue' or 'rgb(0,0,255)             | '#000'               |
| textSize    | Modal text size  | fontSize (em, rem, px...) | '3rem'               |
| buttonColor | Color of closing button | '#00f' or 'blue' or 'rgb(0,0,255)             | '#f00'               |
| modalWidth  | Modal width          | pixel or percent                    | '50%'                |
| modalHeight | Modal height          | pixel                                | '200px'              |
| modalBG     | Modal background color   | '#00f' or 'blue' or 'rgb(0,0,255)              | '#fff'               |

For a modal with the text "Employee successfully added.", a button and blue text #1976d2, a height of 200px, a width of 30%...
we'd write :

```jsx
{
  isOpen && (
    <Modal
          setIsOpen={setIsOpen}
          text="Employee successfully added."
          buttonColor="#1976d2"
          textColor="#1976d2"
          textSize="1.5em"
          modalWidth="30%"
          modalHeight="200px"
          modalBG="rgb(255,0,0,0,0.8)"
    />
  )
}
```

If one of the above parameters is not mentioned, the default value will be applied.


