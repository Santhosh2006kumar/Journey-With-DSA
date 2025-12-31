import CodeBlock from './code';
import CodeOutput from './codeoutput'
import { Link } from 'react-router-dom'

function Arrays(){
    return(
        <>
            <div className="container d-flex align-items-center"> 
                <div className="container">
                <Link to="/" className="text-danger h3"><i class="bi bi-box-arrow-left"></i></Link>
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
                <hr class="border-white opacity-100" />
            </div>
            <div className="text-center">
                <h1 className="text-white ">BASICS WITH TRAVERSAL</h1>
            </div>
            <CodeOutput title="FIND THE MAXIMUM AND MINIMUM ELEMENT IN AN ARRAY" tc="O(n)" sc="O(1)" code={`
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

            <CodeOutput title="SEARCH AN ELEMENT IN AN ARRAY" isource="/search_earray.png" tc="O(n)" sc="O(1)" code={`
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

            <CodeOutput title="FIND REPEATING NUMBER IN UNSORTED ARRAY - Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive." tc="O(n)" sc="O(1)" code={`
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

            <div className="text-center">
                <h1 className="text-white">TWO POINTERS</h1>
            </div>

            <CodeOutput title="FIND PAIR WITH GIVEN SUM ( 2 SUM )" tc="O(n²)" sc="O(1)" code={`
 class Solution {
    public int[] twoSum(int[] arr, int target) {
    for(int i = 0 ; i < arr.length; i++){
        for(int j = i+1 ; j <  arr.length; j++){
            if(arr[i] + arr[j] == target)
            {
                return new int[]{i,j};
            }
        }
       }
    return new int[]{};
    }
}               
                `}>
{`
nums = 
[2,7,11,15]
target =
9
[0,1]

nums = 
[3,2,4]
target = 
6
[1,2]
`}
            </CodeOutput>

            <CodeOutput title="REMOVE DUPLICATES FROM SORTED ARRAY" isource="/remove_duplicates_array1.png" tc="O(n)" sc="O(1)" code={`
import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of elements ");
        int n = sc.nextInt();
        int [] a = new int[n];
        int s=0;
        
        for (int i=0;i<n;i++){
            a[i]=sc.nextInt();
        }
        System.out.println("Initial Array:"+Arrays.toString(a));
        
        for(int i=1;i<n;i++){
            if(a[i]!=a[s]){
                s++;
                a[s]=a[i];
            }
        }
        System.out.println("Final Array:");
        for (int x = 0; x <=s; x++) {
            System.out.print(a[x] + " ");
        }
    }
            
}                
                `}>
{`
Enter number of elements: 
7
1 1 2 2 2 3 3 
Initial Array:[1, 1, 2, 2, 2, 3, 3]
Final Array:
1 2 3 
`}
            </CodeOutput>
            <div className='container'>
                <h1 className='text-primary h3'>REMOVE DUPLICATES IN-PLACE FROM A SORTED ARRAY WORKING</h1>
                <ol className='fs-6'>
                    <li className='fw-bold text-warning'>Initialize Pointers:</li>
                        <ul>
                            <li>Initialize a pointer i to 0. This pointer will keep track of the position where the next unique element should be placed</li>
                            <li>Initialize another pointer j to 1. This pointer will iterate through the array to find unique elements</li>
                        </ul>
                    <li className="fw-bold text-warning">Iterate and Compare:</li>
                        <ul>
                            <li>Start a loop from j = 1 up to the end of the array</li>
                            <li>Inside the loop, compare the element at array[j] with the element at array[i]</li>
                        </ul>
                    <li className="fw-bold text-warning">Handle Unique Elements:</li>
                        <ul>
                            <li>If array[j] is not equal to array[i], it means you've found a new unique element</li>
                            <li>Increment i by one (i++)</li>
                            <li>Place the unique element array[j] at the new i position: array[i] = array[j]</li>
                        </ul>
                    <li className="fw-bold text-warning">Return Length:</li>
                        <ul>
                            <li>After the loop completes, the first i + 1 elements of the array will contain the unique elements in sorted order</li>
                            <li>Return i + 1 as the number of unique elements. The elements beyond this length do not matte</li>
                        </ul>
                </ol>
            </div>

            

        </>
    );
}

export default Arrays