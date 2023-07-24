import Flow from './components/Flow';

const CampaignProfile = ({ steps })  => {
  return (
    <div style={{ height: '100%', backgroundColor: '#efefef', overflowY: "100%"  }}>
      <Flow mode="profile" steps={steps} />
    </div>
  );
};

export default CampaignProfile;