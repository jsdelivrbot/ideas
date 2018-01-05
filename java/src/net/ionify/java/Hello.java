package net.ionify.java;

/**
 * @author  Michael Lee
 * @since   2015.10.29-07.00
 *
 * Sample code demonstrating the ion: implicit object notation pattern in Java.
 */
public class Hello extends ION
  { public Hello ()
      { super();
        action = "to";
      }

	public Hello (Object input)
      { this();
		this.input = input;
      }

	public static void main (String[] args)
      { Hello you       = new Hello ("You")
            , theWorld  = new Hello ("World")
            , ion       = new Hello ()
            ;

		go += "Say hello to" + you + ion + theWorld;
      }

	public void to ()
      { System.out.println ("Hello " + input + "!");
      }
}