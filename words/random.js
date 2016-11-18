;

+
{ re:
    { id: "random.1@ionify"
    , is: "A Random Number generator"
    , by: "mike.lee@iskitz"
    , at: "2016.09.08...07-07"
    , in:
        [   "san-jose.california.usa.earth"
        , "forest-hills.new-york.usa.earth"
        ]
    },

  on: "random",                                              // +{random:Number}
  do:
    function onRandom (ion)
      {  var num = (Math.random () * ion.random + 1) | 0     // generates a random number between 1 + random
      ;  +{log:num}                                          // logs the number
      ;  return num                                          // returns the number to support 10 <= {random:7} * 10 <= 70
      }

} //+random@ionify

;