package EcommerceSearchExample;

public class EcommerceSearch {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        int searchId = 104;

        System.out.println("===== Linear Search =====");

        Product linearResult =
                LinearSearch.search(products, searchId);

        if (linearResult != null) {
            linearResult.display();
        } else {
            System.out.println("Product not found.");
        }

        System.out.println("\n===== Binary Search =====");

        Product binaryResult =
                BinarySearch.search(products, searchId);

        if (binaryResult != null) {
            binaryResult.display();
        } else {
            System.out.println("Product not found.");
        }
    }
}