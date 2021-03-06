import styled from 'styled-components';

export default styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${({color}) => color ? color : "#3498db"};
  height: ${({height}) => height ? height : "120px"};
  width: ${({height}) => height ? height : "120px"};
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
