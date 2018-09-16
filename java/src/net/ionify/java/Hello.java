package net.ionify.java;

/**
 * @author  Mike.Lee@ionify.net
 * @since   2018.09.15-07...2015.10.29-07.00
 *
 * java ion: invoked object notation sample code.
 */
public class Hello extends ION
  { public
      Hello ()
        { super ()     ;
          action = "to";
        }

    public
      Hello (Object input)
        { this ()           ;
          this.input = input;
        }

    public static void
      main (String[] args)
        { Hello
            you       = new Hello ( "You" ),
            theWorld  = new Hello ("World"),
            ion       = new Hello (       );

          $ += "Hello to" + you + ion + theWorld;
        }

    public void
      to ()
        { System.out.println ("Hello " + input + "!");
        }
}