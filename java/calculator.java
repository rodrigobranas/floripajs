public class Calculator {

	public static void main(String[] args) throws Exception {
		Calculator sum = new Calculator();
		int a = sum.sum(2, 2);
		int b = sum.sum(4, 4);
		int result = sum.sum(a, b);
		System.out.println(result);
	}
	
	public int sum(int a,int b) throws Exception {
		int result = 0;
		Thread.sleep(1000);
		result = a + b;
		return result;
	}
}
