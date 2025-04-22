let keydownHandler = null;

export function addCaptureKeyListener(element, dotNetHelper) {
    if (!keydownHandler) {
        keydownHandler = (event) => {
            if (event.key === "Enter" && event.shiftKey === true && element.contains(event.target)) {
                event.stopPropagation();
                dotNetHelper.invokeMethodAsync('HandleKeyDown');
            }

            if (event.code == "KeyA" && event.ctrlKey === true && element.contains(event.target)) {
                event.stopPropagation();
                event.preventDefault();
                dotNetHelper.invokeMethodAsync('SelectAllRows');
            }
        };
        window.addEventListener('keydown', keydownHandler, true);
    }
}

export function removeCaptureKeyListener() {
    if (keydownHandler) {
        window.removeEventListener('keydown', keydownHandler, true);
        keydownHandler = null;
    }
}