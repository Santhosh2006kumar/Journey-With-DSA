import { useState,useEffect } from 'react'
import TableView from './tableview';

function Basics() {
  const [problem, setProblem] = useState([]);

  useEffect(() => {
    fetch("./data/basics.json")
      .then(res => res.json())
      .then(ans => setProblem(ans.basics));
  }, []);

  return (
    <>
      {problem.map((basic) => (
        <section id={`basic-${basic.id}`}>
            <div key={basic.id} >
            <h1 className="text-warning">{basic.name}</h1>
            <h6>{basic.title}</h6>

            <table className="table table-bordered table-hover">
                <thead className='table-primary'>
                <tr>
                    <th>S.No</th>
                    <th>Problem</th>
                    <th>GeeksforGeeks</th>
                    <th>Leetcode</th>
                    <th>Solution</th>
                </tr>
                </thead>

                <tbody>
                {basic.topics.map((topic, index) => (
                    <TableView
                    key={index}
                    id={index + 1}
                    tproblem={topic.problem}
                    glink={topic.glink}
                    leetcode={topic.leetcode}
                    solution={topic.solution}
                    />
                ))}
                </tbody>
            </table>
            </div>
        </section>
      ))}
    </>
  );
}

export default Basics;