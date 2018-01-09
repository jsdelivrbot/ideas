;
~
{ re:
    { id: "is.type.test@ionify.net"
    , by: "mike.lee@iskitz"
    , at: "2018.01.08-08"
    , is: "the is.type ion's test suite"
    }
    
, do:
    [       ~~ {is:[], type:"Array"}  && console.log ("~~")
    ,        + {is:[], type:"Array"}  && console.log (" +")
    ,       (+ {is:[], type:"Array"}) && console.log ("(+")
    , (true == {is:[], type:"Array"}) && console.log ("==")
    ]
}
;