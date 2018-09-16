package net.ionify.java;

import java.lang.reflect.Method;

/**
 * @author  Mike.Lee@ionify.net
 * @since   2018.09.15-07...2015.10.29-07.00
 *
 * java reference implementation of ion: invoked object notation.
 */
public class ION
  { public static  String $      = ""   ;
    public         Object input  = "ION";
    public         String action        ;

    public
      ION ()
        { super ();
        }

    public String
      toString ()
        { try
            { Method method = this.getClass          ()
                                  .getDeclaredMethod (action, (Class<?>[]) null);
              method.invoke  (this, (Object[]) null)                            ;
            }
          catch (Exception e)
            { e.printStackTrace ();
            }
		  return " " + input;
        }
  }