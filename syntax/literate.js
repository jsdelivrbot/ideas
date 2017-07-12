;
~
{ re:
    { id: "anemojii.0.3.0@ions.iskitz.net"
    , is: "animated emoji ions"

    , by: "mike.lee@iskitz"
    , at: "2017.07.11-07...2015"

    , it: "Demonstrates ionified literate programming"
    , im: `Exploring ion API & runtime documentation syntax.
          `
    }

, do:
    [ "choose a random face"
    , "show that face"
    , "repeat after <= 1.5 seconds 2014 times"
    ]

, faces:
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
    , "+{ 0 : 0 };"
    , "+{'0':'0'};"
    , "+['0 : 0'];"
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
    , "+/d(~ . ~)b/;"
    , "+/d(• . •)b/;"
    , "+/d(- . -)b/;"
    , '+["]\'• ؈ •\'["];'
    , "+['~ ؈ ~'];"
    ]

, "choose a random face":
    function chooseFace ()
      { ~ {
        I :"Choose a face from the faces list by first generating a random"
          +" number between 0 and the list's length. Next I use that number"
          +" number to select the face at the matching position within the"
          +" list. Lastly, I save the chosen face as a property on the faces"
          +" list."
          }

        var faces       = chooseFace.ion.faces
          , choice      = Math.random * faces.length
          ; choice      = Math.floor (choice)
          ; faces.next  = faces      [choice]

        ~ {I:"Chose "+ faces.next +" using random number "+ choice}
      }

, "show that face":
    function showFace ()
      { ~ {
        I :"Show the chosen face by setting it as my web view's title and"
          +" content."
          }
        document.title = document.body.innerHTML = showFace.ion.faces.next
      }

, "repeat after <= 1.5 seconds 2014 times":
    function repeat ()
      { ~ {
        I :"Repeat this ion's do actions 2014 times waiting up to 1.5 seconds"
          +" each time. I remove the repeat action on the second repeat to"
          +" avoid doing all actions immediately *and* after a delay."
          }

        ++repeat.times < 2015
          ?   setTimeout (repeat, Math.random * 1500)
          &&  repeat.times == 2 && repeat.ion.do.pop()
          :  (repeat.times  = 1)

        ~ repeat.ion.do
      }
}
;