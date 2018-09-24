;

~
{ re:
    { id: 'ion.via.to-property-key@ideas.ionify.net'
    , is: "an exploration of ion via syntax that activates js' "
        + "ToPropertyKey abstract operation."
    , by: 'mikelee@ionify.net'
    , at: '2018.09.23-07...2018.09.22-07'
    }
    ,
  valueOf ()
    { [ ]
      [ { toString ()
            { console.log (`[][{}] toString 1st`)
            ; return this
            }
            ,
          valueOf ()
            { console.log (`[][{}] valueOf  2nd`)
            }
        }
      ]
      
      ;
      
      ( {/* parenthesis-wrapping evaluates as {}[{}] vs {};[{}] */}
      [ { toString ()
            { console.log (`{}[{}] toString 1st`)
            ; return this
            }
            ,
          valueOf ()
            { console.log (`{}[{}] valueOf  2nd`)
            }
        }
      ])
      
      ~[` [][{}] & {}[{}] can't be parsed as JSON :-( `]

      console.log
        ( [ `[][{}] is json? ${!!JSON.parse ('[][{}]')}`
          , `{}[{}] is json? ${!!JSON.parse ('{}[{}]')}`
          , !!JSON.parse
                ( `[]
                   [{}]
                  `
                )
          ]
        )
    }
}

;