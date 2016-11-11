;

+
{ re:
    { id: "view.css@wakatta"
    , as: "css.3@w3c"
    , by: "mike.lee@iskitz"
    , at: "2016.09.08...02-07"
    , in: "san-jose.california.usa.earth"

    , is:
        [ "An ion defining the visual appearance of wakatta."
        , "Its syntax is as identical as possible to CSS."
        , "It could simplify interacting with CSS from JS."

        , "I'm not sure what value it gives beyond CSS DOM but I"
        + " like that it allows CSS to be represented as JS"
        + " Object Literals + JSON."

        , "An idea is to use ions like this as simple APIs for"
        + " updating a DOM using getter + setters, for each CSS"
        + " rule's attributes, that queue + perform DOM updates."

        , "At the very least having CSS as an ion makes it active"
        + " and independent."

        , "Could allow CSS to be a language-agnostic way to"
        + " define + enact appearance."
        ]
    },

  "@charset": "UTF-8",

  "html, body":
    { height   : "100%"
    , width    : "100%"
    , margin   : 0
    , padding  : 0
    , overflow : "hidden"
    },

  body:
    { animation   : "2.5s infinite alternate fade"
    , color       : "#777"
    , fontFamily  : "Hiragino Mincho ProN"
    ,"font-size"  : "61px"
    , marginTop   : "25%"
    , textAlign   : "center"
    },

  "body.yes":
    {"animation-name": "none"
    , color          : "#4c4"
    },

  "body.no":
    { animationName : "none"
    , color         : "#c44"
    },

  "@keyframes fade":
    { from:
        { color     : "#fff"
        , opacity   : "0%"
        },

      "50%":
        { color     : "#ccc"
        , opacity   : "50%"
        },

      to:
        { color     : "#777"
        , opacity   : "100%"
        }
    }

} //+view.css@wakatta

;