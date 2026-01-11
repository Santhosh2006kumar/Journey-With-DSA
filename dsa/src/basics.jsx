import { Link } from 'react-router-dom'
import CodeOutput from './codeoutput'

function Basics(){
    return(
        <>

    {/* intro */}
            <div className="container d-flex align-items-center"> 
                <div className="container">
                <Link to="/" className="text-danger h3"><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className="container">
                    <h1 className="text-warning">BASICS</h1>
                </div>
            </div>

        {/*1.  odd or even */}

            <CodeOutput title="1. FIND ODD OR EVEN" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
	    System.out.println("Enter number ");
    	Scanner sc = new Scanner(System.in);
    	int n = sc.nextInt();
    	if((n & 1)==0){
    	    System.out.println("Even");
    	}else{
    	    System.out.println("Odd");
    	}
	}
}                
                `}>
{`
Enter number  
5
Odd
Enter number  
6
Even

`}
            </CodeOutput>

        {/*2.  summing till single digit */}

            <CodeOutput title="2. Given an integer num, repeatedly add all its digits until the result has only one digit, and return it. (FIND ALL DIGIT IN A NUMBER)" code={`
 class Solution {
    
    public int addDigits(int n) {
        while(n>9){
            int res = n%10;
            int q = n/10;
            n = res +q;
        }
        return n;
    }
}               
                `}>
{`
num = 
38
2       
`}
            </CodeOutput>

        {/*3.  count digits */}

            <CodeOutput title="3. COUNT DIGITS IN A NUMBER" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Input");
		int n = sc.nextInt();
		int count =0;
		if(n==0){
		    count=1;
		    System.out.println("Count digits in a number : " + count);
		    return;
		}
		while(Math.abs(n)>0){
		    int r = n%10;
		    count++;
		    n = n/10;
		}
		System.out.println("Count digits in a number : " + count);
	}
}                
                `}>
{`
Enter Input
1452
Count digits in a number : 4

`}
            </CodeOutput>

        {/* 4. reverse */}


            <CodeOutput title="4. REVERSE A NUMBER" code={`
 class Solution {
    public int reverse(int x) {
        int nx=0;
        while(x!=0){
            int r = x%10;
            if(nx > Integer.MAX_VALUE / 10 || (nx == Integer.MAX_VALUE / 10 && r>7)){
                return 0;
            }else if(nx <Integer.MIN_VALUE / 10 || (nx == Integer.MIN_VALUE/10 && r<-8)){
                return 0;
            }
            nx = (nx * 10) + r;
            x = x/10;
        }
        return nx;
    }
}               
                `}>
{`
x = 123
321

x = -123
-321

x = 120
21
`}
            </CodeOutput>

        {/* method 2 reverse */}

            <CodeOutput title="REVERSE A NUMBER METHOD 2" code={`
 class Solution {
    public int reverse(int x) {
        int res = 0;
        boolean isNegative = x< 0;
        String strX = String.valueOf(Math.abs(x));
        StringBuilder sb = new StringBuilder(strX).reverse();
        try{
            res = Integer.parseInt(sb.toString());
        }catch (NumberFormatException e){
            return 0;
        }
        return isNegative ? -res : res;
        }
    }              
                `}>
{`
x = 123
321

x = -123
-321

x = 120
21
`}
            </CodeOutput>
        </>
    );
}

export default Basics;