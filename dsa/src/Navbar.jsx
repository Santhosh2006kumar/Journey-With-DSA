import './index.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <>
            <div className="d-flex flex-column  p-3">
                <h1 className="fs-3 text-primary">Data Structures</h1>
                <a href="#basics-1" className='text-decoration-none text-white cbg'>Basics</a>
                <Link to='/patterns' className='text-decoration-none text-white cbg'>patterns</Link>
                <a href="#basics-2" className='text-decoration-none text-white cbg'>Array</a>
                <a href="#basics-3" className='text-decoration-none text-white cbg'>Matrix</a>
                <a href="#basics-4" className='text-decoration-none text-white cbg'>Recursion</a>
                <a href="#basics-5" className='text-decoration-none text-white cbg'>Binary Search</a>
                <a href="#basics-6" className='text-decoration-none text-white cbg'>Sorting</a>
                <a href="#basics-7" className='text-decoration-none text-white cbg'>LinkedList</a>
                <a href="#basics-8" className='text-decoration-none text-white cbg'>Stack</a>
                <a href="#basics-9" className='text-decoration-none text-white cbg'>Queue</a>
                <a href="#basics-10" className='text-decoration-none text-white cbg'>Sliding Window *</a>
                <a href="#basics-11" className='text-decoration-none text-white cbg'>Trees *</a>
                <a href="#basics-12" className='text-decoration-none text-white cbg'>Backtracking & Recursion Advanced*</a>
                <a href="#basics-13" className='text-decoration-none text-white cbg'>Graphs *</a>
                <a href="#basics-14" className='text-decoration-none text-white cbg'>Greedy *</a>
                <a href="#basics-15" className='text-decoration-none text-white cbg'>Dynamic Programming Technique *</a>
                <a href="#basics-16" className='text-decoration-none text-white cbg'>Heap *</a>
                <a href="#basics-17" className='text-decoration-none text-white cbg'>Trie *</a>
                <a href="#basics-18" className='text-decoration-none text-white cbg'>Strings *</a>
                <Link to='/tcsc' className='text-decoration-none text-white cbg'>Time & Space Complexity</Link>
            </div>
            
        </>
    );
}

export default Navbar;