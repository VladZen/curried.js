# curried.js
Write function curried that will take as an argument function which execution will be delayed till it will have enough arguments to execute. Use bind.

```javascript
import curried from './solution';

function add(a, b){
	return a + b;
}

console.log(curried(add)()(2)()(5)); //7
console.log(curried(add)(1,200)); //201

const increase = curried(add)(1);

console.log(increase(100)); //101
console.log(increase(5)); //6
```

Task taken from [forWebDev](https://vk.com/forwebdev)
