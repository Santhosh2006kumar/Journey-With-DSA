import { Link } from 'react-router-dom'
import CodeOutput from './codeoutput';

function LinkedList(){
    return(
        <>
            <div className="container d-flex text-center mt-3"> 
                <div className="">
                <Link to="/" className="text-danger h3"><i className="bi bi-box-arrow-left"></i></Link>
                </div>
                <div className="container">
                    <h1 className="text-primary">LINKED LIST</h1>
                </div>
            </div>
            {/* insert at first */}
            <CodeOutput title="INSERT AT FIRST IN LINKED LIST" isource="/insertAtFirstLL.png" tc="O(1)" sc="O(1)" code={`
import java.util.*;

public class Main{
    static class Node{
        int val;
        Node next;
        Node(int val){
            this.val = val;
            this.next = null;
        }
    }
    public static class SLL{
        Node head;
        void InsertAtFirst(int data){
           Node newNode = new Node(data);
           newNode.next=head;
           head=newNode;
            
        }
        
        void traverse(){
            if(head==null){
                System.out.println("LinkedList is empty!");
                return;
            }
            Node curr=head;
            while(curr!=null){
                System.out.print(curr.val + " ");
                curr=curr.next;
            }
        }
    }
    
    public static void main(String[] args) {
        SLL obj = new SLL();
        Scanner sc = new Scanner(System.in);
        boolean c = true;
        while (c) {
            System.out.print("Enter value: ");
            int data = sc.nextInt();
        
            obj.InsertAtFirst(data);
            obj.traverse();
        
            sc.nextLine();
        
            System.out.print("Do you want to continue? (yes/no): ");
            String ans = sc.nextLine();
        
            if (ans.equalsIgnoreCase("no")) {
                c = false;
            }
        }
    }
}                
                `}>{`
Enter value: 10
10 
Do you want to continue? (yes/no): yes
Enter value: 20
20 10 
Do you want to continue? (yes/no): yes
Enter value: 30
30 20 10 
Do you want to continue? (yes/no): no                
                `}</CodeOutput>

            {/* insert at last */}
            <CodeOutput title="INSERT AT LAST IN LINKED LIST" isource="/insertAtLastLL.png" tc="O(n)" sc="O(1)" code={`
import java.util.*;

public class Main{
    static class Node{
        int val;
        Node next;
        Node(int val){
            this.val = val;
            this.next = null;
        }
    }
    public static class SLL{
        Node head;
        
        void InsertAtLast(int data){
            Node newNode = new Node(data);
            if(head==null){
                head=newNode;
                return;
            }
            Node curr = head;
            while(curr.next!=null){
                curr = curr.next;
            }
            curr.next=newNode;
        }
        
        void traverse(){
            if(head==null){
                System.out.println("LinkedList is empty!");
                return;
            }
            Node curr=head;
            while(curr!=null){
                System.out.print(curr.val + " ");
                curr=curr.next;
            }
        }
    }
    
	public static void main(String[] args) {
	    SLL obj = new SLL();
	    Scanner sc = new Scanner(System.in);
	    boolean c = true;
	    while (c) {
            System.out.print("Enter value: ");
            int data = sc.nextInt();
            obj.InsertAtLast(data);
            obj.traverse();
        
            sc.nextLine(); 
        
            System.out.print("Do you want to continue? (yes/no): ");
            String ans = sc.nextLine();
        
            if (ans.equalsIgnoreCase("no")) {
                c = false;
            }
        }
	}
}            
            `}>{`
Enter value: 10
10 
Do you want to continue? (yes/no): yes
Enter value: 20
10 20 
Do you want to continue? (yes/no): yes
Enter value: 30
10 20 30 
Do you want to continue? (yes/no): yes
Enter value: 40
10 20 30 40 
Do you want to continue? (yes/no): no            
            `}</CodeOutput>

            {/* insert at position */}
            <CodeOutput title="INSERT ELEMENT AT POSITION IN LINKED LIST" isource="/insertAtPosLL.png" tc="O(n)" sc="O(1)" code={`
import java.util.*;

public class Main{
    static class Node{
        int val;
        Node next;
        Node(int val){
            this.val = val;
            this.next = null;
        }
    }
    public static class SLL{
        Node head;
        
        void InsertAtFirst(int data){
           Node newNode = new Node(data);
           newNode.next=head;
           head=newNode;
            
        }
        
        void InsertAtPos(int data , int pos){
            Node newNode = new Node(data);
            if(pos==0){
                InsertAtFirst(data);
                return;
            }
            Node curr = head;
            for(int i = 0 ; i<pos-1 && curr!=null;i++){
                curr = curr.next;
            }
            if(curr==null){
                System.out.println("Index out of bound");
                return;
            }
            newNode.next=curr.next;
            curr.next=newNode;
        }
        
        void traverse(){
            if(head==null){
                System.out.println("LinkedList is empty!");
                return;
            }
            Node curr=head;
            while(curr!=null){
                System.out.print(curr.val + " ");
                curr=curr.next;
            }
            System.out.println();
        }
    }
    
    public static void main(String[] args) {
        SLL obj = new SLL();
        Scanner sc = new Scanner(System.in);
        System.out.println("1. Insert at first\\n2.Insert at position\\n3.traverse\\n4.exit");
        
        while(true){
            System.out.print("Enter choice : ");
            int n = sc.nextInt();
            switch(n){
                case 1:
                    System.out.println("Enter data : ");
                    int data = sc.nextInt();
                    obj.InsertAtFirst(data);
                    break;
                case 2:
                    System.out.println("Enter data : ");
                    int data1 = sc.nextInt();
                    int pos = sc.nextInt();
                    obj.InsertAtPos(data1 , pos);
                    break;
                case 3:
                    obj.traverse();
                    break;
                case 4:
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid input");
            }
        }
    }
}              
            `}>{`
1. Insert at first
2.Insert at position
3.traverse
4.exit
Enter choice : 1
Enter data : 
40
Enter choice : 1
Enter data : 
30
Enter choice : 1
Enter data : 
20
Enter choice : 1
Enter data : 
10
Enter choice : 2
Enter data : 
25
2
Enter choice : 3
10 20 25 30 40 
Enter choice : 4
            
            `}</CodeOutput>

            {/* delete at first */}

            <CodeOutput title="DELETE ELEMENT AT FIRST IN LINKED LIST" code={`
...
void deleteAtFirst(){
    if(head==null){
        System.out.println("Deletion is not possible");
        return;
    }
    head =  head.next;
    
}      
...
public static void main(String[] args) {
        SLL obj = new SLL();
        Scanner sc = new Scanner(System.in);
        System.out.println("1. Insert at first\\n2.Insert at position\\n3.traverse\\n4.exit\\n5.delete at first");
        
        while(true){
            System.out.print("Enter choice : ");
            int n = sc.nextInt();
            switch(n){
                case 1:
                    System.out.println("Enter data : ");
                    int data = sc.nextInt();
                    obj.InsertAtFirst(data);
                    break;
                case 2:
                    System.out.println("Enter data : ");
                    int data1 = sc.nextInt();
                    int pos = sc.nextInt();
                    obj.InsertAtPos(data1 , pos);
                    break;
                case 3:
                    obj.traverse();
                    break;
                case 4:
                    System.exit(-1);
                    break;
                case 5:
                    obj.deleteAtFirst();
                    break;
                    
                default:
                    System.out.println("Invalid input");
            }
        }
    }      
            
            `}>{`
1. Insert at first
2.Insert at position
3.traverse
4.exit
5.delete at first
Enter choice : 1
Enter data : 
10
Enter choice : 1
Enter data : 
20
Enter choice : 1
Enter data : 
30
Enter choice : 3
30 20 10 
Enter choice : 5
Enter choice : 3
20 10 
Enter choice : 4            
            `}</CodeOutput>
        </>
    );
}

export default LinkedList;