import CodeBlock from './code';
import CodeOutput from './codeoutput'
import { Link } from 'react-router-dom'

function Arrays(){
    return(
        <>
            <div className="container d-flex align-items-center"> 
                <div className="container">
                <Link to="/" className="text-danger h3"><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className="container">
                    <h1 className="text-primary">ARRAYS</h1>
                </div>
            </div>
            <div className="container">
                <p>In Data Structures and Algorithms (DSA), an array is one of the most basic and important data structures used to store a collection of elements of the same data type in contiguous memory locations, allowing fast and efficient access to elements using an index, which makes arrays suitable for handling large amounts of structured data and forms the foundation for understanding more complex data structures.</p>
                
            </div>
            
            <div className="container">
                <div className="text-center">
                    <img src="/array.png" alt="" />
                </div>
                <p>The array address formula is used to calculate the memory address of any element in an array.</p>
                <div className='p-2 border border-white rounded mb-2'>
                    <p style={{color:"#FF0080"}}>FORMULA FOR ADDRESS</p>
                    <p style={{color:"#00FF80"}} className=" fs-4">initial address + (index * size)</p>
                </div>
                <div className="text-center">
                    <img src="/aaddress1.png" alt="" />
                </div>
                <div>
                    <h3 className="text-primary">Array Creation</h3>
                    <p style={{color:"violet"}}>METHOD 1</p>
                    
                        <CodeBlock>{`
int[] arr = new int[size];
arr = new int[]{10, 20, 30, 40, 50};

`}</CodeBlock>
                    <p className="text-info">Behind the Scenes</p>
                    <ul>
                        <li className="m-2">@line1: allocates memory for an array of given <span className="bg-primary text-white rounded px-1">size</span></li>
                        <li className="m-2">@line2: creates a new array again and assigns it to  <span className="bg-danger text-white rounded px-1">arr</span></li>
                        <li className="m-2">The first array becomes eligible for garbage collection</li>
                    </ul>
            
                </div>
                <div>
                    <p style={{color:"violet"}}>METHOD 2</p>
                        <CodeBlock>{`
int[] arr = new int[] {10, 20, 30, 40, 50};                        
`}</CodeBlock>
                    <p className="text-info">Behind the Scenes</p>
                    <ul>
                        <li className="m-2">Array is created and initialized in one step</li>
                        <li className="m-2">Size is automatically determined (5)</li>
                        <li className="m-2">Clean, readable, efficient</li>
                    </ul>
                </div>
                <div>
                    <p style={{color:"violet"}}>METHOD 3</p>
                    <CodeBlock>
{`
int[] arr ;
arr = new int[size];
`}
                    </CodeBlock>
                    <p className="text-info">Behind the Scenes</p>
                    <ul>
                        <li className="m-2">Declaration and memory allocation are separate</li>
                        <li className="m-2">Creates array with default values (0)</li>
                        <li className="m-2">Values are usually filled later using loop or input</li>
                    </ul>
                </div>
                
            </div>

    {/* Array insertion */}


            <CodeOutput title="Array Insertion" code={`
import java.util.*;
public class Main
{
	public static void main(String[] args) {
	    Scanner sc = new Scanner(System.in);
	    int n = sc.nextInt();
	    int[] arr = new int[n];	
	    for(int i=0;i<n;i++){
	        arr[i] = sc.nextInt();
	    }
	    System.out.print(Arrays.toString(arr)); 
    
	}
}               
                `}>
{`
5
1 2 3 4 5
[1, 2, 3, 4, 5]

`} 
            </CodeOutput>

            <div className="container">
                <div>
                    <h3 className="text-primary"> Displaying elements of an Array</h3>
                </div>
                <p style={{color:"violet"}}>METHOD 1</p>
                <CodeBlock>
{`
for(int i=0;i<arr.length;i++){
	System.out.println(arr[i]);
} 
`}
                </CodeBlock>
                <p style={{color:"violet"}}>METHOD 2</p>
                <CodeBlock>
{`
System.out.print(Arrays.toString(arr));
`}
                </CodeBlock>
            </div>

            <CodeOutput title="Inserting New Element into an array" isource="/aeinsert1.png" code={`
import java.util.*;
public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter number of elements : ");
		int n = sc.nextInt();
		System.out.println("You can insert only elements of size n-2");
		int[] arr = new int[n];
		for(int i =0 ; i < n-2 ; i++){
		    arr[i] = sc.nextInt();
		}
		System.out.println("The array is :");
		System.out.println(Arrays.toString(arr));
		System.out.println("INSERTING NEW ELEMENT :");
		int element = sc.nextInt();
		System.out.println("Enter the position to insert the element");
		int pos = sc.nextInt();
		for(int j = n-3; j>=pos ; j--){
		    arr[j+1]=arr[j];
		}
		arr[pos] = element;
		System.out.println(Arrays.toString(arr));
	}
}                
                `}>
{`
Enter number of elements :
8
You can insert only elements of size n-2
10 20 30 40 50
The array is :
[10 , 20 , 30 , 40 , 50 , 0 , 0]
INSERTING NEW ELEMENT :
25
Enter the position to insert the element
2
[10 , 20 , 25 , 30 , 40 , 50 , 0 ]

`}           
            </CodeOutput>

    {/* array deletion */}

            <CodeOutput title="Deleting Element from an array" isource="/aedelete1.png" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter number of elements : ");
		int n = sc.nextInt();
		System.out.println("You can insert only elements of size n-2");
		int[] arr = new int[n];
		for(int i =0 ; i < n-2 ; i++){
		    arr[i] = sc.nextInt();
		}
		System.out.println("The array is :");
		System.out.println(Arrays.toString(arr));
		System.out.println("DELETE ELEMENT :");
		System.out.println("Enter the position to insert the element");
		int pos = sc.nextInt();
		for(int j = pos; j<n-2 ; j++){
		    arr[j]=arr[j+1];
		}
		System.out.println(Arrays.toString(arr));
	}
}
                
                `}>
{`
Enter number of elements : 
8
You can insert only elements of size n-2
10 20 25 30 40 50
The array is :
[10, 20, 25, 30, 40, 50, 0, 0]
DELETE ELEMENT :
Enter the position to insert the element
2
[10, 20, 30, 40, 50, 0, 0, 0]

