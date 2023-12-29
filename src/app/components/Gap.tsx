export const Gap = ({ height = '250px' }) => {
  const style = {
    height,
    width: '100%',
    display: 'block',
  };

  return <div style={style} />;
};
