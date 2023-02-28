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

//"Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023"
export const Bookings = () => {
    let html = '<ul>'
    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)
        html += `<li id="booking--${booking.id}">${band.name} are playing at ${venue.name} on ${booking.date}</li>`
    }
    html += '</ul>'
    return html
}

