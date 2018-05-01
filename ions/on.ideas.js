;
~
{ re:
    { id: 'on.ideas@ionify.net'
    , is: "An exploration of ionify's ~on action"
    , by: 'mike.lee@ionify'
    , at: '2018.01.17-08...2007.09-08'
    , in: 'san-jose.california.usa'
    }


, ideas
:   { minimal
    :   `Apps:`

    +   /Senses Sensors, object types, once by setting Type.prototype.valueOf/
    +   /id:'s kept as this type's name to enable its later usage via ~on,in:/
    
    +       {on:  Object, id:   'ion', do:Function|{}|[]|/./}
    +       {on:   Array, id:  'aeon', do:Function|{}|[]|/./}
    +       {on:  RegExp, id:'storie', do:Function|{}|[]|/./}
    +       {on:   Error, id: 'error', do:Function|{}|[]|/./}
    +       {on:Function, id:'action', do:Function|{}|[]|/./}
    
    +   /Senses ions by 1 of their parts, checked for every ion. in: states, /
    +   /optionally, which sensor should be used to sense this ion:          /       
    
    +       {on:'part', in:'ion'|'aesop'|'storie', do:Function|{}|[]|/./}
    
    +   /./
    +       {on:            ['par', 'ts'] ,          par       :'ion', ts:'ion'}
    +       {on:            ['part sets'] ,         'part sets':'ion'          }
    +       {on:[['space d', 'par    ts']], 'space d par    ts':'ion'          }
    
    +       {on: {name:'',type:'',value:''} , do:'ion'}
    +       {on:[{name:'',type:'',value:''}], do:'ion'}
    
    +   ` At it's simplest, ~on needs a test & an action as its parameters
        . Both can be ions or the name of one of the ~on action's properties
        , where an ion is any object, including functions:
        `
    +       { on: Function | {} | [] | /.../
            , do: Function | {} | [] | /.../
            }

    |       {     on:   String
            ,     do: Function | {} | [] | /.../
            , String: Function | {} | [] | /.../
            }

    +   `Example usage:
        `
        
    +       {
            }
            
    +       { on: 'Objects'
            , do:
                function onObject ()
                  { var ion   = onObject.ion
                      , not   = ion.notAnIon
                      , acts  = ion.acts
                      , act

                    for (var id in acts)
                      { act = acts [id]
                      ; not [typeof act] && (act = acts [id] = ion [act])
                      ; act.try.on = this
                      ; act.try++ && +act.do
                      }
                  }

            , Objects
            :   function senseObjects ()
                  { this.undo.Object = Object.prototype.valueOf
                  ; Object.prototype.valueOf = this.do
                  }

            , undo
            :   {}

            , acts
            :   {0:'onOn'}

            , notAnIon
            :   {object:true, function:true}

            , onOn
            :   { try
                :   function hasOn (ion)
                      { return 'on' in ion
                      }
                , do
                :   function onOn (ion)
                      { / Confirm ion has a test:try & action:do  /
                      + / Generate a unique id for this on action /
                      + / Add try & do to acts using that id      /
                      }
                }
            , valueOf
            :   function go ()
                  { this.do.ion = this
                  ; return this.do()
                  }
            }
    }


, valueOf
:   function go ()
      {
      }
}
;