
/*

Main.js
    1.  Import other js files
    2.  Assign variable to element with .container class via query selector
    3.  Make boilerplate html elements using other imported js files

Database.js
    venues
        - id
        - name
        - address
        - sqft
        - occupancy
    bookings
        - id
        - bandName
        - venueName
        - date
    bands
        - id
        - name
        - members
        - genre
        - est

Venues.js
    1.  Can accomodate 2 bands per night
    2.  When clicked, alert should show all the bands that booked that venue
Bands.js
    1.  Can perform 1 or 2 acts every day
    2.  When clicked, alert should show all the venues the band is playing
Bookings.js
    1.  Output should be like "Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023"
    2.  Display all bookings in a list
    3.  When clicked, alert should show band info (name, genre, year formed, number of members)

* Layout
    1.  Bookings at top
    2.  Available Venues
    3.  Available bands beside the venues

*/

import { Bands } from "./bands.js"
import { Venues } from "./venues.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector('#container')

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="bookings">
    <h2>Bookings</h2>
    ${Bookings()}
</article>
<div id="flex">
<article class="venues">
    <h2>Venues</h2>
    ${Venues()}
</article>
<article class="bands">
    <h2>Bands</h2>
    ${Bands()}
</article>
</div>
`

mainContainer.innerHTML = applicationHTML