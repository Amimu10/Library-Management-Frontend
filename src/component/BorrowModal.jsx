// BorrowModal.js
import { useState } from 'react'; 

const BorrowModal = ({ onClose, onBorrow }) => {
  const [returnDate, setReturnDate] = useState('');
  const handleBorrow = () => {
    // Perform necessary actions, e.g., reduce quantity, add to Borrowed Books, etc.
    onBorrow(returnDate);
    onClose();
  };

  return (
    <div className="modal open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Borrow Book</h3>
        <form>
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
          <div className="modal-action">
            <button type="button" onClick={handleBorrow} className="btn btn-primary">
              Submit
            </button>
            <button type="button" onClick={onClose} className="btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BorrowModal;
