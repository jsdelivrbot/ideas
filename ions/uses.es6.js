;

~
{ re:
    { id: 'ion.module@ideas.ionify.net'
    , is: "an ion: invoked object notation module"
    , by: 'mikelee@ionify.net'
    , at: '2018.10.12+09...2018.09.14-07'
    }
    ,
  valueOf ()
    { console.log ( "I'm unobtrusive, compatibly named, self-contained, "
                  + "observable & automatically invoked!"
                  )
    }
}

~
{ re:
    { id: 'ion.sensor@ideas.ionify.net'
    , is: "an ion: invoked object notation module that senses "
        + "other ions."
    , by: 'mikelee@ionify.net'
    , at: '2018.09.20-07...2018.09.14-07'
    }
    ,
  valueOf ()
    { Object.prototype.valueOf = this.onion
    ~ {hi:'🤓', there:'👋🏾'}
    }
    ,
  onion ()
    { console.log (`I sensed this ion with these terms: ${Object.keys (this)}`)
    }
}

~
{ re:
    { id: 'storie.sensing.ion@ideas.ionify.net'
    , is: "an ion : invoked object notation module that senses "
        + "stories: sentence template or regular [ion] expressions."
    , by: 'mikelee@ionify.net'
    , at: '2018.10.12+09...2018.09.14-07'
    }
    ,
  valueOf ()
    { RegExp.prototype.valueOf = this.onStorie
    ~  / 👋🏾 hi 🤓 there! /
    <- / sensible comment /
    }
    ,
  onStorie ()
    { console.log (`I sensed this storie: ${this.source}`)
    }
}

~
{ re:
    { id: 'list.sensing.ion@ideas.ionify.net'
    , is: "an ion: invoked object notation module that senses "
        + "lists & activates their ions."
    , by: 'mikelee@ionify.net'
    , at: '2018.10.12+09...2018.09.14-07'
    }
    ,
  valueOf ()
    { Array.prototype.valueOf = this.onions
    ~ [  { is:'the', first:'one' }
      ,  / is second /
      , [/ is fourth because it's within a list that's third /]
      ]
    }
    ,
  onions ()
    { console.log (`I sensed this list of ${this.length}`)
    ; for (var next = 0; next < this.length; ~ this [next++]);
    }
}

~
{ re:
    { id: 'action@ideas.ionify.net'
    , is: "an ion: invoked object notation module that senses & performs acts"
    , by: 'mikelee@ionify.net'
    , at: '2018.09.20-07...2018.09.14-07'
    }
    ,
  valueOf ()
    { Function.prototype.valueOf = this.action
    ~ this.act
    }
    ,
  action ()
    { console.log (`I sensed this action: ${this.name}`)
    ; this ()
    }
    ,
  act ()
    { console.log ("lights! ✨ camera! 🎥 action! 🎭")
    }
}

~
{ re:
    { id: 'action.composer@ideas.ionify.net'
    , is: "an ion: invoked object notation module that composes actions"
    , by: 'mikelee@ionify.net'
    , at: '2018.09.20-07...2018.09.14-07'
    }
    ,
  valueOf ()
    { (Function.prototype.valueOf  = this.action).ion = this
    ;  with (this) ~ compose & share -_- reset
    }
    ,
  _ /*-_-*/ ()
    { // resets sharing by returning undefined
    }
    ,
  action:
    function action ()
      { //console.debug (`I sensed this action: ${this.name}`)
      ; var composer        = action.ion
      ;     composer.result = this (composer.result || '')                    
      }
      ,
  compose
    (something)
      { console.log (`this composition ${something}`)
      ; return "shares 🤲🏾 "
      }
      ,
  share
    (something)
      { console.log (`${something}🎁`)
      ; return something
      }
      ,
  reset
    (something)
      { console.log ( `it decides what & when it does ${something}by resetting via -_- `
                    + 'as needed'
                    )
      }
}

;