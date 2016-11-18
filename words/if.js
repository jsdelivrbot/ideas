;
// if (ease < random (100)) right = left; else right = random (kana)

+["if ease < random 100 then right = left else right = random kana"]                   // if, <, = are known words + symbols

+{if:["ease < random 100"]     , then:["right = left"], else:["right = random kana"]}  // if has most parts: if, then, else

+{if:"ease", "<":["random 100"], then:{right:"left"}  , else:{right:["random kana"]}}  // if, then, else have equal parts: <, =

+{if:"ease", "<":{random:100}  , then:{right:"left"}  , else:{right:{random:"kana"}}}  // <, else have equal parts: random

;

+
{ re:
    { id: "if.1@ionify.net"
    , by: "Michael Lee"
    , at: "2016.09.07-07"
    , in: "san-jose.california.usa.earth"
    , is: "An idea for how to do simple language processing for if-then-else statements"
    },

  on:                          // expected grammar + vocabulary groups
    [["if", "then", "else"]    // ranked from most precise | complex | involved
    ,["if", "then"]            // to the
    ,["if", ","]               // simplest | most concise | least complex
    ],

  do:
    function onIf (ion)
      { var condition       = ion["if"]
          , doSomething     = ion.then
          , doSomethingElse = ion.else
          , comma           = ion[","]
          ;
        switch (true)
          {  case (condition && doSomethingElse && doSomething):
               if (+[condition]) { +[doSomething] } else { +[doSomethingElse] }
               break;

             case (condition && comma):
             case (condition && doSomething):
               if (+[condition]) { +[doSomething] }
               break;
          }
      }
}

;