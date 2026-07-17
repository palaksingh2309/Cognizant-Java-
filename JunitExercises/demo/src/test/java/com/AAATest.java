package com;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Unit tests verifying basic mathematical operations using Arrange-Act-Assert (AAA) pattern.
 */
public class AAATest {

    /** Constant representing the initial value for num1. */
    private static final int INITIAL_NUM1 = 10;
    /** Constant representing the initial value for num2. */
    private static final int INITIAL_NUM2 = 20;
    /** Constant representing the expected sum of num1 and num2. */
    private static final int EXPECTED_SUM = 30;
    /** Constant representing the expected product of num1 and num2. */
    private static final int EXPECTED_PRODUCT = 200;

    /** First operand for mathematical operations. */
    private int num1;
    /** Second operand for mathematical operations. */
    private int num2;

    /**
     * Initializes operands before each test run.
     */
    @Before
    public void setUp() {
        System.out.println("Setting up...");
        num1 = INITIAL_NUM1;
        num2 = INITIAL_NUM2;
    }

    /**
     * Performs cleanup operations after each test run.
     */
    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
    }

    /**
     * Verifies that the addition of num1 and num2 yields the expected sum.
     */
    @Test
    public void testAddition() {

        // Arrange
        int expected = EXPECTED_SUM;

        // Act
        int actual = num1 + num2;

        // Assert
        assertEquals(expected, actual);
    }

    /**
     * Verifies that the multiplication of num1 and num2 yields the expected product.
     */
    @Test
    public void testMultiplication() {

        // Arrange
        int expected = EXPECTED_PRODUCT;

        // Act
        int actual = num1 * num2;

        // Assert
        assertEquals(expected, actual);
    }
}
