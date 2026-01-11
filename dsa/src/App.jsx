import './App.css'
import Navbar from './Navbar'

import DsaTable from './DsaTable'

function App() {


  return (
    <>
      <div className="d-flex">
          <div className="w-20 border-end border-primary navbar1" ><Navbar /></div>
          <div className="w-80  p-3 vh-100 text-center ms-2 me-2 overflow-y-auto tablecontent">
  
            <DsaTable url="./data/basics.json" dataKey="basics" thcolor="table-warning" tcolor="text-warning" idno={1} />
            <DsaTable url="./data/arrays.json" dataKey="arrays" thcolor="table-primary" tcolor="text-primary" idno={2} />
            <DsaTable url="./data/matrix.json" dataKey="matrix" thcolor="table-danger" tcolor="text-danger" idno={3} />
            <DsaTable url="./data/recursion.json" dataKey="recursion" thcolor="table-info" tcolor="text-info" idno={4} />
            <DsaTable url="./data/binarySearch.json" dataKey="binarySearch" thcolor="table-success" tcolor="text-success" idno={5} />

            <DsaTable url="./data/sorting.json" dataKey="sorting" thcolor="table-warning" tcolor="text-warning" idno={6} />
            <DsaTable url="./data/linkedList.json" dataKey="linkedList" thcolor="table-primary" tcolor="text-primary" idno={7} />
            <DsaTable url="./data/stack.json" dataKey="stack" thcolor="table-danger" tcolor="text-danger" idno={8} />
            <DsaTable url="./data/queue.json" dataKey="queue" thcolor="table-info" tcolor="text-info" idno={9} />
            <DsaTable url="./data/slidingWindow.json" dataKey="slidingWindow" thcolor="table-success" tcolor="text-success" idno={10} />

            <DsaTable url="./data/trees.json" dataKey="trees" thcolor="table-warning" tcolor="text-warning" idno={11} />
            <DsaTable url="./data/btra.json" dataKey="btra" thcolor="table-primary" tcolor="text-primary" idno={12} />
            <DsaTable url="./data/graphs.json" dataKey="graphs" thcolor="table-danger" tcolor="text-danger" idno={13} />
            <DsaTable url="./data/greedy.json" dataKey="greedy" thcolor="table-info" tcolor="text-info" idno={14} />
            <DsaTable url="./data/dptech.json" dataKey="dptech" thcolor="table-success" tcolor="text-success" idno={15} />

            <DsaTable url="./data/heap.json" dataKey="heap" thcolor="table-warning" tcolor="text-warning" idno={16} />
            <DsaTable url="./data/trie.json" dataKey="trie" thcolor="table-primary" tcolor="text-primary" idno={17} />
            <DsaTable url="./data/strings.json" dataKey="strings" thcolor="table-danger  " tcolor="text-danger" idno={18} />

          </div>
      </div>
    </>
  )
}

export default App
