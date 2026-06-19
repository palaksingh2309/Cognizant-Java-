public class FinancialForecasting {

    public static double predictFutureValue(
            double presentValue,
            double growthRate,
            int years) {

        // Base Case
        if (years == 0) {
            return presentValue;
        }

        // Recursive Case
        return predictFutureValue(
                presentValue,
                growthRate,
                years - 1)
                * (1 + growthRate);
    }

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue =
                predictFutureValue(
                        presentValue,
                        growthRate,
                        years);

        System.out.println("Present Value: ₹" + presentValue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.printf("Predicted Future Value: ₹%.2f",
                futureValue);
    }
}