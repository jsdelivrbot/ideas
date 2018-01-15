;
~
{ re:
    { id: "group.by@ideas.api.ionify.net"
    , by: "mike.lee@ionify"
    , at: "2018.01.15-08...2018.01.14-08"
    , in: "san-jose.california.usa.earth"
    , is: "An exploration of a simplified collection processing api inspired by"
        + ": https://advancedweb.hu/2016/05/17/more-readable-js-without-vars/"
    }
}

var penguins
      = [ {male:false, age:23, name:'aiko'}
        , {male: true, age:32, name:'boku'}
        ]
var grouped
      = {}

for (let penguin of penguins)
  { if (!penguin.male) continue
  ; let age = penguin.age
  ! grouped [age] && (grouped [age] = [])
  ; grouped [age].push (penguin.name)
  }

~ / group male penguins by age /

+ {   for: penguins
  , group:  'male'
  ,    by:  'age'
  ,    in: grouped
  }

~ { on: 'for, group, by, in'
  , on: /for group by in/
  , on: 'for group by in'
  , do: function groupBy (ion)
        { var group = ion.for
            ,  what = ion.group
            ,    by = ion.by
            , where = ion.in
            , match

          for (var thing of group)
            { if (!thing [what]) continue
              match = thing [by]
            ! where [match] && (where [match] = [])
              where [match].push (thing)
            }
        }
  }

~
{      for: 'penguins'
,    group: 'male'
,       by: 'age'
,       in: 'males'
,    males: []
, penguins: [ {name:'aiko', age:23, female:true}
            , {name:'buko', age:32,   male:true}
            ]
}

grouped
;