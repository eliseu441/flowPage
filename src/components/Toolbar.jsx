const Toolbar = ({ currentMode, changeMode }) => {

  return (
    <div className="toolbar">
      { currentMode === 'profile' && (
        <div className="button" onClick={() => changeMode('fullscreen')}>
          Export
        </div>
      )}
      { currentMode === 'fullscreen' && (
        <div className="button" onClick={() => changeMode('profile')}>
          Close
        </div>
      )}
    </div>
  );
};

export default Toolbar;