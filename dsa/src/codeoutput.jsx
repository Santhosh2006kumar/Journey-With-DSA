import CodeBlock from './code'
import { Link } from 'react-router-dom'


function CodeOutput({ title, isource, code, children , tc ,sc }) {
  return (
    <section className="my-4 container">
      
      <div className='d-flex justify-content-between'>
        <h3 className="text-primary">{title}</h3>
<Link
  to="/ai-chat"
  state={{
    problem: title,
    language: "Java"
  }}
  className="ai-btn text-decoration-none border border-white"
>
  Ask AI <i className="bi bi-lightning-fill text-info"></i>
</Link>      </div>

      {isource && (
        <div className="text-center my-1">
          <img
            src={isource}
            alt={`${title} diagram`}
            className="img-fluid"
          />
        </div>
      )}

      <CodeBlock>{code}</CodeBlock>

      {children && (
  <div>
    <p style={{ color: "violet" }}>OUTPUT</p>
    <pre className="output-block fs-6">
      {children}
    </pre>
  </div>
)}
      <div className="complexity-box ">
        {tc && (
          <div className="complexity-item time">
            <span className="label">TIME COMPLEXITY</span>
            <span className="value">{tc}</span>
          </div>
        )}

        {sc && (
          <div className="complexity-item space">
            <span className="label">SPACE COMPLEXITY</span>
            <span className="value">{sc}</span>
          </div>
        )}
        {sc && (

        <div className='container'>
          <p>Time Complexity and Space Complexity <Link to="/tcsc">Learn more</Link></p>
        </div>
        )}
      </div>

    </section>
  );
}

export default CodeOutput;