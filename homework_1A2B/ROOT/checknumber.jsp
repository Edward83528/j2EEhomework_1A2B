<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String answermessage = "";
		String number = (String) request.getParameter("number");
		String answer = (String) request.getParameter("answer");
		int A, B;
		A = B = 0;
		if (number.matches("^[0-9]{3}$")) {

			for (int i = 0; i < number.length(); i++) {

				if (answer.charAt(i) == number.charAt(i)) {

					A++;
				} else if (answer.indexOf(number.charAt(i)) != -1) {
					B++;
				}
			}

		}
		if (number.matches("^[0-9]{3}$")) {
			if (number.equals(answer)) {
				answermessage = "恭喜老爺 賀喜夫人";
			} else {
				answermessage = A + "A" + B + "B";
			}
		} else {
			answermessage = "請輸入三位數的數字";
		}

		response.setContentType("text/plain; charset=UTF-8");
		response.getWriter().print(answermessage);
		response.getWriter().flush();
		response.getWriter().close();
	%>
</body>
</html>