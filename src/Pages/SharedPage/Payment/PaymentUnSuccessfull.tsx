import { useParams } from "react-router";

const PaymentUnSuccessfull = () => {
  const { transactionId } = useParams();
  return (
    <div>
      <h1>Failded to Pay</h1>
      <h1>Your Transaction id was : {transactionId} </h1>
    </div>
  );
};

export default PaymentUnSuccessfull;
