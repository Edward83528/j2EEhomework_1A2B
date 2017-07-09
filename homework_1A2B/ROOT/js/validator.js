
//檢核輸入的身分證號
function pid_check(obj) {
	var pid = obj.value;
	pid = pid.toUpperCase();
	
	if ( pid.length != 10 ) {
		alert("【身分證字號】長度錯誤，請重新輸入！");
		return false;
	}
	   	   
	var arr = new Array('A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','X','Y','W','Z','I','O');	
	sum= new Number(0);
	for ( var i=0; i<=25; i++ ) {		
		if ( pid.substring(0,1) == arr[i] ){
			sum = parseInt(sum+((10+i)%10)*9+(10+i)/10, 10);
		}
	}
	for ( var i=2; i<=9; i++ ) {
		n = new Number(pid.substring(i-1,i));
	 	sum = parseInt(sum+n*(10-i),10);
	}
	sum = 10-parseInt(sum%10);
	c = new String(sum);
	sum2 = c.substring(c.length-1,c.length);
	sum3 = pid.substring(pid.length-1,pid.length);
	if ( sum2 != sum3 ){
		alert("【身分證字號】編碼錯誤，請重新輸入！");
		return false;
	}
	return true;	
}

/*檢核輸入的EMAIL
 * // ^\w+：@ 之前必須以一個以上的文字&數字開頭，例如 abc
 * // ((-\w+)：@ 之前可以出現 1 個以上的文字、數字或「-」的組合，例如 -abc-
 * // (\.\w+))：@ 之前可以出現 1 個以上的文字、數字或「.」的組合，例如 .abc.
 * // ((-\w+)|(\.\w+))*：以上兩個規則以 or 的關係出現，並且出現 0 次以上 (所以不能 –. 同時出現)
 * // @：中間一定要出現一個 @
 * // [A-Za-z0-9]+：@ 之後出現 1 個以上的大小寫英文及數字的組合
 * // (\.|-)：@ 之後只能出現「.」或是「-」，但這兩個字元不能連續時出現
 * // ((\.|-)[A-Za-z0-9]+)*：@ 之後出現 0 個以上的「.」或是「-」配上大小寫英文及數字的組合
 * // \.[A-Za-z]+$/：@ 之後出現 1 個以上的「.」配上大小寫英文及數字的組合，結尾需為大小寫英文
 */
function email_check(obj) {
	emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
	var email = obj.value;
	if ( !emailRule.test(email) ) {
		return false;
	}
	return true;
}

  
