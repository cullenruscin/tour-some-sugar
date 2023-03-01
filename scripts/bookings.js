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

