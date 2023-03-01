import { getBands } from "./database.js";
import { getVenues } from "./database.js";
import { getBookings } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

const venueBands = venue => {
    let bandsBooked = []
    for (const booking of bookings) {
        if (venue.id === booking.venueId)
            for (const band of bands) {
                if (band.id === booking.bandId) {
                    bandsBooked.push(band.name)
                }
            }
    }
    return bandsBooked
}

document.addEventListener('click', e => {
    const itemClicked = e.target
    if (itemClicked.id.startsWith('venue')) {
        const [, venueId] = itemClicked.id.split('--')
        for (const venue of venues) {
            if (venue.id === parseInt(venueId)) {
                let message = `${venue.name} has `
                for (const [i, item] of venueBands(venue).entries()) {
                    if (venueBands(venue).length > 1 && i === venueBands(venue).length - 1) {
                        message += ` and ${item}`
                    } else {
                        message += `${item}`
                    }
                }
                message += ' playing at their venue.'
                window.alert(message)
            }
        }
    }
})

export const Venues = () => {
    let html = '<ul>'
    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }
    html += '</ul>'
    return html
}