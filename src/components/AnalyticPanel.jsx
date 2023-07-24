const AnalyticPanel = ({ title, children }) => {
  return (
    <div style={{
      width: '100%',
      backgroundColor: '#ffffff',
      height: '100%',
      border: '1px solid darkgray',
      borderRadius: 4,
    }}>
      <div style={{
        height: 20,
        backgroundColor: 'white',
        borderBottom: '1px solid darkgray',
        borderRadius: 4,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 10,
        textAlign: 'center',
      }}>
        { title }
      </div>
      <div style={{ padding: 10 }}>
        { children }
      </div>
    </div>
  );
};

export default AnalyticPanel;
