;

+
{ re:
    { id: "wakatta"
    , by: "Michael Lee"
    , at: "2016.09.07...05-07"
    , in: "san-jose.california.usa.earth"
    , is: "Exploring vocabulary + language for creating the webi [web ion] wakatta game."
    }
}

+
{  id: "game",
  get: ["kana.js", "view.js"],
  use: ["kana", "show"]
}

+
{ id: "game",
  do:
    [ { get : ["kana"   , "show"]
      , from: ["kana.js", "view.js"]
      , then: "start"
      }
    ],
  kana:
    [ { add:  Object   , in:"kana", to:"game"},
      { add: {Array:[]}, in:"kana", to:"game.kana"},

      { for:"set", in:"kana", do:
          [ { add:"set", to:"game"},
            { for:"subset", in:"set",
               do:"..."
            }
          ]
      }
    ]
}

+
{ on:"random",                                               // +{random:Number}
  random:
    function onRandom (ion)
      {  var num = (Math.random () * ion.random + 1) | 0     // generates a random number between 1 + random
      ;  +{log:num}                                          // logs the number
      ;  return num                                          // returns the number to support 10 <= {random:7} * 10 <= 70
      }
}


+
{ id: "game",
  do:
    [ {get:["kana.js", "view.js"]},
      { on:["kana"   , "show"], do:"start"}
    ],

  kana:
    ["add each array member's members to the kana array",
     "add each array member to the kana array"
    ],

  millisecond: 5000,

  start:
    {do:"play", every:"millisecond"},

  ease: 5, //1=10%,..., 5=50%,..., 10=100%

  play:
    + {left : {random:"kana"}}

    + {if:"ease", "<":10 * {random:10}, right:"left", else: {right:{random:"kana"}}}

    + ["if ease < random 100 then right = left else right = random kana"]               // if, <, =; "if" has most parts

    + {if:"ease < random 100", then:"right = left", else:"right = random kana"}

    + {if:"ease", "<":"random 100", then:{right:"left"}, else:{right:"random kana"}}

    + {if:"ease", "<":{random:100}, then:{right:"left"}, else:{right:{random:"kana"}}}

    + {show : "+left : +right"},

  stop:
    "play.stop"
}

+
{ id: "game",
  do:
    + { get: "kana.js", use: "kana"}
    + { get: "view.js", use: "show"}

    + { on: ["kana", "show"]
      , do: "start"
      }
}
/*
game
: get kana + view then start

game.start
:
*/
 + { get: "kana.js", use: "kana" }     // get kana.js then use kana: assign kana to this object or pass it to a kana() method

;