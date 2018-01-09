;
~
{ re:
    { id: "is.type@ionify.net"
    , by: "mike.lee@iskitz"
    , at: "2018.01.08-08"
    , is: "A type verification ion"
    }

, on:
    [["is", "type"]]

, "is type"
:   function isType (ion)
      { var   is = ion.is
      ,     type = ion.type
      ,     Type = Object.prototype.toString.apply (is)
      ; return Type == "[object "+ type +"]"
      }
}
;