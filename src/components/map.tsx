'use client'
import React from 'react'

const url =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3477136247657!2d100.60139099999999!3d13.697378200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f4460689ccb%3A0x6ae2307c07cb6da4!2zTWFuZ28gQ2F0IEhvdGVsIOC4quC4uOC4guC4uOC4oeC4p-C4tOC4lw!5e0!3m2!1sen!2sth!4v1702115039871!5m2!1sen!2sth";

function Map() {
    return (
        <div className="py-10 bg-white">
            <h1 className=" sr-only">Google Map</h1>
            <iframe
                title="google-map-thai-house-spa"
                src={url}
                width="600"
                height="450"
                loading="lazy"
                style={{ border: 0, borderRadius: "10px", width: "100%" }}
                allowFullScreen={true}
            ></iframe>
        </div>
    )
}

export default React.memo(Map)