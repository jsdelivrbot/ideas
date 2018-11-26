;
~
{ re:
    { id:  're.moment'
    , by: ['mike.lee', 'team']
    , at:  'ionify.net'
    , on:  -7.201304071630
    , to:  -8.201811251418
    , is:  -0.5
    , in:
        [ 'forest-hills.ny.us.earth'
        ,     'san-jose.ca.us.earth'
        ,           'tokyo.jp.earth'
        ]
    , it:
        [ "specifies moments in time as comparable numbers via"
        , "   [+-]timezoneOffsetHour[timezoneOffsetMinute]"
        + "      .year[month[day[hour[minute[second[milli[micro[nano[pico[femto[atto[zepto[yocto]]]]]]]]]]]"

        ,    -    8.20161117064221 <= / UTC-08:00 2016.11.17.06.42.21 means 2016, November 17th @ 6:42:21 am UTC-08:00 /
        ,    + 1245.20181117215759 <= / UTC+12:45 2018.11.17.21.57.59 means 2018, November 17th @ 9:57:59 pm UTC+12:45 /

        ," JavaScript (ECMA-262) only supports numeric precision to 21 places which only guarantees this 4-digit       "
        ," timezone offset & year format:                                                                              "
        ,'    [+-]timezoneOffsetHour[timezoneOffsetMinute].year[month[day[hour[minute]]]]                              '
        ]
    , we:
        [/ like that moments can be defined with custom epochs, year size & more e.g:  /
        +/   Japanese  moments referencing year  of a given emperor.                   /
        +/   Christian moments referencing years before & after Jesus Christ's birth.  /
        ,/ like that a single-digit year prefix can represent pre & post epoch moments /
        +/   e.g. -8.120181125 is 2018.11.25 @ UTC-08:00 post-epoch (post year-0)      /
        +/   e.g. -8.020181125 is 2018.11.25 @ UTC-08:00 pre -epoch (pre  year-0)      /
        ,/ like -1500 to -FFFF as timezone offset to represent pre-year-zero time.     /
        ,/ like that Hexadecimal years enable representing more years in same space.   /
        ]
  }

, on: '[+-]timezoneOffsetHour[timezoneOffsetMinute]'
    + '   .year[month[day[hour[minute[second[milli[micro[nano[pico[femto[atto[zepto[yocto]]]]]]]]]]]'

, to: "same as ~on"

, specification
:   { change
    :   "moment - moment"

    , moment
    :   "existence.place.when"

    , existence
    :  [ "positive integer"
       , "unique configuration of everything"
       ]

    , place
    :  [ "point[.point]..."
       , "relative to existence; i.e. x.y.z"
       ]

    , point
    :   "positive integer"

    , when
    :  [ "on: [+-]offset.date-timestamp"
       , "to: [+-]offset.date-timestamp"
       , "observer's perception of a moment"
       ]

    , offset
    :  [ "offset-hour[offset-minute]"
       , "relative to first hour"
       , "earth: UTC"
       ]

    , "offset-hour"
    :  [ "positive integer"
       , "earth: 0..14"
       ]

    , "offset-minute"
    :  [ "positive integer"
       , "earth: 0, 15, 30, 45"
       ]

    , "date-timestamp"
    :  [ "date[time]"
       , "human perception of when"
       , "human cosmic configuration cycle"
       ]

    , date
    :  [ "year[month[day]]"
       ]

    , year
    :  [ "positive integer"
       , "0..9999"
       ]

    , month
    :  [ "positive integer"
       , "earth: 1..12"
       ]

    , day
    :  [ "positive integer"
       , "earth: 1..31"
       ]

    , time
    :  "hour[minute[second]]"

    , hour
    :  [ "positive integer"
       , "earth: 0..23"
       ]

    , minute
    :  [ "positive integer"
       , "earth: 0..59"
       ]

    , second
    :  [ "positive-integer[.sub-second]"
       , "earth: 0..59"
       ]
    , "sub-second"
    :  "ms.mcs.ns.ps.as.zs.ys"

    , ms
    :  [ "positive integer"
       , "earth: 0..1000"
       , "millisecond"
       ]

    , mcs
    :  [ "positive integer"
       , "earth: 0..1000"
       , "microsecond"
       ]

    , ns
    :  [ "positive integer"
       , "earth: 0..1000"
       , "nanosecond"
       ]

    , ps
    :  [ "positive integer"
       , "earth: 0..1000"
       , "picosecond"
       ]

    , fs
    :  [ "positive integer"
       , "earth: 0..1000"
       , "femtosecond"
       ]

    , as
    :  [ "positive integer"
       , "earth: 0..1000"
       , "attosecond"
       ]

    , zs
    :  [ "positive integer"
       , "earth: 0..1000"
       , "zeptosecond"
       ]

    , ys
    :  [ "positive integer"
       , "earth: 0..1000"
       , "yoctosecond"
       ]
    }
}
;