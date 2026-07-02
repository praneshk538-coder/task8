const withBackgroundColor = (WrappedComponent) => {

  return ({ color, ...props }) => {

    return (
      <div
        style={{
          backgroundColor: color,
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px"
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };

};

export default withBackgroundColor;