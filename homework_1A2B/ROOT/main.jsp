<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="creat.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<%
	String answer = "";
	//創造1A2B的解答
	creatanswer c = new creatanswer();
	answer = c.creatanswer(3);
%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="css/bootstrap.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<title>1A2B小遊戲</title>
<style>
</style>
<script type="text/javascript">
     var s;
	function guess() {
	$.ajax({
		url : "checknumber.jsp?answer=<%=answer%>",
			type : "POST",
			data : {
				number : document.getElementById("number").value,

			},
			success : function(msg) {
				answerdata(msg);
			}
		});
	}
	function answerdata(msg) {
		alert(msg);
		s = "" + s + msg;
		document.getElementById("my_comment").value = s;
		if (msg == "恭喜老爺 賀喜夫人") {
			document.getElementById("my_comment").readOnly = true;
			document.getElementById("try").style.display = "none";
		}
	}
	function showDiv() {
		document.getElementById("answer1").style.display = "inline";
	}
</script>

</head>
<body>
	<br>
	<br>
	<div class="form-group has-error">
		<label for="exampleInputEmail1 inputError">猜數字欄位:</label> <input
			type="text" class="form-control" id="number" name="number"
			placeholder="請輸入數字">
	</div>

	<button type="button" class="btn btn-default btn-primary" id="try"
		onclick="javascript:guess()">猜</button>
	<button type="button" class="btn btn-default btn-primary"
		onclick="showDiv()">放棄</button>
	<br>
	<br>
	<textarea class="title" name="my_comment" id="my_comment"
		style="width: 100%" rows="5"></textarea>

	<div class="form-group has-error" id="answer1" name="answer1"
		style="display: none">
		<span>解答:<%=answer%></span>
	</div>



</body>
</html>