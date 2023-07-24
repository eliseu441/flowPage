import { Handle, Position }  from 'react-flow-renderer';

import ProgressIcon from './ProgressIcon';

const getIcon = (node) => {
  switch (node.type) {
    case 'email-1to1':
      return '&#xf658;';
    case 'automated-email':
      return '&#xf674;';
    case 'sms':
      return '&#xf7cd;';
    case 'survey':
      return '&#xf681;';
    case 'call':
      return '&#xf0f0;';
    case 'event':
      return '&#xf073;';
    default: break;
  };
}

const Node = ({ data: nodeData }) => {
  const stepIcon = getIcon(nodeData);
  return (
    <>
      <div className="node-container">
        <div className={`node-status node-status-${nodeData.phase.toLowerCase()}`}>
          { nodeData.phase }
        </div>
        { nodeData.previous.length > 0 && (
          <Handle
            type="target"
            position="top"
            style={{
              border: '1px solid rgb(152,152,152)',
              backgroundColor: 'white',
            }}
          />
        )}
        <div style={{
            height: '150px',
            width: '150px',
            marginTop: 7,
            flex: 3,
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <ProgressIcon
            values={nodeData.data.analytics}
            total={nodeData.data.potentialTarget}
            icon={nodeData.data.target}
          />
          <div style={{ marginTop: "-5px", fontFamily: "Lucida Console", color: "rgb(0,0,0, 0.8)", fontSize:"15px",fontWeight: "bold", textAlign: "center", width: '100%'}}>
            
              { nodeData.data.projeto }
             
          </div>
        </div>
        { nodeData.final !== true && (
          <Handle
            type="source"
            position="bottom"
            style={{ 
              border: '1px solid rgb(152,152,152)',
              backgroundColor: 'white',
            }}
          />
          
        )}
      </div>
    </>
  );
};

export default Node;
