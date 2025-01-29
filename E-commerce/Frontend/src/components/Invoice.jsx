import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Invoice = () => {
  const [cartData, setCartData] = useState(null);
  

  useEffect(() => {
    
    // Get the cart data from localStorage

    const storedCartData = localStorage.getItem("cartData");
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData)); // Parse and set the cart data
    }
  }, []);

  if (!cartData) {
    return <h2>Loading...</h2>;
  }

  // Calculate totals for invoice display
  const subtotal = cartData?.cartProducts?.data?.items?.reduce(
    (acc, product) => acc + product.productId.price * product.quantity,
    0
  );
  const shipping = 10; // Static shipping cost
  const total = subtotal + shipping;

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Invoice Details", 105, 20, null, null, "center");

    // Customer Information (static, you can replace with actual customer info if available)
    doc.setFontSize(12);
    doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 20, 40);
    doc.text(`Customer Name: mohini`, 20, 50);
    doc.text(`Customer Email: mohini@gmail.com`, 20, 60);

    // Cart Table
    let startY = 70;
    doc.autoTable({
      startY,
      head: [["Product", "Quantity", "Price", "Total"]],
      body: cartData?.cartProducts?.data?.items?.map((item) => [
        item.productId.name,
        item.quantity,
        `$${item.productId.price.toFixed(2)}`,
        `$${(item.productId.price * item.quantity).toFixed(2)}`,
      ]),
    });

    // Total Amount
    doc.text(
      `Subtotal: $${subtotal.toFixed(2)}`,
      20,
      doc.lastAutoTable.finalY + 10
    );
    doc.text(`Shipping: $10.00`, 20, doc.lastAutoTable.finalY + 20);
    doc.text(`Total: $${total.toFixed(2)}`, 20, doc.lastAutoTable.finalY + 30);

    // Save PDF
    doc.save("invoice.pdf");
  };

  return (
    <div className="container pt-5">
      <h2 className="text-center mb-4">Invoice</h2>
      <div className="row">
        <div className="col-lg-8">
          <table className="table table-bordered text-center">
            <thead className="bg-secondary text-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartData?.cartProducts?.data?.items?.map((product) => {
                return (
                  <tr key={product.productId._id}>
                    <td>
                      <img
                        src={product?.productId?.mainImage}
                        alt={product?.productId?.name}
                        style={{ width: "50px" }}
                      />
                      {product?.productId?.name}
                    </td>
                    <td>{product?.productId?.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product?.productId.price * product.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Invoice Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium">
                  {Number(subtotal).toFixed(2)}
                </h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$10</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">{total.toFixed(2)}</h5>
              </div>
            </div>
          </div>
          <button
            onClick={generatePDF}
            className="btn btn-primary btn-block my-3 py-3"
          >
            Download Invoice as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
