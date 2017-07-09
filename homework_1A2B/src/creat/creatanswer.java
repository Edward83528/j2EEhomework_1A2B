package creat;

public class creatanswer {
	public String creatanswer(int a) {
		int number[] = new int[a];
		int temp;
		boolean check;
		for (int i = 0; i < number.length; i++) {
			do {
				check = false;
				temp = (int) (Math.random() * 9) + 1;
				for (int j = 0; j < i; j++) {
					if (temp == number[j]) {
						check = true;
						break;
					}
				}
			} while (check);
			number[i] = temp;
		}
		String s = "";
		for (int v : number) {
			s += v;
		}
		return s;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
