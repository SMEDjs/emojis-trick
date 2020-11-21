### Emojis Trick

#### Functionality

-Random emojis
-More soon...

#### Use

Exemple:
```
const EmojisTrick = require('emojis-trick')

// generate random emojis 
EmojisTrick.generate({count:5, repeat: false}) // count: number of emojis ; repeat: repeat emojis

```

Exemple of json:
```
  {
    "name": "Face",
    "nameUrl": "face-with-tongue",
    "emoji": "",
    "unicode": "U+1F61B",
    "categorie": "face",
    "color": "yellow",
    "shortNames": [
      "\",
      ":face_with_tongue:"
    ]
  },
```
#### Developer notes

-There is some emojis some people can see, but other can't
-You can find the JSON emojis on the [Github](https://github.com/SMEDjs/emojis-trick)

#### Developer
- [SMED#8517](https://github.com/SMEDjs)