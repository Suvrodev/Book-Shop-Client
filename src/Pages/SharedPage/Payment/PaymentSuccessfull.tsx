import { useParams } from "react-router";

const PaymentSuccessfull = () => {
  const { transactionId } = useParams();
  return (
    <div>
      <h1>Payment Successfully</h1>
      <h1>Your Transaction is id: {transactionId} </h1>
    </div>
  );
};

export default PaymentSuccessfull;
