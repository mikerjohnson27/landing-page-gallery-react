import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipButton() {
  return (
    <>
      {['Digital Only', 'Digital + USB Stick(Free)'].map((buttonaddtocart) => (
        <OverlayTrigger
          key={buttonaddtocart}
          placement={buttonaddtocart}
          overlay={
            <Tooltip id={`tooltip-${buttonaddtocart}`}>
              $150 <strong>{buttonaddtocart}</strong>.
            </Tooltip>
          }
        >
          <Button className="button-margin" variant="secondary">{buttonaddtocart}</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default TooltipButton;