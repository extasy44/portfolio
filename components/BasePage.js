import {
  Container
} from "reactstrap";


const BasePage = props => {
  const { title, className, children } = props;

  return (
    <div className={`base-page ${className}`}>
      <Container>
        {title && (
          <div className="page-header">
            <h1> {title} </h1>
          </div>
        )}
        {children}
      </Container>
    </div>
  );
};

BasePage.defaultProps = {
    className: ''
}

export default BasePage;
