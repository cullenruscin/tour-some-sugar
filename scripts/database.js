
const database = {
    bands: [{
        id: 1,
        name: 'The Misfits',
        memberCount: 5,
        genre: 'Punk',
        foundingDate: 1977
    },{
        id: 2,
        name: 'Sly & The Family Stone',
        memberCount: 9,
        genre: 'Funk',
        foundingDate: 1966
    },{
        id: 3,
        name: 'Tame Impala',
        memberCount: 1,
        genre: 'Indie Pop',
        foundingDate: 2007
    }],
    venues: [{
        id: 1,
        name: 'Tower Theater',
        address: '123 Some Street, Philadelphia PA',
        sqft: 12500,
        capacity: 1500
    },{
        id: 2,
        name: 'Hollywood Bowl',
        address: '101 Other Road, Los Angeles CA',
        sqft: 5000,
        capacity: 500
    },{
        id: 3,
        name: 'Ryman Auditorium',
        address: '321 Another Blvd, Nashville TN',
        sqft: 22000,
        capacity: 2250
    },],
    bookings: [{
        id: 1,
        bandId: 2,
        venueId: 3,
        date: 20231118,
    },{
        id: 2,
        bandId: 2,
        venueId: 2,
        date: 20231118,
    },{
        id: 3,
        bandId: 1,
        venueId: 2,
        date: 20230808,
    },{
        id: 4,
        bandId: 1,
        venueId: 1,
        date: 20230808,
    },{
        id: 5,
        bandId: 3,
        venueId: 3,
        date: 20230422,
    }]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}