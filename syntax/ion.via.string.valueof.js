;

~
{ re:
    { id: 'ion.via.string.valueof@ideas.ionify.net'
    , is: "an exploration of ion via strings that activate js' "
        + "toString & valueOf abstract operations."
    , by: 'mikelee@ionify.net'
    , at: '2018.10.15+09...2007.09-04'
    }
    ,
  valueOf ()
    { String.prototype.valueOf
    = String.prototype.toString
    = this.onString
    ; this.try ()
    }
    ,
  onString ()
    { console.log (Array.prototype.join.call (this, ''))
    }
    ,
  try ()
    { new String ('no')
    - "did this work?" [0.0] + "no"
    ~ "¿what about this" | "this?" | "no"
    ~ []["test"] + {}["hi"]
    ~  "example"  -  "punctuation"
    ^   "aesop"   &  "  stories  "  >>  "are ions"
    *   "these"   +  "expressions"  <<  "are too"
    /   "write"   %  "them as you"  |   "see fit"
    >   "using"  >=  "  any of   "  <=   "these" 
    <     17     ==  " compatible"  !=  "operators!"
    ; "¿ this worked ?" ^ new String ("no")
    }
}

;