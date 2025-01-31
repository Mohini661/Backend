import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const [cartData, setCartData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartData = localStorage.getItem("cartData");
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }

    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  if (!cartData || !userDetails) {
    return <h2 className="text-center">Loading...</h2>;
  }

  const subtotal = cartData?.cartProducts?.data?.items?.reduce(
    (acc, product) => acc + product.productId.price * product.quantity,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  const generatePDF = () => {
    const doc = new jsPDF();

    // Title and Header
    doc.setFontSize(22);
    doc.text("Invoice", 105, 20, null, null, "center");

    // Customer Information
    doc.setFontSize(12);
    doc.text(`Invoice Date: ${new Date().toLocaleString()}`, 20, 40);
    doc.text(`Customer Name: ${userDetails.username}`, 20, 50);
    doc.text(`Customer Email: ${userDetails.email}`, 20, 60);

    // Add a line separator
    doc.setDrawColor(0, 0, 0);
    doc.line(20, 65, 190, 65);

    // Cart Items Table
    doc.autoTable({
      startY: 70,
      head: [["Product", "Quantity", "Price", "Total"]],
      body: cartData?.cartProducts?.data?.items?.map((item) => [
        item.productId.name,
        item.quantity,
        `$${item.productId.price.toFixed(2)}`,
        `$${(item.productId.price * item.quantity).toFixed(2)}`,
      ]),
    });

    // Total Section
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 20, finalY);
    doc.text(`Shipping: $10.00`, 20, finalY + 10);
    doc.text(`Total: $${total.toFixed(2)}`, 20, finalY + 20);

    doc.save("invoice.pdf");

    navigate("/");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Invoice Details</h2>
      <div className="row">
        <div className="col-lg-8">
          <table className="table table-bordered text-center">
            <thead className="bg-secondary text-light">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartData?.cartProducts?.data?.items?.map((product) => (
                <tr key={product.productId._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={product?.productId?.mainImage}
                        alt={product?.productId?.name}
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      <span>{product?.productId?.name}</span>
                    </div>
                  </td>
                  <td>${product?.productId?.price.toFixed(2)}</td>
                  <td>{product.quantity}</td>
                  <td>
                    ${(product?.productId.price * product.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary text-light">
              <h4 className="font-weight-bold m-0">Invoice Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium">${subtotal.toFixed(2)}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$10.00</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-light">
              <div className="d-flex justify-content-between">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">${total.toFixed(2)}</h5>
              </div>
            </div>
          </div>
          <button
            onClick={generatePDF}
            className="btn btn-primary btn-block py-3"
          >
            Download Invoice as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
