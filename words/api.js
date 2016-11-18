;

+
{ re:
    { id: "api@ionify.net.0.1.0.2016.11.18-08"
    , is: "A way to specify api: Application Programming Interface versions"
    , by:
        [ {creator: "mike.lee@ions.iskitz.net",  at: "2007.09-04", in: "forest-hills.ny.usa.na.earth"}
        , {editors:     "team@ions.ionify.net",  at: "2016.11.18", in:     "san-jose.ca.usa.na.earth"}
        ]
    },

  "api:version at:time in:space":
    { api
        : "name[.0.]#.change#[.at][.in]" | ["api", "api", "..."]

        + "api.0.2.1        means api's 2nd unsupported version's 1st change"
        + "api.2.1          means api's 2nd   supported version's 1st change"
        + "api.1.0          means api's 1st   supported version"
        + "api.3.5          means api's 3rd   supported version's 5th change"
        + "api.7.7.2016.11  means api's 7th   supported version's 7th change made November, 2016"

    , at: "at:time,   see at@ionify"
    , in: "in:space,  see in@ionify"
    }
}

;