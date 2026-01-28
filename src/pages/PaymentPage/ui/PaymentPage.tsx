import {Payment} from "@/features/Payment";
import tPay from "@/shared/assets/images/t-pay.png";
import sberPay from "@/shared/assets/images/sber-pay.png";
import sbp from "@/shared/assets/images/sbp.png";
import mir from "@/shared/assets/images/mir.png";

export const PaymentPage = () => {
  return <Payment payment={[
    {
      src: tPay,
      title: 'T-Pay',
    },
    {
      src: sberPay,
      title: 'SberPay',
    },
    {
      src: sbp,
      title: 'СБП',
    },
    {
      src: mir,
      title: 'Карта',
    },
  ]} />;
};
