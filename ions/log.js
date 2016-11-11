;

+
{ re:
    { id: "log@test.ionify.net"
    , is: "A simple ion used for testing ionify"
    , by: {"Michael Lee": ["iskitz.net", "@iskitz"]}
    , at: "2016.05.27-07.00"
    , in: "san-jose.california.usa.earth"
    },

  host: this,

  valueOf:
    function activate ()
      {  var re   = this.re
           , host = this.host
           , msg  = re.id + ": " + re.is
           ;
         host.alert   && alert        (msg);
         host.console && console.log  (msg);
      }
} //+log@test.ionify.net

;