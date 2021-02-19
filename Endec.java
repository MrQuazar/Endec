import java.util.*;
	class texttocode
	{
	String generator(String x)
	{
	String a=x;
	String b="error";
    if (a.equals("a")) b="5e"; 
    if (a.equals("b")) b="8r";
    if (a.equals("c")) b="3t";
    if (a.equals("d")) b="9b";
    if (a.equals("e")) b="1h";
    if (a.equals("f")) b="6x";
    if (a.equals("g")) b="4n";
    if (a.equals("h")) b="7r";
    if (a.equals("i")) b="2l";
    if (a.equals("j")) b="4d";
    if (a.equals("k")) b="1v";
    if (a.equals("l")) b="9z";
    if (a.equals("m")) b="8f";
    if (a.equals("n")) b="6s";
    if (a.equals("o")) b="3g";
    if (a.equals("p")) b="5k";
    if (a.equals("q")) b="2c";
    if (a.equals("r")) b="7w";
    if (a.equals("s")) b="9u";
    if (a.equals("t")) b="3a";
    if (a.equals("u")) b="5q"; 
    if (a.equals("v")) b="6i";
    if (a.equals("w")) b="2o";
    if (a.equals("x")) b="8e";
    if (a.equals("y")) b="1m";
    if (a.equals("z")) b="7y";
    if (a.equals("A")) b="5V"; 
    if (a.equals("B")) b="1L";
    if (a.equals("C")) b="6P";
    if (a.equals("D")) b="3H";
    if (a.equals("E")) b="4N";
    if (a.equals("F")) b="9Z";
    if (a.equals("G")) b="7F";
    if (a.equals("H")) b="2B";
    if (a.equals("I")) b="8H";
    if (a.equals("J")) b="3P";
    if (a.equals("K")) b="5Z";
    if (a.equals("L")) b="7D";
    if (a.equals("M")) b="9L";
    if (a.equals("N")) b="1A";
    if (a.equals("O")) b="2G";
    if (a.equals("P")) b="4M";
    if (a.equals("Q")) b="6S";
    if (a.equals("R")) b="8Y";
    if (a.equals("S")) b="0C";
    if (a.equals("T")) b="1I";
    if (a.equals("U")) b="9O"; 
    if (a.equals("V")) b="2U";
    if (a.equals("W")) b="8W";
    if (a.equals("X")) b="3Q";
    if (a.equals("Y")) b="7K";
    if (a.equals("Z")) b="4E";
	return b;
	}
	String convert(String p)
	{
	String code= p;
	int i;
	char x;
	String z=new String();
	String c=new String();
	for(i=65;i<=90;i++)
	{
	x=(char)i;
	z=String.valueOf(x);
	c=generator(z);
        code= code.replace(z,c);
	}
	for(i=97;i<=122;i++)
	{
	x=(char)i;
	z=String.valueOf(x);
	c=generator(z);
        code= code.replace(z,c);
	}
	return code;
	}
}

	class codetotext
	{
	String decoder(String x)
	{
	String a=x;
    a=a.replace("4E","Z");
    a=a.replace("7K","Y");
    a=a.replace("3Q","X");
    a=a.replace("8W","W");
    a=a.replace("2U","V");
    a=a.replace("9O","U");
    a=a.replace("1I","T");
    a=a.replace("0C","S");
    a=a.replace("8Y","R");
    a=a.replace("6S","Q");
    a=a.replace("4M","P");
    a=a.replace("2G","O");
    a=a.replace("1A","N");
    a=a.replace("9L","M");
    a=a.replace("7D","L");
    a=a.replace("5Z","K");
    a=a.replace("3P","J");
    a=a.replace("8H","I");
    a=a.replace("2B","H");
    a=a.replace("7F","G");
    a=a.replace("9Z","F");
    a=a.replace("4N","E");
    a=a.replace("3H","D");
    a=a.replace("6P","C");
    a=a.replace("1L","B");
    a=a.replace("5V","A");
    a=a.replace("7y","z");
    a=a.replace("1m","y");
    a=a.replace("8e","x");
    a=a.replace("2o","w");
    a=a.replace("6i","v");
    a=a.replace("5q","u");
    a=a.replace("3a","t");
    a=a.replace("9u","s");
    a=a.replace("7w","r");
    a=a.replace("2c","q");
    a=a.replace("5k","p");
    a=a.replace("3g","o");
    a=a.replace("6s","n");
    a=a.replace("8f","m");
    a=a.replace("9z","l");
    a=a.replace("1v","k");
    a=a.replace("4d","j");
    a=a.replace("2l","i");
    a=a.replace("7r","h");
    a=a.replace("4n","g");
    a=a.replace("6x","f");
    a=a.replace("1h","e");
    a=a.replace("9b","d");
    a=a.replace("3t","c");
    a=a.replace("8r","b");
    a=a.replace("5e","a");
	return a;
	}
}


public class Endec {    
    public static void main(String args[]) {     
            
        String code="Empty";  
        int choice=0;
        Scanner in=new Scanner(System.in);
        do
        {
        System.out.println("\n\nSelect choice number\n1.Encode\n2.Decode\n3.Exit");
        choice=in.nextInt();
        if (choice!=1 && choice!=2 && choice!=3) System.out.println("Please enter correct input.");
        if(choice==2){
        System.out.println("Enter Endec code");
        Scanner ab=new Scanner(System.in);
        code=ab.nextLine();
	String y=new String();
	codetotext op= new codetotext();
	y=op.decoder(code);
	System.out.println("The Endec code translated to\n"+y);
	}
    if(choice==1){
        System.out.println("Enter text to Endec encode.");
        Scanner cd=new Scanner(System.in);
        code=cd.nextLine();
	String y=new String();
	texttocode op= new texttocode();
	y=op.convert(code);
	System.out.println("Endec code is \n"+y);
	}
    }while(choice<=2 && choice>0);
    }    
}     