import { Link } from 'react-router-dom'
import CodeOutput from './codeoutput';

function Sort(){

    return(
        <>
        {/* intro */}

            <div className="container d-flex text-center mt-3"> 
                <div className="">
                <Link to="/" className="text-danger h3"><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className="container">
                    <h1 className="text-primary">SORTING</h1>
                </div>
            </div>
        
        {/* Bubble sort */}
            <div className='container'>
                <h3 className="text-info">1. BUBBLE SORT</h3>
                <p>Bubble sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order . This algorithm is not efficient for large data sets as its average and worst-case time complexity are quite high.</p>
                <p className="text-warning">Algo:-</p>
                <dl>
                    <dt className='text-warning'>STEP 1</dt>
                    <dd>Sorts the array using multiple passes. After the first pass, the maximum goes to end (its correct position). Same way, after second pass, the second largest goes to second last position and so on.</dd>
                    <dt className='text-warning'>STEP 2</dt>
                    <dd>In every pass, process only those that have already not moved to correct position. After k passes, the largest k must have been moved to the last k positions.</dd>
                    <dt className='text-warning'>STEP 3</dt>
                    <dd>In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element. If we keep doing this, we get the largest (among the remaining elements) at its correct position.</dd>
                </dl>
                <CodeOutput title="bubble sort code" isource="./bubble_sort.png" tc="O(n²)" sc="O(1)" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		int arr[] = new int[] {40 , 30 , 20 , 50};
		System.out.println("Array before sorting");
		System.out.println(Arrays.toString(arr));
		for(int i = 0 ; i < arr.length -1 ; i++){
		    for(int j = 0 ; j < arr.length-1-i ; j++){
		        if(arr[j+1] < arr[j]){
		            int temp = arr[j];
		            arr[j] = arr[j+1];
		            arr[j+1] = temp;
		        }
		    }
		}
		System.out.println("Array After Sorting");
		System.out.println(Arrays.toString(arr));
	}
}                    
                    `}>
{`
Array before sorting
[40, 30, 20, 50]
Array After Sorting
[20, 30, 40, 50]    
`}                        
                    </CodeOutput>
            </div>

        {/* selection sort */}
        <div className="container">
            <CodeOutput title="Selection sort code" isource="/selectionsort.png" tc="O(n²)" sc="O(1)" code={`
import java.util.*;

public class Main
{
	public static void main(String[] args) {
		System.out.println("SELECTION SORT");
		int arr[] = new int[] {13 , 46 , 24 , 52 , 20 , 9};
		System.out.println(Arrays.toString(arr));
		for(int i = 0 ; i<arr.length;i++){
		    int min = i;
		    for(int k = i;k<arr.length;k++){
		        if(arr[k]<arr[min]){
		            min =k;
		        }
		    }
		    int temp = arr[i];
		    arr[i]=arr[min];
		    arr[min]=temp;
		}
		System.out.println("Array after sorting");
		System.out.println(Arrays.toString(arr));
	}
}                
                `}>{`
SELECTION SORT
[13, 46, 24, 52, 20, 9]
Array after sorting
[9, 13, 20, 24, 46, 52]                
                `}</CodeOutput>
        </div>

        </>
    );
}

export default Sort;