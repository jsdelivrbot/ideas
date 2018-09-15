package net.ionify.java;

import java.lang.reflect.Method;

/**
 * @author  Mike.Lee@iskitz
 * @since   2018.05.30-07...2015.10.29-07.00
 *
 * Simple implementation of the ion: implicit object notation pattern in Java.
 */
public class ION
  { public static  String go     = ""   ;
    public         Object input  = "ION";
    public         String action        ;

    public
      ION ()
        { super ();
        }

    public String
      toString ()
        { try
            { Method method = this.getClass()
                                  .getDeclaredMethod (action, (Class<?>[]) null);
              method.invoke  (this, (Object[]) null)                            ;
            }
          catch (Exception e)
            { e.printStackTrace ();
            }
		return " " + input;
        }
  }