`}
            </CodeOutput>

    {/* Maximum element in array */}


            <CodeOutput title="MAXIMUM ELEMENT IN AN ARRAY" code={`
import java.util.*;
public class Main
{
	public static void main(String[] args) {
		int[] arr = new int[] {10,20,30,30,40,50,30};
		System.out.println("Array is : " + Arrays.toString(arr));
		int max_el = arr[0];
		for(int i = 1 ; i < arr.length ; i++){
		    if(arr[i]>max_el){
		        max_el = arr[i];
		    }
		}
		System.out.println("The Maximum element in an array is " + max_el);
	}
}                
                `}>
{`
Array is : [10, 20, 30, 30, 40, 50, 30]
The Maximum element in an array is 50

`}
            </CodeOutput>
            
    {/* Second max element */}

            <CodeOutput title="SECOND MAXIMUM ELEMENT IN AN ARRAY" code={`
import java.util.*;
public class Main
{
	public static void main(String[] args) {
		int[] arr = new int[] {10,40,40,30,20};
		System.out.println("Array is : " + Arrays.toString(arr));
		int max_el = arr[0];
		int max_2el =  0;
		for(int i = 1 ; i < arr.length ; i++){
		    if(arr[i]>max_el){
		        max_2el = max_el;
		        max_el = arr[i];
		    }else if(arr[i]>max_2el && arr[i]!=max_el){
		        max_2el = arr[i];
		    }
		}
		System.out.println("The Maximum element in an array is " + max_el);
		System.out.println("The 2nd  Maximum element in an array is " + max_2el);
	}
}
               
                `}>
{`
Array is : [10, 40, 40, 30, 20]
The Maximum element in an array is 40
The 2nd  Maximum element in an array is 30

`}
            </CodeOutput>


            <div className="container">
                <hr className="border-white opacity-100" />
            </div>

{/* basics with traversal */}


            <div className="text-center">
                <h1 className="text-white ">BASICS WITH TRAVERSAL</h1>
            </div>

    {/* 1. find max and min in array */}

            <CodeOutput title="1. FIND THE MAXIMUM AND MINIMUM ELEMENT IN AN ARRAY" tc="O(n)" sc="O(1)" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		int[] arr = new int[] {10 , 20 , 15 , 50 , 5};
		int max=arr[0];
		int min = arr[0];
		for(int i = 1 ; i < arr.length ; i++){
		    if(arr[i]>max){
		        max = arr[i];
		    }else if(arr[i]<min){
		        min=arr[i];
		    }
		}
		System.out.println("Array " + Arrays.toString(arr));
		System.out.println("Maximum Element " + max);
		System.out.println("Minimum Element " + min);
	}
}                
                `}>
{`
Array [10, 20, 15, 50, 5]
Maximum Element 50
Minimum Element 5
`}
            </CodeOutput>

    {/* 3. search */}

            <CodeOutput title="3. SEARCH AN ELEMENT IN AN ARRAY" isource="/search_earray.png" tc="O(n)" sc="O(1)" code={`
            import java.util.*;
            
            public class Main
            {
            public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int arr[] = new int[] {10,20,30,40,50};
            System.out.println(Arrays.toString(arr));
            System.out.println("Enter element to be searched");
            int ele = sc.nextInt();
            for(int i = 0 ; i < arr.length ; i++){
            if(ele == arr[i]){
                System.out.println("Element " + ele + " Found at index " + i);
                return;
            }
            
            }
            System.out.println("Element " + ele + " Not found" );
            }
            }            
            `}>
            {`
            [10, 20, 30, 40, 50]
            Enter element to be searched
            20 
            Element 20 Found at index 1
            
            [10, 20, 30, 40, 50]
            Enter element to be searched
            100
            Element 100 Not found
            `}
            </CodeOutput>

    
    {/*5.  repeating number */}


            <CodeOutput title="5. FIND REPEATING NUMBER IN UNSORTED ARRAY - Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive." tc="O(n)" sc="O(1)" code={`
class Solution {
    public int findDuplicate(int[] nums) {
        for(int i : nums){
            i = Math.abs(i);
            if(nums[i-1]<0)
                return i;
            nums[i-1] = -nums[i-1];
        }
        return -1;
    }
}                
                `}>
{`
nums =
[1,3,4,2,2]
2

nums =
[3,1,3,4,2]
3

nums =
[3,3,3,3,3]
3

nums =
[2,5,9,6,9,3,8,9,7,1]
9
`}
            </CodeOutput>

            <div className="container">
                <hr className="border-white opacity-100" />
            </div>


            

        </>
    );
}

export default Arrays