import { useEffect, useState } from "react";
import TableView from "./tableview";
import { Link } from 'react-router-dom'

function DsaTable({ url, dataKey , thcolor , tcolor , idno }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(ans => setData(ans[dataKey]))
      .catch(err => console.error(err));
  }, [url, dataKey]);

  return (
    <>
      {data.map((section) => (
        <section key={section.id} id={`basics-${idno}`}>
          <div >
            <h1 className={tcolor}>{section.name}</h1>
            <Link to={section.link}><i className="bi bi-chevron-double-right" style={{color:"violet"}}></i></Link>
          </div>
          <h6>{section.title}</h6>
          <table className="table table-bordered table-hover">
            <thead className={thcolor}>
              <tr>
                <th>S.No</th>
                <th>Problem</th>
                <th>GFG</th>
                <th>Leetcode</th>
                <th>Solution</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {section.topics.map((topic, index) => (
                <TableView
                  key={index}
                  id={index + 1}
                  tproblem={topic.problem}
                  glink={topic.glink}
                  leetcode={topic.leetcode}
                  solution={topic.solution}
                  difficulty={topic.difficulty}
                />
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </>
  );
}

export default DsaTable;
