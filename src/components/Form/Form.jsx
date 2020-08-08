import React from "react";
import { Row, Col } from "reactstrap";
import Question from "../Question/Question";
import "./Form.scss";
import Start from "../Start/Start";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import clsx from "clsx";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
function Form({ Data, output, setoutput }) {
  function getSteps() {
    return ["شروع", ...Data.question.map((item) => item.text)];
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  function getStepContent(stepIndex) {
    for (let i = 0; i < Data.question.length; i++) {
      if (stepIndex == 0) {
        return <Start Data={Data} handleNext={handleNext} />;
      } else if (stepIndex == i + 1) {
        return (
          <Question
            question={Data.question[i]}
            output={output}
            setoutput={setoutput}
            handleNext={handleNext}
          />
        );
      }
    }
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const QontoConnector = withStyles({
    alternativeLabel: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    active: {
      "& $line": {
        borderColor: "#784af4",
      },
    },
    completed: {
      "& $line": {
        borderColor: "#784af4",
      },
    },
    line: {
      borderColor: "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })(StepConnector);

  const useQontoStepIconStyles = makeStyles({
    root: {
      color: "#eaeaf0",
      display: "flex",
      height: 22,
      alignItems: "center",
    },
    active: {
      color: "#784af4",
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
    completed: {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
  });

  function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? (
          <Check className={classes.completed} />
        ) : (
          <div className={classes.circle} />
        )}
      </div>
    );
  }

  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
  };

  const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      "& $line": {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    completed: {
      "& $line": {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: "#eaeaf0",
      borderRadius: 1,
    },
  })(StepConnector);

  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: "#ccc",
      zIndex: 1,
      color: "#fff",
      width: 50,
      height: 50,
      display: "flex",
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
    },
    active: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    },
    completed: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    },
  });

  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {};

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  return (
    <Row className="formRow">
      <Col className="formCol" lg="2">
        <div className={classes.root}>
          <Stepper
            className="stepper"
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <p className="questionText">
                  {" "}
                  از اینکه وقت خود را در اختیار ما گذاشتید سپاس گذاریم
                </p>
                <div className="optionButtonDiv">
                  <button className="optionButton" onClick={handleReset}>
                    {" "}
                    دوباره
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div className="backButton-div">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="backButton"
                  >
                    قبلی
                  </Button>
                </div>

              </div>
            )}
          </div>
        </div>
      </Col>
      <Col>
      <div className="footer">
                  <img className="footerLogo" src={Data.logo_url} alt="" srcset=""/>
                </div>
      </Col>
    </Row>
    
  );
}

export default Form;
