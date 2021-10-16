function palindrome()
		{
		var kelime= document.getElementById("giris").value;
		var kelimeTersi = "";
		for (i = kelime.length-1; i >= 0; i--)
		{
		kelimeTersi = kelimeTersi + kelime[i]
		}
		if (kelime == kelimeTersi)
		document.getElementById("snc"). value = kelimeTersi+ " Palindrome ";
		else
		document.getElementById("snc"). value = kelimeTersi + " Polindrome degil";
}
