import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import AdviceGenerator from "@/components/advice-generator/AdviceGenerator";
import AdviceService, { Slip } from "@/services/AdviceService";

const AdviceGeneratorPage = () => {
  const [advice, setAdvice] = useState<Slip>();
  const [error, setError] = useState("");

  const adviceFunc = () => {
    const { request, cancel } = AdviceService.getAdvice();
    request
      .then((RESPONSE) => setAdvice(RESPONSE.data))
      .catch((ERROR) => {
        if (ERROR instanceof CanceledError) return;
        setError(ERROR.message);
      });

    return () => cancel();
  };

  useEffect(() => {
    adviceFunc();
  }, []);

  return (
    <>
      {error && <p className="text-red">{error}</p>}
      <AdviceGenerator
        id={Number(advice?.slip.id)}
        advice={String(advice?.slip.advice)}
        randomAdvice={adviceFunc}
      />
    </>
  );
};

export default AdviceGeneratorPage;
