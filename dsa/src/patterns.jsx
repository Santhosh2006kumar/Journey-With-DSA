import { Link } from 'react-router-dom'
import CodeOutput from './codeoutput'

function Patterns(){
    return(
        <>
            <div className="container d-flex text-center mt-3"> 
                <div className="">
                <Link to="/" className="text-danger h3"><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className="container">
                    <h1 className="text-primary">PATTERNS</h1>
                </div>
            </div>

{/* pattern 1 */}

           
            <div className="container">
                
                <CodeOutput title="PATTERN 1" code={`
import java.util.*;

public class Main
{
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j < n ; j++){
            System.out.print("* ");
        }
        System.out.println();
    }
}
}                        
                    `}>
{`
4
* * * * 
* * * * 
* * * * 
* * * * 
`}
                    </CodeOutput>
            </div>

{/* pattern 2 */}

            <div className="container">
                <CodeOutput title="PATTERN 2" code={`
import java.util.*;
public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for(int i = 1 ; i <=n ; i++){
		    for(int j = 1 ; j <=i ; j++){
		        System.out.print("* ");
		    }
		    System.out.println();
		}
	}
}                
                    `}>
{`
5
* 
* * 
* * * 
* * * * 
* * * * * 
`}                        
                    </CodeOutput>
            </div>

{/* pattern 3 */}

            <div className="container">
                <CodeOutput title="PATTERN 3" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for(int i = 1 ; i <=n ; i++){
		    for(int j = 1 ; j <=i ; j++){
		        System.out.print(j+" ");
		    }
		    System.out.println();
		}
	}
}               
                    `}>
{`
5
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
`}                        
                    </CodeOutput>
            </div>

{/* pattern 4 */}

            <div className="container">
                <CodeOutput title="PATTERN 4" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for(int i = 1 ; i <=n ; i++){
		    for(int j = 1 ; j <=i ; j++){
		        System.out.print(i+" ");
		    }
		    System.out.println();
		}
	}
}             
                    `}>
{`
5
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 
`}                        
                    </CodeOutput>
            </div>            

{/* pattern 5 */}

            <div className="container">
                <CodeOutput title="PATTERN 5" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for(int i = n ; i>0 ; i--){
		    for(int j = 0 ; j <i ; j++){
		        System.out.print("* ");
		    }
		    System.out.println();
		}
	}
}                    
                    `}>
{`
5
* * * * * 
* * * * 
* * * 
* * 
* 
`}                        
                    </CodeOutput>
            </div> 

{/* pattern 6 */}

            <div className="container">
                <CodeOutput title="PATTERN 6" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for(int i = n ; i > 0 ; i--){
		    for(int j = 1 ; j <= i ; j++){
		        System.out.print(j+" ");
		    }
		    System.out.println();
		}
	}
}                   
                    `}>
{`
5
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1  
`}                        
                    </CodeOutput>
            </div>

{/* pattern 7 */}

            <div className="container">
                <CodeOutput title="PATTERN 7" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for(int i = 0 ; i < n ; i++){
		    for(int k =n-i;k>0;k--){
		        System.out.print(" ");
		    }
		    for(int j = 0 ; j <=i ; j++){
		        System.out.print("* ");
		    }
		    System.out.println();
		}
	}
}                  
                    `}>
{`
5
     * 
    * * 
   * * * 
  * * * * 
 * * * * *  
`}                        
                    </CodeOutput>
            </div> 

 {/* pattern 8 */}

            <div className="container">
                <CodeOutput title="PATTERN 8" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
	    for(int i = 1 ; i<=n ; i++){
	        for(int j = n-i;j>0;j--){
	            System.out.print(" ");
	        }
	        for(int k = 0 ; k<(2*(i-1)+1);k++){
	            System.out.print("*");
	        }
	        System.out.println();
	    }
		
	}
}                 
                    `}>
{`
5
    *
   ***
  *****
 *******
*********
`}                        
                    </CodeOutput>
            </div>            

 {/* pattern 9 */}

            <div className="container">
                <CodeOutput title="PATTERN 9" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
	    for(int i = n ; i>0 ; i--){
	        for(int j = n-i;j>0;j--){
	            System.out.print(" ");
	        }
	        for(int k = 0 ; k<(2*(i-1)+1);k++){
	            System.out.print("*");
	        }
	        System.out.println();
	    }
		
	}
}                 
                    `}>
{`
5
*********
 *******
  *****
   ***
    *
`}                        
                    </CodeOutput>
            </div>  


        </>

    );
}

export default Patterns;