;
~
{ re:
    { id: "anemojii.2.0@ions.iskitz.net"
    , is: "animated emoji ions"
    , by: "mike.lee@iskitz"
    , at: "2017.07.09-07...2015"
    , it: "Demonstrates ion-based literate programming"
    }
    ,
  do:
    [ "choose a random face"
    , "show that face"
    , "repeat after 1.5 seconds, 2014 times"
    ]
    ,
  faces:
    [ "+{'-':'-'};"
    , "+['- : -'];"
    , "+['- . -'];"
    , "+{'•':'•'};"
    , "+['• : •'];"
    , "+['• . •'];"
    , "+{'ö':'ö'};"
    , "+['ö : ö'];"
    , "+['ö . ö'];"
    , "+{'*':'*'};"
    , "+['* : *'];"
    , "+['* . *'];"
    , "+{'o':'o'};"
    , "+['o : o'];"
    , "+['o . o'];"
    , "+{'O':'O'};"
    , "+['O : O'];"
    , "+['O . O'];"
    , "+[‘• . •’];"
    , "+[‘• ؈ •’];"
    , "+[‘0 . 0’];"
    , "+{'0':'0'};"
    , "+{ 0 : 0 };"
    , "+{'õ':'õ'};"
    , "+['õ . õ'];"
    , "+{'ō':'ō'};"
    , "+['ō . ō'];"
    , "+{'ô':'ô'};"
    , "+{'ø':'ø'};"
    , "+['ó . ò'];"
    , "+{'ó':'ò'};"
    , "+{'ò':'ó'};"
    , "+['ò . ó'];"
    , " +[' . ']; "
    , "+['— ؈ —'];"
    , "+{'~':'~'};"
    , "+['~ . ~'];"
    , "+{'+':'+'};"
    , "+['+ . +'];"
    , "+['๑˃̵ᴗ˂̵'];"
    , "+[' ͡° ʖ ͡°'];"
    , "+[' ͡° ͜ʖ ͡°'];"
    ]
    ,
  "choose a random face":
    function chooseFace (my)
      { var faces   = my.faces
          , face    = Math.random() * faces.length
          ; face    = Math.floor (face)
          ; my.face = faces [face]
      }
    ,
  "show that face":
    function showFace (my)
      { document.title
      = document.body.innerHTML
      = my.face
      }
    ,
  "repeat after 1.5 seconds, 2014 times":
    function repeat (my)
      { !repeat.my    && (repeat.my    = my)
      ; !repeat.count ?  (repeat.count =  1)
                      :   repeat.count++
      ; if (repeat.count >= 2015) return
      ; setTimeout (repeat, Math.random() * 1500)
      ; (repeat.count == 1) && repeat.my.do.pop()
      ~ repeat.my.do
      }
    ,
  valueOf:
    function go ()
      { delete      this.valueOf
      ; Object.prototype.valueOf = this.onION
      ; Array .prototype.valueOf = this.onAEON
      ; this.onAEON.of           = this
      ; +this
      }
    ,
  onION:
    function onION ()
      { var id = this.re ? this.re.id :this.id
      ; id && +[`${id}`]
      ; return +this.do || this
      }
    ,
  onAEON:
    function onAEON ()
      { var anemojii = onAEON.of
      ; for ( var act,next=-1,last=this.length
            ; ++next < last
            ; anemojii [act = this [next]]
            ? anemojii [act] (anemojii)
            : console.log (act)
            )
      ; return next / this.length
      }
}
;