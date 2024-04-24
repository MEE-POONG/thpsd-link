

interface ModalSuccessProps {
    onClose: () => void;
    onConfirm: () => void;
  }

  const ModalSuccess: React.FC<{ onCancel: () => void; onConfirm: () => void }> = ({ onCancel, onConfirm }) => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
                <div className="flex justify-end gap-4">
                    <button onClick={onCancel} className="bg-gray-200 text-black p-2 rounded">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="bg-green-500 text-white p-2 rounded">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};