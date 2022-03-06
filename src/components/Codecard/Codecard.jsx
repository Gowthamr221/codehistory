import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import codes from './codes.json'
import 'bootstrap/dist/css/bootstrap.css';
console.log(codes["codes"])
const Codecard = () => {
  return (
      <div className='container'>
       
      {codes.map(item=>(
        <div>
         <h1>{item.title}</h1>
         <h6>{item['asked on']}</h6>
         <h6 className="text-muted">{item.topic}</h6>
        <SyntaxHighlighter className="rounded" language="cpp" style={tomorrow}>
        {item.code}
      </SyntaxHighlighter>
      </div>)
      )}
      </div>
  );
};

export default Codecard;