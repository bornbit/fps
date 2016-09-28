(function() {
    "use strict";

var FPS = function(container) {
    this.init(container);
};

FPS.prototype = {
    constructor: FPS,

    init: function(container) {
        if (typeof container === "string") {
            container = document.querySelector(container);
        }

        this._fps = 0;
        this._frames = 0;
        this._startTime = Date.now();
        this._element = this._createElement("div", "position:fixed;top:0;left:0;z-index:9999;background-color:#eee;display:inline;margin:1px;padding:4px;border:1px solid #888;font-family:arial,sans-serif;font-size:9px;color:#333", container || document.body);
    },

    getElement: function() {
        return this._element;
    },

    getFPS: function() {
        return this._fps;
    },

    start: function() {
        if (!this._animationFrameId) {
            this._loop();
        }
    },

    stop: function() {
        if (this._animationFrameId) {
            window.cancelAnimationFrame(this._animationFrameId);
            this._animationFrameId = null;
        }
    },

    step: function() {
        this._frames++;

        var currentTime = Date.now();
        var elapsedTime = currentTime - this._startTime;
        if (elapsedTime >= 1000) {
            this._fps = Math.round(this._frames * 1000 / elapsedTime);
            this._frames = 0;
            this._startTime = currentTime;
            this._updateDisplay();
        }
    },

    _loop: function() {
        this.step();

        this._animationFrameId = window.requestAnimationFrame(this._loop.bind(this));
    },

    _updateDisplay: function() {
        this._element.innerHTML = "<b>" + this._fps + "</b> fps";
    },

    _createElement: function(type, cssText, parentElement) {
        var element = document.createElement(type);
        if (!element) return;

        if (cssText) {
            element.style.cssText = cssText;
        }

        if (parentElement) {
            parentElement.appendChild(element);
        }

        return element;
    }
};

window.FPS = FPS;

}());
