const Display = ({ power, display }) => {
  return (
    <div id="display" className={power ? 'displayOn' : ''}>
      {display}
    </div>
  );
};

export default Display;
