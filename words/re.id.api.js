;

+
{ re:
    { id: 're.id.api@ionify.net'
    , is: "a definition of one or more api: application programming interface versions"
    , at: 1.011
    , by:
        [ {creator: 'mike.lee@ions.iskitz.net',  on: -04.200709,   in: 'forest-hills.ny.usa.na.earth'}
        , {authors:     'team@ions.ionify.net',  on: +09.20181020, in:     'san-jose.ca.usa.na.earth'}
        ]
    , it: "uses valid numbers where the whole # is the version, the decimal is the change, "
        + "version.0change means an unsupported change & -version.change means"
        + "incompatibility with one or more earlier versions."
    },

  'id .[-]version.[0]change .on:moment .in:space':
    { api:
        [/  id[.0][.-]version#[.change#][.at][.in] || ["api", "...", "api"]/

        ,/  .0.version#  indicates  an api's version is unsupported & subject to change/

        ,/    .version#  indicates  an api's version is   compatible with 1 or more earlier version(s)/
        ,/    -version#  indicates  an api's version is incompatible with 1 or more earlier version(s)/

        ,/ [.-]version#  increases  on 1 or more api      change/
        ,/    .change#   increases  on 1 or more api-safe change/
        ,/    .at        increases  on every              change/

        ,/  API Examples:/

        ,/    api.0.#          means api's #th    compatible version;      unsupported/
        ,/    api.0-#          means api's #th  incompatible version;      unsupported/

        ,/    api.#            means api's #th    compatible version         supported/
        ,/    api-#            means api's #th  incompatible version         supported/

        ,/    api.0.1          means api's 1st    compatible version;      unsupported/
        ,/    api.1            means api's 1st    compatible version         supported/

        ,/    api.0.2          means api's 2nd    compatible version;      unsupported/
        ,/    api.0.2.1        means api's 2nd    compatible version's 1st unsupported change/
        ,/    api.2.1          means api's 2nd    compatible version's 1st   supported change/

        ,/    api.0-3.5        means api's 3rd  incompatible version's 5th unsupported change/
        ,/    api-3.5          means api's 3rd  incompatible version's 5th   supported change/

        ,/    api.7.7.2016.11  means api's 7th    compatible version's 7th   supported change made November, 2016/
        ]

    , id: "id: name[@domain|ip],  see re.id@ionify"
    , at: "at: time,              see re.moment@ionify"
    , in: "in: space,             see in@ionify"
    }
}

;