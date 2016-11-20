;

+
{ re:
    { id: "at@ionify.net.0.1.0.2016.11.20-08"
    , is: "at:time, a way to specify a moment in time."
    , by:
        [ {creator: "mike.lee@ions.iskitz.net",  at: "2007.09-04",    in: "forest-hills.ny.usa.na.earth"}
        , {authors:     "team@ions.ionify.net",  at: "2016.11.20-08", in:     "san-jose.ca.usa.na.earth"}
        ]
    },

  at: "year#[.month#[.day#[.hour#[.minute[.second[.milli[.micro[.nano[.pico[.femto[.atto[.zepto[.yocto]]]]]]]]]]][-timezoneOffsetHour.timezoneOffsetMinute]"

    + "2016.11.17.06.42.21-08 means 2016, November 17th @ 6:42:21 am GMT-8 (America/Los_Angeles Timezone)"
}

;