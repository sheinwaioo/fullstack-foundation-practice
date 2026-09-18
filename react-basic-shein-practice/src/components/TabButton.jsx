const TabButton = ({children, onPress}) => {
  return <button onClick={() => onPress("Harry")}>{children}</button>
};

export default TabButton;
