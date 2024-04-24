import QRCode from 'qrcode.react';

const QRCodeDisplay: React.FC = () => {
    const valueToEncode = 'Your value here'; // This could be a URL or payment information

    return (
        <div className='text-center'>
            <QRCode value={valueToEncode} className='mx-auto' />
            <p>Scan the QR code to proceed with the payment</p>
        </div>
    );
};

export default QRCodeDisplay;
