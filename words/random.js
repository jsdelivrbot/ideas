;

+
{ re:
    { id: "random.0.1@ionify"
    , is: "A Random Number generator"
    , by: "mike.lee@iskitz"
    , at: "2017.07.13-07...2016.09.07-07"

    , im: "Thinking of how to enable non-NaN ion return values for"

             +{random:10} <= 7

        ||" ionify doesn't currently do this in its +{} sensor because it"
        + " senses & activates as many of all known actions as found within"
        + " each which means multiple possible return values but ions evaluate"
        + " as single-value numeric expressions."

        + "I'll sense when an ion has only one matching action then return that"
        + " singluar value. Created ionify.todo to continue exploring"
        + " multi-action ion results."
    }

, on: "random"                                               // +{random:Number}

, random:
    function onRandom (ion)
      {  var num = (Math.random () * ion.random + 1) | 0     // generates a random number between 1 + random
      ;  +{log:num}                                          // logs the number
      ;  return num                                          // returns the number to support 10 <= {random:7} * 10 <= 70
      }

} //+random@ionify

;