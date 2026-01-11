import CodeOutput from './codeoutput'

function SpaceComp(){
    return(

        <>
            <div className="container">
                <h1 className="text-success">SPACE COMPLEXITY</h1>
                <p>Space Complexity means how much extra memory an algorithm uses as the input size grows.</p>
                <p className="text-warning">(Extra memory = memory other than input data)</p>
            </div>

    {/* constant complexity */}


            <div className="container">
                <p className="text-info">(i) CONSTANT SPACE</p>
                <p className='h1 text-primary'>O(1)</p>
                <CodeOutput code={`
int a = 10;
int b = 20;
int sum = a + b;                    
                    `}></CodeOutput>
                <ul>
                    <li>Uses a fixed number of variables</li>
                    <li>Memory does not depend on input size</li>
                </ul>
                <p className="text-primary">Space Complexity = O(1)</p>
                    
            </div>

    {/* linear complexity */}

            <div className="container">
                <p className="text-info">(ii) LINEAR SPACE</p>
                <p className='h1 text-primary'>O(n)</p>
                <CodeOutput code={`
int[] arr = new int[n];                   
                    `}></CodeOutput>
                <ul>
                    <li>Memory grows as n grows</li>
                    <li>Stores n elements</li>
                </ul>
                <p className="text-primary">Space Complexity = O(n)</p>

                <CodeOutput title="Example for linear space" code={`
class Demo {
    static void linearSpace(int n) {
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = i;
        }


        for(int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static void main(String[] args) {
        linearSpace(5);
    }
}                  
                    `}>
{`
0 1 2 3 4
`}                        
                    </CodeOutput>

            </div>

    {/* quadratic complexity */}

            <div className="container">
                <p className="text-info">(ii) QUADRATIC SPACE</p>
                <p className='h1 text-primary'>O(n²)</p>
                <CodeOutput code={`
int[][] matrix = new int[n][n];                 
                    `}></CodeOutput>
                <ul>
                    <li>Stores n × n values</li>
                    
                </ul>
                <p className="text-primary">Space Complexity = O(n²)</p>
                <CodeOutput title="Example for O(n²)" code={`
class Demo {
    static void quadraticExample(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        quadraticExample(3);
    }
}
                    
                    `}>
{`
* * * 
* * * 
* * * 
`}                        
                        </CodeOutput>    
            </div>

        </>
    );
}

export default SpaceComp;