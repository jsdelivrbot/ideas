;

+
{ re:
    { id: "id.0.1.0.2016.11.20-08@ionify.net"
    , is: "A way to identify things"
    , by:
        [ {creator: "mike.lee@ions.iskitz.net",  at: "2007.09-04",    in: "forest-hills.ny.usa.na.earth"}
        , {authors:     "team@ions.ionify.net",  at: "2016.11.20-08", in:     "san-jose.ca.usa.na.earth"}
        ]
    },

  id: "name[@domain|ip]" | ["id", "...", "id"]

    + "id@ionify.net    means thing named 'id' that can be verified by ionify.net"
    + "id@ionify        means thing named 'id' that may be verified by ionify.[net|com|io|org]"
    + "id               means thing named 'id' that may be verified by its current host or is unverified"
    + "id@123.45.67.90  means thing named 'id' that can be verified by 123.45.67.90"
}

;