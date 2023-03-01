import { getBands } from "./database.js";
import { getVenues } from "./database.js";
import { getBookings } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

const findBand = (booking, bands) => {
    let bookingBand
    for (const band of bands) {
        if (band.id === booking.bandId)
        bookingBand = band
    }
    return bookingBand
}

const findVenue = (booking, venues) => {
    let bookingVenue
    for (const venue of venues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue
        }
    }
    return bookingVenue
}

document.addEventListener('click', e => {
    const itemClicked = e.target
    if (itemClicked.id.startsWith('booking')) {
        const [, bookingId] = itemClicked.id.split('--')
        for (const booking of bookings) {
            if (booking.id === parseInt(bookingId)) {
                let band = findBand(booking, bands)
                window.alert(`${band.name} is a ${band.memberCount} person ${band.genre} band formed in ${band.foundingDate}.`)
            }
        }
    }
})

export const Bookings = () => {
    let html = '<ul>'
    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)
        const date = booking.date.toLocaleDateString('en-US')
        html += `<li id="booking--${booking.id}">${band.name} are playing at ${venue.name} on ${date}</li>`
    }
    html += '</ul>'
    return html
}

