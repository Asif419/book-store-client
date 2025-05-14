import { useSearchParams, useNavigate } from "react-router-dom";
import { useVerifyOrderQuery } from "../redux/features/api/endpoints/paymentApi";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

const ThankYou = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { data } = useVerifyOrderQuery( searchParams.get("orderId"),
  {
    refetchOnMountOrArgChange: true,
  })
  const order: OrderData = data?.data?.[0];
  console.log(order);

  // const order = {
  //   orderId: "ORD123456",
  //   name: "Md Sajedul Islam",
  //   email: "sajedul@example.com",
  //   product: "Animation Course",
  //   quantity: 1,
  //   totalPrice: 999,
  //   status: "Paid",
  //   date: "2025-04-12",
  //   paymentMethod: "Surjopay",
  // };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-2xl shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className=" text-success text-2xl text-center">🎉 Thank You!</h2>
          <p className="text-lg text-center">Your order has been placed successfully.</p>

          <div className="card-actions justify-end mt-6">
            <button
              className="btn btn-primary rounded-2xl"
              onClick={() => navigate("/")}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
