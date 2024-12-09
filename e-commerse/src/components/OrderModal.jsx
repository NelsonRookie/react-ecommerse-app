export default function OrderModal({ product, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Added to Cart</h2>
        <p>
          <strong>Product:</strong> {product.title}
        </p>
        <p>
          <strong>Price:</strong> {product.price}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <div className="modal-actions">
          <button onClick={closeModal}>Continue Shopping</button>
          <button onClick={() => alert("Proceeding to Cart!")}>
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
