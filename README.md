# fps

A lightweight JavaScript library for display the frames per second. No dependencies.

## Usage
```js
var fps = new FPS();
fps.start();

```

## Bookmarklet

```js
javascript:(function(){var script=document.createElement('script');script.onload=function(){var fps=new FPS();fps.start();};script.src='//rawgit.com/bornbit/fps/master/dist/fps.min.js';document.head.appendChild(script);})()
```

## Demo
- [index.html](http://htmlpreview.github.io/?https://github.com/bornbit/fps/blob/master/demo/index.html)

## License

[MIT](https://github.com/bornbit/fps/blob/master/LICENSE) License
