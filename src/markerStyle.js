const K_WIDTH = 30;
const K_HEIGHT = 30;

const markerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '7px solid #793236',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#793236',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

export {markerStyle};