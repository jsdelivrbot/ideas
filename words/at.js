;
~
{ re:
    { id: 're.moment@ionify.net'
    , is: "on:time | to:time, a way to specify a moment in time."
    , at: 2.0
    , by:
        [ {creator: 'mike.lee@ions.iskitz.net',  on: -04.200709,   in: "forest-hills.ny.usa.na.earth"}
        , {authors:     'team@ions.ionify.net',  on: +09.20181020, in:     "san-jose.ca.usa.na.earth"}
        ]
    , it:
        [ "defines moments as valid numbers that can be compared, e.g."
        , -04.200709    <= / GMT-04 2007.09    September    /
        , +09.20181020  <= / GMT+09 2018.10.20 October 20th /
        ]
    }

, on: '[-]timezoneOffsetHour[timezoneOffsetMinute].year[month[day[hour[minute[second[milli[micro[nano[pico[femto[atto[zepto[yocto]]]]]]]]]]]'
    + -08.20161117064221 <= / GMT-08 2016.11.17.06.42.21 means 2016, November 17th @ 6:42:21 am GMT-8 (America/Los_Angeles Timezone) /
}
;