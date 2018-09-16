;

~
{ re:
    { id: 'ion.module@ideas.ionify.net'
    , is: "an ion: invoked object notation module"
    , by: 'mikelee@ionify.net'
    , at: '2018.09.16-07...2018.09.14-07'
    }
, valueOf ()
    { console.log ("I contain my content, have a name, and can share it and automatically say this!")
    }
}

~
{ re:
    { id: 'ion.sensor@ideas.ionify.net'
    , is: "an ion: invoked object notation module that senses other ions"
    , by: 'mikelee@ionify.net'
    , at: '2018.09.16-07...2018.09.14-07'
    }
, valueOf ()
    { Object.prototype.valueOf = this.onion
    ~ {hi:'🤓', there:'👋🏾'}
    }
, onion ()
    { console.log (`I sensed this ion with these terms: ${Object.keys (this)}`)
    }
}

~
{ re:
    { id: 'storie.sensing.ion@ideas.ionify.net'
    , is: "an ion : invoked object notation module that senses "
        + "stories: sentence template or regular [ion] expressions"
    , by: 'mikelee@ionify.net'
    , at: '2018.09.16-07...2018.09.14-07'
    }
, valueOf ()
    { RegExp.prototype.valueOf = this.onStorie
    ~ / 👋🏾 hi 🤓 there! /
    }
, onStorie ()
    { console.log (`I sensed this storie: ${this.source}`)
    }
}

~
{ re:
    { id: 'list.sensing.ion@ideas.ionify.net'
    , is: "an ion: invoked object notation module that senses lists & activates "
        + "their ions"
    , by: 'mikelee@ionify.net'
    , at: '2018.09.16-07...2018.09.14-07'
    }
, valueOf ()
    { Array.prototype.valueOf = this.onions
    ~ [  { is:'the', first:'one' }
      ,  / is second /
      , [/ is fourth because its containing list is third /]
      ]
    }
, onions ()
    { console.log (`I sensed this list of ${this.length}`)
    ; for (var last = this.length, ion = -1; ++ion < last; ~ this [ion]);
    }
}

~
{ re:
    { id: 'action@ideas.ionify.net'
    , is: "an ion: invoked object notation module that performs actions"
    , by: 'mikelee@ionify.net'
    , at: '2018.09.16-07...2018.09.14-07'
    }
, valueOf ()
    { Function.prototype.valueOf = this.action
    ~ this.is_an_action
    }
, action ()
    { console.log (`I sensed this action: ${this.name}`)
    ; this ()
    }
, is_an_action ()
    { console.log ("light's, camera, action!")
    }
}

~
{ re:
    { id: 'action.composer@ideas.ionify.net'
    , is: "an ion: invoked object notation module that composes actions"
    , by: 'mikelee@ionify.net'
    , at: '2018.09.16-07...2018.09.14-07'
    }
, valueOf ()
    { Function.prototype.valueOf = this.action
    ; this. action.this  = this
    ~ this. composes     & this. stops | this. _
    & this. restarts     | this. _
    }

, _ ()
    { /*stops sharing by returning undefined*/
    }

, action
:   function action ()
      { console.log (`I sensed this action: ${this.name}`)
      ; var composer        = action.this
      ;     composer.result = this (composer.result || '')                    
      }
, composes
    (something)
      { console.log (`this composition ${something}`)
      ; return "with sharing "
      }
, stops
    (something)
      { console.log (`${something}can be stopped 🤓`)
      }
, restarts
    (something)
      { console.log (`and restarted ${something}`)
      }
}

;