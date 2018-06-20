import { withProps } from 'recompose';

export default withProps(
  ({ height, width }) => ({
    dimensions: {
      height: height ? height : "400px",
      width: width ? width : "100%"
    }
  })
);
