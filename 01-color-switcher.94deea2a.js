!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.btnStart.addEventListener("click",(function(){timerId=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.btnStart.setAttribute("disabled","disabled")})),t.btnStop.addEventListener("click",(function(){t.btnStart.removeAttribute("disabled"),clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.94deea2a.js.map
