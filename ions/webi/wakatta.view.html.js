;

+
{ re:
    { id: "view.html@wakatta"
    , as: "html.5@w3c"
    , by: "mike.lee@iskitz"
    , at: "2016.09.08...05-07"
    , in: "san-jose.california.usa.earth"
    , is:
        [ "An ion defining wakatta's visual appearance as HTML."
        , "Senses members named valid HTML tagnames: html, head, body, etc."
        , "Resolves .reference values to members: .meta = +view.html.meta, etc."
        , "Renders HTML if html, head or body tags are found."
        ]
    },

  html:
    [ {head: [".meta", ".link", ".title"]}
    , {body: [".script"]}
    ],

  meta:
    [ {charset:"utf-8"}
    , {name:"application-name"                     , content:"わかった！" 　        , lang:"ja"}
    , {name:"application-name"                     , content:"¡Wakatta! I got it!", lang:"en"}
    , {name:"mobile-web-app-capable"               , content:"yes"}
    , {name:"apple-mobile-web-app-capable"         , content:"yes"}
    , {name:"apple-mobile-web-app-status-bar-style", content:"default"}
    , {name:"viewport"                             , content:"width=device-width"}
    ],

  link:
    [ {rel:"icon"         , href:"/images/favicon.ico", type:"image/ico"}
    , {rel:"shortcut icon", href:"/images/favicon.ico", type:"image/ico"}
    , {rel:"stylesheet"   , href:"view.css"}
    ],

  title: "わかった",

  script:
    {src:"./ionify.web.js", type:"text/javascript"}
}

;