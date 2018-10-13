;

~
{ re:
    { id: 'ion.via.string.valueof@ideas.ionify.net'
    , is: "an exploration of ion via strings that activate js' "
        + "toString & valueOf abstract operations."
    , by: 'mikelee@ionify.net'
    , at: '2018.10.13+09...2007.09-04'
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
    { console.log (this)
    }
    ,
  try ()
    { new String ('hi!')
    | "did this work?" [0.0] + "i"
    ~ "¿what about this" | "this?"
    ~ []["test"] + {}["hi"]
    ~  "example"  -  "punctuation"
    ^   "aesop"   &  "  stories  "  >>  {are:"ions"}
    *   "these"   +  "expressions"  <<  {are:"too" }
    /   "write"   %  "them as you"  |   {see:"fit" }
    >   "using"  >=  "  any of   "  <=     "these" 
    <     17     ==  " compatible"  !=  "operators!"
    ;
    }
}

;