;
~
{ re:
    { id: "anemojii.0.3.0@ions.iskitz.net"
    , is: "animated emoji ions"

    , by: "mike.lee@iskitz"
    , at: "2017.07.11-07...2015"
        ,
      it: "Demonstrates ion-based literate programming"
        ,
      im: `...
          `
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
    , "+/(d ~ . ~ b)/;"
    , "+/(d • . • b)/;"
    , "+/(d - . - b)/;"
    ]

    ,
  "choose a random face":
    function chooseFace ()
      { var ion       = chooseFace.ion
          , faces     = ion.faces
          , face      = Math.random * faces.length
          ; face      = Math.floor (face)
          ; ion.face  = faces [face]
      }
    ,

  "show that face":
    function showFace ()
      { document.title
      = document.body.innerHTML
      = showFace.ion.face
      }
    ,

  "repeat after 1.5 seconds, 2014 times":
    function repeat ()
      { repeat.count ? ++repeat.count : (repeat.count = 1)

        if (repeat.count >= 2015) return

        setTimeout (repeat, Math.random * 1500)
      ; (repeat.count == 1) && repeat.ion.do.pop()
      ~ repeat.ion.do
      }
}
;