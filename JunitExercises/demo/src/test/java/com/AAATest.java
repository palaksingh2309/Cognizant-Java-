package com;

import org.junit.After;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class AAATest {

    int num1;
    int num2;

    @Before
    public void setUp() {
        System.out.println("Setting up...");
        num1 = 10;
        num2 = 20;
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
    }

    @Test
    public void testAddition() {

        // Arrange
        int expected = 30;

        // Act
        int actual = num1 + num2;

        // Assert
        assertEquals(expected, actual);
    }

    @Test
    public void testMultiplication() {

        // Arrange
        int expected = 200;

        // Act
        int actual = num1 * num2;

        // Assert
        assertEquals(expected, actual);
    }
}