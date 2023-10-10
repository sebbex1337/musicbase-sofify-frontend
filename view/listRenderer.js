export default class ListRenderer {
    constructor(list, container, itemRenderer) {
        this.itemRenderer = itemRenderer;
        if (container instanceof Element) {
            this.container = container;
        } else if (typeof container === "string") {
            this.container = document.querySelector(container);
        } else {
            console.log("Container is not the required type");
            console.log(container);
        }
        this.setList(list);
    }
    setList(list) {
        this.list = list.map((item) => new this.itemRenderer(item));
    }
    clear() {
        this.container.innerHTML = "";
    }
    render() {
        this.clear();
        for (const itemRenderer of this.list) {
            const html = itemRenderer.render();
            this.container.insertAdjacentHTML("beforeend", html);
        }
    }
}
