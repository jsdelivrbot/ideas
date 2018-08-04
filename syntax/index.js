;
~
[ ` An exploration of aesop programming

  : Check each sentence for known patterns from
    most to least complex

  . Each pattern returns true if fully matched
  , false if partially or not matched at all

  . Partial matches request additional context
    such as preceeding and or following
    sentences
  .
  `
, ` Patterns are defined via the word "on"
    followed by a list of terms, followed by a
    sentence, or the word "do" followed by a
    list of terms
    
  . A list can be 1 or more space-separated
    terms
  .
  `
]
;

;
~
{ re:
    [
    ]
    
, do:
    [ "choose a random face from the faces list"
    , "show that face"
    , "repeat 2014 times waiting <= 1.5 seconds each time"
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
    , "+['^ . ^'];"
    , "+{'^':'^'};"
    , "+['๑˃̵ᴗ˂̵'];"
    , "+[' ͡° ʖ ͡°'];"
    , "+[' ͡° ͜ʖ ͡°'];"
    , "+/d(~ . ~)b/;"
    , "+/d(• . •)b/;"
    , "+/d(- . -)b/;"
    , '+["]\'• ؈ •\'["];'
    , "+['~ ؈ ~'];"
    ]

, "choose a random face from the faces list"
:   " choose a face from the faces list by first generating a random"
+   " number between 0 and the list's length. Next, use that number"
+   " to select the face at the matching position within the list."
+   " Lastly, save the chosen face as a property on the faces list to"
+   " simplify accessing it from other actions."

, "show that face"
:   " Show the chosen face by setting it as my web view's title and"
+   " content."

, "repeat 2014 times waiting <= 1.5 seconds each time"
:   " Repeat this ion's do actions 2014 times waiting up to 1.5 seconds"
+   " each time. Remove the repeat action on the second repeat to"
+   " avoid doing all actions immediately *and* after a delay."
}
;