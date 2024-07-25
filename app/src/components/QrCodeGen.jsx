import React, { useState } from "react";
import QRCode from "qrcode.react";

const QrCodeGen = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <h2>Qr Code Generator</h2>
      <div>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>

      <QRCode value={input} />
    </>
  );
};

export default QrCodeGen;
