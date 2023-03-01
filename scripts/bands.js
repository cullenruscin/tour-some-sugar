import { getBands } from "./database.js"
import { getVenues } from "./database.js"
import { getBookings } from "./database.js"

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

const bandVenues = band => {
    let venuesBooked = []
    for (const booking of bookings) {
        if (band.id === booking.bandId) {
            for (const venue of venues) {
                if (venue.id === booking.venueId) {
                    venuesBooked.push(venue.name)
                }
            }
        }
    }
    return venuesBooked
}

document.addEventListener('click', e => {
    const itemClicked = e.target
    if (itemClicked.id.startsWith('band')) {
        const [, bandId] = itemClicked.id.split('--')
        for (const band of bands) {
            if (band.id === parseInt(bandId)) {
                let message = `${band.name} are playing at `
                for (const [i, item] of bandVenues(band).entries()) {
                    if (bandVenues(band).length > 1 && i === bandVenues(band).length - 1) {
                        message += ` and ${item}`
                    } else {
                        message += `${item}`
                    }
                }
                message += '.'
                window.alert(message)
            }
        }
    }
})

export const Bands =  () => {
    let html = '<ul>'
    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }
    html += '</ul>'
    return html
}