;
~
{ re:
    { id: "on.array@ionify"
    , is: "Reusing Array.toString()'s looping"
    , by: "mike.lee@ionify"
    , at: "2017.06.02-07...2015"
    , in: "san-jose.california.usa"
    }
    ,
  valueOf:
    function go ()
      { Array.prototype.valueOf
          = function ()
              { console.log ("+[]")
              ; return this
              }

        Object.prototype.valueOf = null

        Object.prototype.toString
          = function ()
              { console.log ("+{}")
              ; return "+{}"
              }
      ; [[1.0,{},1.1,{},1.2,{}], [2,{}]]+""
      }
}
;