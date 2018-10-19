;

+
{ re:
    { id: "in@ionify.net.0.1.0.2016.11.20-08"
    , is: "A way to specify a location in space"
    , by:
        [ {creator: "mike.lee@ions.iskitz.net",  at: "2007.09-04",    in: "forest-hills.ny.usa.na.earth"}
        , {authors:     "team@ions.ionify.net",  at: "2016.11.20-08", in:     "san-jose.ca.usa.na.earth"}
        ]
    },

  in: "[town.][city.][state.][country.][continent.][planet][.solarsystem][.universe]"
    | ["in", "...", "in"]

    + "    forest-hills.new-york.usa...earth means Forest Hills,   New York, United States of America,                Earth"
    + "      san-jose.california.usa...earth means     San Jose, California, United States of America,                Earth"
    + "          georgetown...guyana...earth means   Georgetown,                               Guyana,                Earth"
    + "georgetown.guyana.south-america.earth means   Georgetown,                               Guyana, South America, Earth"
}

;