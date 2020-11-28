### Emojis Trick

#### Functionality

-Random emojis
-More soon...

#### Use

Exemple:

Generate functio, the options:
Count: number of emojis you want
Repeat: Boolean to enable repetition between emojis
Type: "codes" => 1F600, "char" => 😀, "name" => grinning face
```
const EmojisTrick = require('emojis-trick')

EmojisTrick.generate({count:5, repeat: false, type: "char"}) 

```

Exemple of json:
```
{
    "codes": "1F600",
    "char": "😀",
    "name": "grinning face",
    "category": "Smileys & Emotion (face-smiling)",
    "group": "Smileys & Emotion",
    "subgroup": "face-smiling"
 },
```
#### Developer notes

-There is some emojis some people can see, but other can't
-You can find the JSON emojis on the [Github](https://github.com/SMEDjs/emojis-trick)

#### Developer
- [SMED#8517](https://github.com/SMEDjs)

##### Current Version 1.0.1
##### Patch note:
- v1.0.0 : release
- v1.0.1 : added type

