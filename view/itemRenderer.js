export default class itemRenderer {
    constructor(item) {
        this.item = item;
    }
    render() {
        return `<p>${this.item}</p>`;
    }
}
