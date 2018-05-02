;
~
{ re:
    { id: 'on.ideas@ionify.net'
    , is: "An exploration of ionify's ~on action"
    , by: 'mike.lee@ionify'
    , at: '2018.05.02-07...2007.09-08'
    , in: 'san-jose.california.usa'
    }


, ideas
:   { minimal
    :   ` At it's simplest, ~on needs a test & an action as its parameters
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
            :   {boolean:true, number:true, string:true, undefined:true}

            , onOn
            :   { try
                :   function hasOn (ion)
                      { return 'on' in (ion || hasOn.on)
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
                  ; this.Objects()
                  ~ this
                  }
            }
    }


, valueOf
:   function go ()
      {
      }
}
;