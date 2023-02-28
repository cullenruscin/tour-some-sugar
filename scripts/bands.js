import { getBands } from "./database.js";

const bands = getBands();

export const Bands =  () => {
    let html = '<ul>'
    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }
    html += '</ul>'
    return html
}