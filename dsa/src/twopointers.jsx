import { Link } from 'react-router-dom'
import CodeOutput from './codeoutput';

function TwoPointers(){
    return(
        <>
            {/* intro */}

            <div className="container d-flex text-center mt-3"> 
                <div className="">
                <Link to="/" className="text-danger h3"><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className="container">
                    <h1 className="text-primary">TWO POINTERS</h1>
                </div>
            </div>
            <div className="container">
                <ul>
                    <li>Two pointers use two variables that traverse a data structure from different directions or at different speeds</li>
                    <li>To reduce time complexity from O(n²) to O(n)</li>
                    <li>Two pointers can move:
                        <ol>
                            <li>Towards each other (opposite ends)</li>
                            <li>In the same directions (one faster , one slower)</li>
                        </ol>
                    </li>
                </ul>

            </div>
            <div className="container">
                <ol>
                    <li className='text-warning'>
                        <p className="text-warning">OPPOSITE DIRECTION POINTERS</p>
                        <i className='text-white'>The concept of "opposite pointers" refers to a common algorithmic technique using two indices (often called pointers in a conceptual sense) to traverse a data structure (like an array or string) from opposite ends towards the center. </i>
                        </li>
                    <li className='text-warning'>
                        <p className="text-warning">SAME DIRECTION POINTERS</p>
                        <p className='text-white' >Used to remove duplicates , merge sorted array or find middle of a LinkedList</p>
                        <p className='text-white' ><b>Fast pointer : </b> explores</p>
                        <p className='text-white' ><b>Slow pointer : </b> keeps tracks</p>
                    </li>
                </ol>
            </div>

            {/* two pointers */}

            


    {/*1.  2 sum */}

            <CodeOutput title="1. FIND PAIR WITH GIVEN SUM ( 2 SUM )" tc="O(n²)" sc="O(1)" code={`
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

    {/* 2. 3 sum */}
            <CodeOutput title="2. 3 SUM" tc="O(n²)" sc="O(1)" isource="/triplet_sum.png" code={`
import java.util.*;
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        ArrayList<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);
        for(int i = 0 ; i< nums.length ;i++){
            if(i>0 && nums[i] == nums[i-1]) continue;
            int j = i+1;
            int k = nums.length-1;
            while(j<k){
                int sum = nums[i]+nums[j]+nums[k];
                if(sum<0){
                    j++;
                }else if(sum>0){
                    k--;
                }else{
                    result.add(Arrays.asList(nums[i], nums[j],nums[k]));
                    
                    j++;
                    k--;
                    while(j<k && nums[j]==nums[j-1]) j++;
                    while(j<k && nums[k]==nums[k+1]) k--;
                }
            }
        }
        return result;
    }
}                
                `}>
{`
nums =
[-1,0,1,2,-1,-4]
[[-1,-1,2],[-1,0,1]]

nums =
[0,1,1]
[]

nums =
[0,0,0]
[[0,0,0]]

TIME COMPLEXITY 

FOR SORTING O(n log n)
THEN ONE FOR LOOP AND WHILE LOOP O(n²)
OVERALL O(n²)
`}
            </CodeOutput>

    {/* 5. find count of triplets */}

        <CodeOutput title="5.FIND COUNT OF TRIPLETS" tc="O(n³)" sc="O(1)" code={`
class Solution {
    public int countGoodTriplets(int[] arr, int a, int b, int c) {
        int count=0;
        for(int i = 0 ; i < arr.length ; i++){
            for(int j = i+1 ; j < arr.length ; j++){
                for(int k = j+1 ; k < arr.length ; k++){
                    int c1 = Math.abs(arr[i]-arr[j]);
                    int c2 = Math.abs(arr[j]-arr[k]);
                    int c3 = Math.abs(arr[i]-arr[k]);
                    if(c1<=a && c2<=b && c3<=c){
                        count++;
                    }
                }
            }
        }
        return count;
    }
}            
            `}>
{`
arr =
[3,0,1,1,9,7]
a =
7
b =
2
c =
3

4
`}                
            </CodeOutput>


    {/* 8. remove duplicates */}

            <CodeOutput title="8. REMOVE DUPLICATES FROM SORTED ARRAY" isource="/remove_duplicates_array1.png" tc="O(n)" sc="O(1)" code={`
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
    {/* 10. length of longest subarray with sum is k */}

            <CodeOutput title="10 . LENGTH OF LONGEST SUBARRAY WITH SUM K" tc="O(n²)" sc="O(1)" code={`
class Solution {
    public int subarraySum(int[] nums, int k) {
        int rescount=0;
        
            
            for(int i = 0 ; i< nums.length ;i++){
                if(nums[i]==k){
                    rescount++;
                }
                int sum = nums[i];
                for(int j = i+1; j< nums.length ; j++){
                    sum+=nums[j];
                    if(sum==k){
                        rescount++;
                    }
                }
            }
        return rescount;
    }
}                
                `}>
{`
nums =
[1,2,3]
k = 3
No of subarrays with sum k is 2

[1,-1,0]
k = 0
No of subarrays with sum k is 3
`}
            </CodeOutput>
        </>
    );
}

export default TwoPointers;