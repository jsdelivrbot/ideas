;

+
{ re:
    { id: "api@ionify.net.0.1.0.2016.11.19-08"
    , is: "Specifies 1 or more api: application programming interface versions"
    , by:
        [ {creator: "mike.lee@ions.iskitz.net",  at: "2007.09-04",    in: "forest-hills.ny.usa.na.earth"}
        , {editors:     "team@ions.ionify.net",  at: "2016.11.19-08", in:     "san-jose.ca.usa.na.earth"}
        ]
    },

  "re.api: id.version .at:time .in:space":
    { api:
        [/  id[.0][.-]version#[.change#][.at][.in] || ["api", "...", "api"]/

        ,/  .0.version#  indicates  an api's version is unpublished + subject to change/

        ,/    .version#  indicates  an api's version is   compatible with 1 or more earlier version(s)/
        ,/    -version#  indicates  an api's version is incompatible with 1 or more earlier version(s)/

        ,/ [.-]version#  increases  on 1 or more api      change/
        ,/    .change#   increases  on 1 or more api-safe change/
        ,/    .at        increases  on any                change/

        ,/  API Examples:/

        ,/    api.0.#          means api's #th    compatible version;      unpublished/
        ,/    api.0-#          means api's #th  incompatible version;      unpublished/

        ,/    api.#            means api's #th    compatible version         published/
        ,/    api-#            means api's #th  incompatible version         published/

        ,/    api.0.1          means api's 1st    compatible version;      unpublished/
        ,/    api.1            means api's 1st    compatible version         published/

        ,/    api.0.2          means api's 2nd    compatible version;      unpublished/
        ,/    api.0.2.1        means api's 2nd    compatible version's 1st unpublished change/
        ,/    api.2.1          means api's 2nd    compatible version's 1st   published change/

        ,/    api.0-3.5        means api's 3rd  incompatible version's 5th unpublished change/
        ,/    api-3.5          means api's 3rd  incompatible version's 5th   published change/

        ,/    api.7.7.2016.11  means api's 7th    compatible version's 7th   published change made November, 2016/
        ]

    , id: "id: name[@domain|ip],  see id@ionify"
    , at: "at: time,              see at@ionify"
    , in: "in: space,             see in@ionify"
    }
}

;