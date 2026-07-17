package com.example;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

/**
 * Unit tests verifying various Junit assertion types.
 */
public class AssertionsTest {

    /** Constant representation of the value 2. */
    private static final int TWO = 2;
    /** Constant representation of the value 3. */
    private static final int THREE = 3;
    /** Constant representation of the value 5. */
    private static final int FIVE = 5;

    /**
     * Runs assertions to verify Junit equals, true, false, null, and not null assertions.
     */
    @Test
    public void testAssertions() {

        // Assert Equals
        assertEquals(FIVE, TWO + THREE);

        // Assert True
        assertTrue(FIVE > THREE);

        // Assert False
        assertFalse(FIVE < THREE);

        // Assert Null
        assertNull(null);

        // Assert Not Null
        assertNotNull(new Object());
    }
}
