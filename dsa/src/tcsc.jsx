import { Link } from 'react-router-dom'
import CodeOutput from './codeoutput'
import SpaceComp from './spacecom';
 
function TcSc(){
    return(
        <>
            <div className="container text-center d-flex  gap-3 mt-3"> 
                <div className="">
                <Link to="/" className="text-danger h3"><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className="container">
                    <h3 className="text-warning">TIME COMPLEXITY AND SPACE COMPLEXITY</h3>
                </div>
            </div>
           <div className="container mt-3">
                <h1 className='text-success'>TIME COMPLEXITY</h1>
                <p className='fs-6'>Time complexity is the number of operations needed to run an algorithm on large amounts of data. And the number of operations can be considered as time because the computer uses some time for each operation.</p>
                <p>There are three types of Notations</p>
           </div>
           <div className="container text-center">
                <table className='table text-center table-bordered table-hover'>
                        <thead className='table-primary'>
                            <tr className='text-center'>
                                <th className='text-primary'>Big-Oh Notation (O)</th>
                                <th className='text-primary'>Theta Notation (Θ)</th>
                                <th className='text-primary'> Omega Notation (Ω)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Worst - Case | Upper Bound</td>
                                <td>Average - Case | Tight Bound</td>
                                <td>Best - Case | Lower Bound   </td>
                            </tr>
                        </tbody>
                    </table>
           </div>
           <div className="container">
            <p>Our main focus is on the worst case i.e., Big-Oh Notation.</p>
                <h4 className='text-primary'>Big O Notation</h4>
                <div className="container">
                    <img src="/tc.png" className="img-fluid img-thumbnail rounded w-100 w-md-50 my-3" alt="" />
                </div>

    {/* for constant complexity  */}

                <div>
                    <p className="text-info">(i) CONSTANT COMPLEXITY</p>
                    <p className='h1 text-primary'>O(1)</p>
                    <ul>
                        <li className='fw-medium my-1'> Number of operations performed by an algorithm does not depend on the input size (n).</li>
                        <li className='fw-medium my-1'>No matter how big or small n is, the algorithm always takes the same fixed amount of time.</li>
                    </ul>
                    <table className='table text-center table-bordered table-hover'>
                        <thead className='table-primary'>
                            <tr className='text-center'>
                                <th className='text-primary'>INPUT</th>
                                <th className='text-primary'>Number of Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>n = 8</td>
                                <td>output = 5</td>
                            </tr>
                            <tr>
                                <td>n = 9</td>
                                <td>output = 5</td>
                            </tr>
                            <tr>
                                <td>n = 100</td>
                                <td>output = 5</td>
                            </tr>
                            <tr>
                                <td>n = 100000000</td>
                                <td>output = 5</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className='text-primary'>CONSTANT</td>
                            </tr>
                        </tbody>
                    </table>
                    <CodeOutput title="CODE" code={`
import java.util.*;

class Main {

    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Input");
        int n = sc.nextInt();
        for (int i = 1; i <= 5; i++) {
            System.out.println("Hello World !!!");
        }
    }
}                        
                        `}>
{`
Input
8

Hello World !!!
Hello World !!!
Hello World !!!
Hello World !!!
Hello World !!!

Input
1500

Hello World !!!
Hello World !!!
Hello World !!!
Hello World !!!
Hello World !!!
`}
                    </CodeOutput>
                </div>

    {/* for linear complexity */}

                <div>
                    <p className="text-info">(ii) LINEAR COMPLEXITY</p>
                    <p className='h1 text-primary'>O(n)</p>
                    <ul>
                        <li className='fw-medium'> When n increases, the number of operations increases proportionally</li>
                        <li className='fw-medium'>An algorithm runs in O(n) time if the number of operations increases linearly with the size of the input n.</li>
                    </ul>
                    <table className='table text-center table-bordered table-hover'>
                        <thead className='table-primary'>
                            <tr className='text-center'>
                                <th className='text-primary'>INPUT</th>
                                <th className='text-primary'>Number of Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>n = 8</td>
                                <td>output = 8</td>
                            </tr>
                            <tr>
                                <td>n = 9</td>
                                <td>output = 9</td>
                            </tr>
                            <tr>
                                <td>n = 100</td>
                                <td>output = 100</td>
                            </tr>
                            <tr>
                                <td>n = 100000000</td>
                                <td>output = 100000000</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className='text-primary'>SAME</td>
                            </tr>
                        </tbody>
                    </table>
                    <CodeOutput title="CODE" code={`
import java.util.*;

class Main {

    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Input");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            System.out.println("Hello World");
        }
    }
}                        
                        `}>
{`
Input
3

Hello World
Hello World
Hello World

Input
5

Hello World
Hello World
Hello World
Hello World
Hello World
`}
                    </CodeOutput>
                    
                    
                </div>

    {/* for Quadratic complexity */}

                <div>
                    <p className="text-info">(iii) QUADRATIC COMPLEXITY</p>
                    <ul>
                        <li className='h1 text-primary'>O(n²)</li>
                        <li className='fw-medium'>For each input element (n times), the algorithm performs operations on all n elements again, resulting in n × n operations.</li>

                    </ul>
                    <table className='table text-center table-bordered table-hover'>
                        <thead className='table-primary'>
                            <tr className='text-center'>
                                <th className='text-primary'>INPUT</th>
                                <th className='text-primary'>Number of Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>n = 3 (rows)</td>
                                <td>output = 9 (elements)</td>
                            </tr>
                            <tr>
                                <td>n = 5 (rows)</td>
                                <td>output = 25 (elements)</td>
                            </tr>
                            
                            
                            <tr>
                                <td></td>
                                <td className='text-primary'>QUADRATIC   [ n = n² ]</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                    <p className="text-secondary">Example for O(n²)</p>
                    <CodeOutput code={`
for(int i = 0 ; i < n ; i++ ){
    for(int j = 0 ; j <= i ; j++ ){
        //BLOCK OF CODE
    }
}                        
                        `}>
{`
EXECUTION
i = 0 TO n

For i = 0 → j runs n times

For i = 1 → j runs n times

For i = 2 → j runs n times

For i = 3 → j runs n times
        .
        .
        .
For i = n-1 → j runs n times

Since the inner loop runs n times for each value of i:
n + n + n + n + ... (n times)

n x n = n²

`}                            
                        </CodeOutput>
                        <p className="text-primary">FINAL TIME COMPLEXITY IS O(n²)</p>
                </div>

                    <CodeOutput title="CODE"  code={`
public class Main
{
	public static void main(String[] args) {
		int[][] mat = new int[][] {{1, 2, 3},{4, 5, 6},{7,8,9}};
		for(int i = 0 ; i < mat.length ; i++ ){
		    for(int j = 0 ; j < mat[0].length ; j++){
		        System.out.print(mat[i][j] + " ");
		    }
		    System.out.println();
		}

	}
}                     
                        `}>
{`
1 2 3 
4 5 6 
7 8 9
`}
                    </CodeOutput>
                    
                    
                </div>
                
           </div>
           <SpaceComp />
        </>
    );
}

export default TcSc;