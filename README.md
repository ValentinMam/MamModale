

## Fonctionnalités

Affichage d'une fenêtre modale liée à une action utilisateur


## Technologies utilisées

- HTML 5 & CSS 3
- Javascript (jsx) & REACT 18.2.0

## Test 

Dans un terminal :

```
git clone https://github.com/ValentinMam/MamModale.git 
```
```
npm install
```
```
npm run dev
```

Une fênetre s'ouvre en local avec le projet (App.jsx)

Edit src/App.jsx and save to test


## Installation 

Dans un terminal :

```
npm i mam_modale
```

ou

```
yarn add mam_modale
```

## Utilisation

### Dans la fonction du composant appelant la fenêtre modale :

Importer le composant 'Modal' :

```javascript
import Modal from "mam_modale"
```

Dans la fonction, initialiser le state pour l'état de la fenêtre modale (Open / no) :

```jsx
const [isOpen, setIsOpen] = useState(false)
```

Dans le bloc `return`, insérer la ligne suivante :

```jsx
{
  isOpen && <Modal setIsOpen={setIsOpen} />
}
```

Dans les props de l'élement déclencheur comme un bouton `"Open Modal"` :

```html
<button onClick={() => setIsOpen(true)}>Open Modal</button>
```

## Les props

La fenêtre modale est composé d'un CSS par défaut mais il est possible de modifier les paramètres suivants :

| Paramètre   | Action sur                      | Format                                         | Valeur par défaut    |
| ----------- | ------------------------------- | ---------------------------------------------- | -------------------- |
| text        | Texte affiché dans la modale    | string                                         | 'Texte de la modale' |
| textColor   | Couleur du texte de la modale   | '#00f' ou 'blue' ou 'rgb(0,0,255)              | '#000'               |
| textSize    | Taille du texte de la modale    | toutes les unités de fontSize (em, rem, px...) | '3rem'               |
| buttonColor | Couleur du bouton de fermenture | '#00f' ou 'blue' ou 'rgb(0,0,255)              | '#f00'               |
| modalWidth  | Largeur de la modale            | pixel ou pourcentage                           | '50%'                |
| modalHeight | Hauteur de la modale            | pixel uniquement                               | '200px'              |
| modalBG     | Couleur du fond de la modale    | '#00f' ou 'blue' ou 'rgb(0,0,255)              | '#fff'               |

Pour une modale avec le texte "Employee successfully added.", un bouton et du texte bleu #1976d2, une hauteur de 200px, une largeur de 30%...
nous devrons écrire :

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

Si un des paramètres ci-dessus n'est pas mentionné , la valeur par défaut sera appliquée.



